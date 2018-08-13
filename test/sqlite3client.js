const opened_state = 'opened';
const closed_state = 'closed';

let connection = {};

function connectionValue(value) {
    let d = connectionValue.d || (
        connectionValue.d = {
            __proto__: null,  // нет унаследованных свойств
            enumerable: false, // не перечисляется
            writable: false, // не перезаписывается
            configurable: false, // не настраивается
            value: null
        }
    );
    d.value = value;
    return d;
}

Object.defineProperty(connection, 'state', connectionValue('static'));

// Если доступен метод freeze, предотвращаем добавление свойств
// value, get, set, enumerable, writable и configurable
// к прототипу Object
(Object.freeze || Object)(Object.prototype);

let sqlite3client = (eval) => ((data) => new Proxy(data, {
    set(obj, key, val) {
        obj[key] = val;
        eval(obj);
    }
}))(connection);

module.exports = sqlite3client;