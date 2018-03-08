'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const taskData = require('../databases/taskSQL');

router.get('/searchResult', (req, res) => {
    const keyWord = req.query.keyWord;
    database.query(taskData.getAllTasks, (err, tasks) => {
        if (err) {
            console.log(err);
        }
        else {
            //对任务的创建人进行匹配
            let result = [];
            tasks.map((task) => {
                if (task.task_maker === keyWord) {
                    result.push(task);
                }
            });
            console.log(result);
            res.json({result:result});
        }
    });
});
module.exports = router;