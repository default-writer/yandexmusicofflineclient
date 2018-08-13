const connection_open = 'open';
const connection_close = 'close';
const connection_query = 'query';

let connection = {
    state: connection_close
};

let context;

let controller = function (dbo, obj, value) {
    if (value === connection_open) {
        if (!!!context.db) {
            try {
                let db = dbo.open();
                context.db = db;
                return;
            } catch (err) {
                console.log(err.message);
            }
        }
    }
    if (value === connection_close) {
        if (context.db) {
            try {
                dbo.close(context.db);
                delete context.db;
                return;
            } catch (err) {
                console.log(err.message);
            }
        }
    }
    if (value === connection_query) {
        if (context.db && context.sql) {
            try {
                dbo.query(context.db, context.sql);
            } catch (err) {
                console.log(err.message);
            }
        }
    }
};

Object.defineProperty(connection, 'open', {
    __proto__: null, // нет унаследованных свойств
    enumerable: false, // не перечисляется
    writable: false, // не перезаписывается
    configurable: false, // не настраивается
    value: function (state) {
        context = state ? state : connection;
        this.state = connection_open;
        context = undefined;
    }
});

Object.defineProperty(connection, 'close', {
    __proto__: null, // нет унаследованных свойств
    enumerable: false, // не перечисляется
    writable: false, // не перезаписывается
    configurable: false, // не настраивается
    value: function (state) {
        context = state ? state : connection;
        this.state = connection_close;
        context = undefined;
    }
});


Object.defineProperty(connection, 'query', {
    __proto__: null, // нет унаследованных свойств
    enumerable: false, // не перечисляется
    writable: false, // не перезаписывается
    configurable: false, // не настраивается
    value: function (state) {
        context = state ? state : connection;
        this.state = connection_query;
        context = undefined;
    }
});

// Если доступен метод freeze, предотвращаем добавление свойств
// value, get, set, enumerable, writable и configurable
// к прототипу Object
(Object.freeze || Object)(Object.prototype);

let Database = (db) => new Proxy(connection, {
    set(obj, key, value) {
        if (key === 'state') {
            controller(db, obj, value);
            obj[key] = value;
        }
    }
});

module.exports.Database = Database;