let connection = {};
let context = {};

let controller = {
    source: null,
    open: function (dbo) {
        dbo.open(context, typeof context.callback === 'function' ? context.callback : undefined);
    },
    query: function (dbo) {
        dbo.query(context, typeof context.callback === 'function' ? context.callback : undefined);
    },
    close: function (dbo) {
        dbo.close(context, typeof context.callback === 'function' ? context.callback : undefined);
    }
};

for (let property of Object.getOwnPropertyNames(controller)) {
    const api = (controller, action, state, callback) => {
        context = state ? state : connection;
        let previous = context.callback;
        context.callback = callback ? callback[action] : (state ? (state.callback ? state.callback[action] : undefined) : undefined);
        controller.action = action;
        context.callback = previous;
        context = undefined;
    };
    Object.defineProperty(connection, property, {
        __proto__: null, // нет унаследованных свойств
        enumerable: false, // не перечисляется
        writable: false, // не перезаписывается
        configurable: false, // не настраивается
        value: function (state, callback) {
            api(this, property, state, callback);
        }
    });
}

// Если доступен метод freeze, предотвращаем добавление свойств
// value, get, set, enumerable, writable и configurable
// к прототипу Object
(Object.freeze || Object)(Object.prototype);

module.exports = (dbo) => new Proxy(connection, {
    set(obj, key, action) {
        if (key === 'action' && controller[action]) {
            controller[action](dbo);
        }
    }
});