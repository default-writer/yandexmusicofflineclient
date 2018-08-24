const open = 'open';
const close = 'close';
const query = 'query';

let connection = {};
let context = {};

let controller = function (dbo, obj, value) {
    try {
        switch (value) {
            case open:
                context.db = dbo.open(context.source, context.callback);
                break;
            case query:
                dbo.query(context.db, context.sql, context.callback);
                break;
            case close:
                dbo.close(context.db, context.callback);
                break;
        }
    } catch (err) {
        console.log(err.message);
    }
};

const api = (controller, action, state, callback) => {
    context = state ? state : connection;
    let previous = context.callback;
    context.callback = callback ? callback[action] : state.callback[action];
    controller.action = action;
    context.callback = previous;
    context = undefined;
};

Object.defineProperty(connection, 'open', {
    __proto__: null, // нет унаследованных свойств
    enumerable: false, // не перечисляется
    writable: false, // не перезаписывается
    configurable: false, // не настраивается
    value: function (state, callback) {
        api(this, open, state, callback);
    }
});

Object.defineProperty(connection, 'close', {
    __proto__: null, // нет унаследованных свойств
    enumerable: false, // не перечисляется
    writable: false, // не перезаписывается
    configurable: false, // не настраивается
    value: function (state, callback) {
        api(this, close, state, callback);
    }
});


Object.defineProperty(connection, 'query', {
    __proto__: null, // нет унаследованных свойств
    enumerable: false, // не перечисляется
    writable: false, // не перезаписывается
    configurable: false, // не настраивается
    value: function (state, callback) {
        api(this, query, state, callback);
    }
});

// Если доступен метод freeze, предотвращаем добавление свойств
// value, get, set, enumerable, writable и configurable
// к прототипу Object
(Object.freeze || Object)(Object.prototype);

let dbo = (db) => new Proxy(connection, {
    set(obj, key, value) {
        if (key === 'source') {
            obj[key] = value;
            return;
        }
        if (key === 'action') {
            controller(db, obj, value);
            obj[key] = value;
            return;
        }
    }
});


module.exports = dbo;