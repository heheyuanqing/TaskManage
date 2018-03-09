const  taskActorSQL ={
    getAllProcess:'select * from process where user_no=? and task_id=?',
    getMyTasksId:'select task_id from process where user_no=?',
    getTaskActor:'select user_no from process where task_id=?',
    addActor:'insert into process (task_id,user_no) values (?,?)'
};
module.exports=taskActorSQL;