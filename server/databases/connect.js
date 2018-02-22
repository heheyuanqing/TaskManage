'use strict';
const mysql = require('mysql');

let connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'ganshaer',

    });

connection.connect((err) => {
    if (err) {
        console.log(err);
        console.log("连接数据库失败！");
        return;
    }

    console.log("连接数据库成功！");
});

module.exports = connection;