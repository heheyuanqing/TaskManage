'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const taskData = require('../databases/taskSQL');
const usrTask = require('../databases/processSQL');

router.get('/homePage', (req, res) => {
    let all = {};
    if (req.session.onlineUsr === undefined) {
        res.json({state: "FAIL"});
    }
    else {
        all.usr = req.session.onlineUsr.name;
        //获取所有的任务
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
        //获取用户参与的任务
        database.query(usrTask.getMyTasksId, all.usr, (err, tasksId) => {
            if (err) {
                console.log(err);
            }
            else {
                if (tasksId.length === 0) {
                    all.usrTasks = [];
                }
                else {
                    all.usrTasks = [];
                    tasksId.map((id) => {
                        database.query(taskData.getTaskName, id.task_id, (err, taskName) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(taskName);

                                all.usrTasks.push({task_name:taskName[0].task_name});
                            }
                            console.log(all);
                            res.json({state: "SUCESS", all: all})
                        });
                    });
                }
            }

        });
        // res.json({state: "SUCESS", all: all})

    }
});
module.exports = router;