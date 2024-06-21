import connection from './datasource.js';

export default class Database {
    constructor() {
    }

    static select(tableName) {
        return connection.query(`select * from ${tableName}`);
    }

    static selectById(tableName, key, id) {
        return connection.query(`select * from ${tableName} where ${key} = ${id}`);
    }

    static selectByColumn(tableName, key, id) {
        return connection.query(`select * from ${tableName} where ${key} like '%${id}%'`);
    }

    static insert(tableName, data) {
        const values = [];
        let keys = "";
        for (let key of Object.keys(data)) {
            values.push(data[key]);
            keys += "? ,";
        }
        return connection.query(`insert into ${tableName} values (${keys.substring(0, keys.length - 1)})`, values);
    }
}