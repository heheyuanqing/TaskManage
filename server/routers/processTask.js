'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const taskData = require('../databases/taskSQL');
const usrTask = require('../databases/processSQL');

router.get('/taskProcess',(req,res)=>{
    const base = req.query.base;
    let process;
    //获取任务的所有信息
    database.query(taskData.getTask,base.id,(err,task)=>{
        if(err){
            console.log(err);
        }
        else{
            process.task=task;
        }
    });
    //获取用户的进度
    database.query(usrTask.getAllProcess,[base.name,base.id],(err,process)=>{
        if(err){
            console.log(err);
        }
        else{
            process.myProcess=process;
        }
    });
    //获取参与者的个数
    database.query(usrTask.getTaskActor,base.id,(err,num)=>{
        if(err){
            console.log(err);
        }
        else{
            process.number=num;
        }
        res.json({state:'SUCESS',process:process});
    });

});
module.exports=router;