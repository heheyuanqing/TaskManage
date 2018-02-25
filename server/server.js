'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Store = require('express-mysql-session');

const app = new express();

const login = require('./routers/login');

const db={
    host:'localhost',
    user:'root',
    password:'123456',
    database:'ganshaer',
    port:3306
};

app.use(cookieParser());
// app.use(session(
//     {
//         resave: false, //添加 resave 选项
//         saveUninitialized: true,
//         secret:'react',
//         store:new Store(db)
//     }
// ));
/*
app.use(function (req,res,next) {
    const usr = req.session.usrInfor;
    if(usr){
        app.locals.usrInfor = usrInfor;
    }
    next();
});*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

app.use('/',login);

app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'public','home.html'));
});

app.listen(8080,()=>{
    console.log("sever start in 8080");
});