//获取所有任务信息

export default (state = {allTasks: []}, action) => {
    if (action.type === 'showHome') {
        const allTasks = action.infor.tasks;

        return Object.assign([], state.allTasks, allTasks)
    }

    return state;
}