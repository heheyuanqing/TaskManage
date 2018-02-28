const taskSQL = {
    getAllTasks: 'select * from allTasks',
    addTask:'insert into allTasks (taskName,promugator,introduction,establishTime) values (?,?,?,?)'
};
module.exports = taskSQL;