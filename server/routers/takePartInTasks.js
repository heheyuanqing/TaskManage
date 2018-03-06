'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const taskActors = require('../databases/taskActorSQL');

router.post('/tskePartInTask',(req,res)=>{
    const actor = req.body.actor;
    database.query(taskActors.addActors,[actor.name,actor.taskName],(err)=>{
        if(err){
            console.log(err);
            res.json({state:'FAIL',type:1});
        }
        else{
           res.json({state:'SUCESS',type:0});
        }
    })
});
module.exports = router;