export default (state={taskProcess:{}},action)=>{
    if(action.type==='showProcess'){
        const process={
            task:action.data.task,
            myProcess:action.data.myProcess,
            actor:action.data.number
        };
        Object.assign({},state.taskProcess,process);
    }
    return state;
}