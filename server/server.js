'use strict';
const express = require('express');
const path = require('path');
const badyParse = require('body-parser');
const cookieParse = require('cookie-parser');
const session = require('express-session');
const Store = require('express-mysql-session');

const app = new express();

const signin = require('../server/routers/login');

const db={
    host:'localhost',
    user:'root',
    password:'123456',
    database:'ganshaer',
    port:3000
};

app.use(cookieParse());
app.use(session(
    {
        secret:'react',
        store:new Store(db)
    }
));
app.use(function (req,res,next) {
    const usr = res.session.usrInfor;
    if(usr){
        app.locals.usrInfor = usrInfor;
    }
    next();
});

app.use(badyParse.json());
app.use(badyParse.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

app.use('/',signin);

app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'public','home.html'));
});

app.listen(8000,()=>{
    console.log("sever start in 8000");
});