const  taskActorSQL ={
    getMyTasksName:'select taskName from taskActors where usrName=?',
    getMyTasks:'select * from taskActors where usrName=?',
    addActors:'insert into taskActors (usrName,taskName) values (?,?)'
};
module.exports=taskActorSQL;