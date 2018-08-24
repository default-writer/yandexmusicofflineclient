const sqlite3 = require('sqlite3').verbose();

const dbo = require('../test/sqlite3client').Database;
const find_all_files_names = require('../test/db').find_all_files_names;

const fs = require('fs');

const sqlite3Database = dbo({
    open: (source, callback) => new sqlite3.Database(source, sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            throw new Error("db error: " + err.message);
        }
        if (callback && typeof callback == 'function') {
            callback();
        }
    }),
    close: (db, callback) => db.close((err) => {
        if (err) {
            throw err;
        }
        if (callback && typeof callback == 'function') {
            callback(db);
        }
    }),
    query: (db, sql, callback) => {
        db.each(sql, (err, row) => {
            if (err) {
                throw new Error("db error: " + err.message);
            }
            if (callback && typeof callback == 'function') {
                callback(row);
            }
        });
    }
});

const global_connection = {};

// 1. ARRANGE
let database = sqlite3Database;
let connection = global_connection;


find_all_files_names(connection, (row) => {
    console.log(roW);
});

// 2. ACT
connection.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
database.open(connection);
database.query(connection);
database.close(connection);