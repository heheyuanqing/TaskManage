//获取所有任务信息

export default (state = {allTasks: []}, action) => {
    if (action.type === 'showHome') {
        const allTasks = action.infor.tasks;

        return Object.assign([], state.allTasks, allTasks)
    }
    if(action.type==='showResult'){
        console.log(action);
        const result = action.result;
        return Object.assign([],state.result,result);
    }

    return state;
}