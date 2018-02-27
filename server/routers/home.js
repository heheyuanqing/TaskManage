'use strict';
const express = require('express');
const router =express.Router();
const database = require('../databases/connect');
const taskData = require('../databases/taskSQL');

router.get('/home',(req,res)=>{
    database.query(taskData.getAllTasks,function (err,result) {
        if(err){
            console.log(err);
        }
        else {
            if(result.length===0){
                res.json({state:'FAIL'});
            }
            else {
                res.json({state:'SUCESS',allTasks:result});
            }
        }
    });
});
module.exports=router;