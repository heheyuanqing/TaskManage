const  taskActorSQL ={
    getMyTasksName:'select taskName from taskActor where usrName=?',
    getMyTasks:'select * from taskActor where usrName=?',
    addActors:'insert into taskActor (usrName,taskName) values (?,?)'
};
module.exports=taskActorSQL;