export default class Storage {

    static parse(val, isSet) {
        if (isSet) return JSON.stringify(val);
        return val == 'undefined' || val == 'null' ? null : JSON.parse(val);
    }

    static has(key) {
        return !!Storage.parse(window.localStorage.getItem(key));
    }
    static get(key) {
        return new Promise((resolve, reject) => {
            try {
                Storage.parse(window.localStorage.getItem(key));
                resolve();
            } catch (err) {
                reject(err);
            };
        });        
    }

    static set(key, value) {
        return new Promise((resolve, reject) => {
            try {
                window.localStorage.setItem(key, Storage.parse(value, true));
                resolve();
            } catch (err) {
                reject(err);
            };
        });  
    }

    static clear(key) {
        return new Promise((resolve, reject) => {
            try {                
                if (key) {
                    window.localStorage.removeItem(key);
                } else {
                    window.localStorage.clear();
                }
                resolve();
            } catch (err) {
                reject(err);
            };
        }); 
    }
}