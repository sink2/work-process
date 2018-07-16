import path from 'path';
import fs from 'fs';

const configs = {};

fs.readdirSync(path.normalize(__dirname)).reduce((list, value) => {
    
}, []);

class Config {
    constructor(config) {
        this.configMap = {a: 1};
    }

    get(key) {
        return this.configMap[key];
    }

    reload() {

    }
}

export default function() {
    return new Config()
}