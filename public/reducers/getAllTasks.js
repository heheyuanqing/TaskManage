//获取所有任务信息

export default (state={allTasks:[]},action)=>{
    if (action.type === 'createNewTask'){
        return (Object.assign({},state.allTasks,action.taskContent));
    }
    return state;
}