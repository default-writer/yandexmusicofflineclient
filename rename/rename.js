const sqlite3 = require('sqlite3').verbose();
const dbo = require('../dbo/dbo');
const find_all_files_names = require('../query/query').find_all_files_names;
const fs = require('fs');

// 1. ARRANGE
const connection = {
    source: './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite'
};

const database = dbo({
    open: (context, callback) => new sqlite3.Database(context.source, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            throw new Error("db error: " + err.message);
        }
        if (callback && typeof callback === 'function') {
            callback(context.source);
        }
    }),
    query: (db, sql, callback) => {
        db.each(sql, (err, row) => {
            if (err) {
                throw new Error("db error: " + err.message);
            }
            if (callback && typeof callback === 'function') {
                callback(row);
            }
        });
    },
    close: (db, callback) => db.close((err) => {
        if (err) {
            throw err;
        }
        if (callback && typeof callback === 'function') {
            callback(db);
        }
    })
});

find_all_files_names(connection, {
    open: (src) => {
        console.log('open ' + src);
    },
    query: (row) => {
        console.log('data ' + JSON.stringify(row));
    },
    close: (db) => {
        console.log('close ' + db.filename);
    }
});

// 2. ACT
database.open(connection);
database.query(connection);
database.close(connection);