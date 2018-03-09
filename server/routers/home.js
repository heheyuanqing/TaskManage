'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const taskData = require('../databases/taskSQL');
const usrTask = require('../databases/processSQL');
const async = require('async');

router.get('/homePage', (req, res) => {
    var all = {usr: "", tasks: [], usrTasks: []};

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
                     tasksId.map((id) => {
                         database.query(taskData.getTaskName, id.task_id, (err, taskName) => {
                             if (err) {
                                 console.log(err);
                             }
                             else {
                                 all.usrTasks.push({task_name: taskName[0].task_name});
                             }
                         });
                     });
                     res.json({state: "SUCESS", all: all});

                 }
             }
         });

//串行操作
      /*  function AsyncSeries(callback) {
            async.series({
                tasks: function (callback) {
                    let task = [];
                    database.query(taskData.getAllTasks, function (err, allTasks) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            if (allTasks.length !== 0) {
                                task = allTasks;
                            }
                            console.log("task:");
                            console.log(task);
                            callback(null, task);

                        }
                    });
                },
                usrTasks: function (callback) {
                    let usrTasks = [];
                    const user = req.session.onlineUsr.name;
                    database.query(usrTask.getMyTasksId, user, (err, tasksId) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            if (tasksId.length !== 0) {
                                tasksId.map((id) => {
                                    database.query(taskData.getTaskName, id.task_id, (err, taskName) => {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            usrTasks.push({task_name: taskName[0].task_name});
                                        }
                                        console.log("usrTask:");
                                        console.log(usrTasks);

                                    });

                                });
                                callback(null, usrTask);

                            }

                        }
                    });
                }
            });
        }

        AsyncSeries( function(err, all) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(all);
                res.json({state: "SUCESS", all: all});
            }
        })*/

    }
});
module.exports = router;