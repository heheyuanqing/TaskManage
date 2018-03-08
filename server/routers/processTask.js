'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const taskData = require('../databases/taskSQL');
const usrTask = require('../databases/processSQL');

router.get('/taskProcess',(req,res)=>{
    const base = req.query.base;

    //获取任务的所有信息
    //获取用户的进度
    //获取参与者的个数

});
module.exports=router;