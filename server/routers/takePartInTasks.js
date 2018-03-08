'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const usrTask = require('../databases/processSQL');
// const taskData = require('../databases/taskSQL');

router.post('/takePartInTask', (req, res) => {
    const actor = req.body.actor;
    // console.log(actor);
    database.query(usrTask.getMyTasksId,actor.name,(err,exit)=>{
        if(err){
            console.log(err);
        }
        else {
            if (exit.length === 0){
                database.query(usrTask.addActor, [actor.taskId, actor.name], (err) => {
                    if (err) {
                        console.log(err);
                        res.json({state: 'FAIL', type: 1});
                    }
                    else {
                        res.json({state: 'SUCESS', type: 0});
                    }
                });
            }
            else {
                res.json({state:'FAIL',type:2});
            }
        }

    });
  /*  database.query(usrTask.addActor, [actor.taskId, actor.name], (err) => {
        if (err) {
            console.log(err);
            res.json({state: 'FAIL', type: 1});
        }
        else {
            res.json({state: 'SUCESS', type: 0});
        }
    });*/


});
module.exports = router;