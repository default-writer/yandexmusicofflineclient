const sqlite3clientexports = {};

(function (exports) {
    
    const connection_opened = 'opened';
    const connection_closed = 'closed';

    let connection = {
        state: connection_closed
    };

    let context;

    let controller = function (dbo, value) {
        if (value === connection_opened) {
            if (context.dbo === undefined) {
                try {
                    let db = dbo.open();
                    context.dbo = db;
                    return;
                } catch (err) {
                    console.log(err.message);
                }
            }
        }
        if (value === connection_closed) {
            if (context.dbo !== undefined) {
                try {
                    dbo.close(context.dbo);
                    delete context.dbo;
                    return;
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
            this.state = connection_opened;
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
            this.state = connection_closed;
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
                controller(db, value);
                obj[key] = value;
            }
        }
    });

    exports.Database = Database;

})(sqlite3clientexports);

module.exports.Database = sqlite3clientexports.Database;