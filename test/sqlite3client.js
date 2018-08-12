let sqlite3client = (eval) => ((data) => new Proxy(data, {
    set(obj, key, val) {
        obj[key] = val;
        eval(obj);
    }
}))({});

module.exports = sqlite3client;