const sqlite3 = require('sqlite3').verbose();
const dbo = require('../dbo/dbo');
const find_all_files_names = require('../query/query').find_all_files_names;
const fs = require('fs');

// 1. ARRANGE
const connection = {
    source: './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite'
};

const database = dbo({
    open: (context, callback) => context.db = new sqlite3.Database(context.source, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            throw new Error("db error: " + err.message);
        }
        if (callback && typeof callback === 'function') {
            callback(context.source);
        }
    }),
    query: (context, callback) => {
        context.db.each(context.sql, (err, row) => {
            if (err) {
                throw new Error("db error: " + err.message);
            }
            if (callback && typeof callback === 'function') {
                callback(row);
            }
        });
    },
    close: (context, callback) => {
        let db = context.db;
        context.db.close((err) => {
            if (err) {
                throw err;
            }
            if (callback && typeof callback === 'function') {
                callback(db);
            }
        });
        delete context.db;
    }
});

find_all_files_names(connection, {
    open: (src) => {
        console.log('open ' + src);
    },
    query: (row) => {
        //console.log('data ' + JSON.stringify(row));
        let file = (row.album ? (row.album + ' - ') : '') + (row.version ? (row.version + ' - ') : '') + (row.position ? (row.position + ' - ') : '') + row.track;
        console.log(row.file + ' --> ' + file);
        let dir = '/Users/user/Music/Pentatonix/';
        fs.exists(dir + row.file + '.mp3', (exists) => {
            if (exists === true) {
                fs.rename(dir + row.file + '.mp3', dir + file + '.mp3', function (err) {
                    if (err) console.log('ERROR: ' + err);
                });
            } else {
                console.log(row.file);
            }
        });
},
close: (db) => {
    console.log('close ' + db.filename);
}
});

// 2. ACT
database.open(connection);
database.query(connection);
database.close(connection);