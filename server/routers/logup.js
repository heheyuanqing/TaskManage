'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const usrData = require('../databases/usrSQL');

router.post('/signup', (req, res) => {
    const name = req.body.newUsr.name;
    const email = req.body.newUsr.email;
    const psw = req.body.newUsr.psw;

    database.query(usrData.getUsrInfor,name,(err,exit)=> {
        if (err){
            console.log(err);
        }
        else {
            if (exit.length === 0){

                database.query(usrData.addUsr,[name,email,psw],(err) =>{
                    if(err){
                        console.log(err);
                        res.json({state:'FAIL',type:'2'});
                    }
                    else {
                        console.log('注册成功！');
                        res.json({state:'SUCESS',type:'0'});
                    }
                });
            }
            else {
                console.log('用户已存在');
                res.json({state:'FAIL',type:'1'});
            }
        }
    });

});
module.exports = router;