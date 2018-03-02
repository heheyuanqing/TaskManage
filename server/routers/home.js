'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const taskData = require('../databases/taskSQL');
const usrTask = require('../databases/taskActorSQL');

router.get('/homePage', (req, res) => {
    console.log("请求登录用户信息及其参加的任务以及所有任务");
    let all = {};
    if (req.session.onlineUsr === undefined) {
    res.json({state:"FAIL"});
    }
    else {
        all.usr = req.session.onlineUsr.name;
        database.query(taskData.getAllTasks, function (err, allTasks) {
            if (err) {
                console.log(err);
            }
            else {
                if (allTasks.length === 0) {
                    all.tasks = [];
                }
                else {
                    all.tasks = allTasks;
                }

            }
        });
        database.query(usrTask.getMyTasksName, all.usr, (err, tasksName) => {
            if (err) {
                console.log(err);
            }
            else {
                if (tasksName.length === 0) {
                    all.usrTasks = [];
                }
                else {
                    all.usrTasks = tasksName;
                }
                console.log(all);
            }
            res.json({state:"SUCESS",all:all})

        });
    }
});
module.exports = router;