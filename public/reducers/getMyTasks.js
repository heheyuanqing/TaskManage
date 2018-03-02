//获取我参加的任务

export default (state={myTasks:[]},action)=>{
    if(action.type === 'showHome'){
        const myTasks = action.infor.usrTasks;
        // console.log(myTasks);
        return Object.assign([],state.myTasks,myTasks)
    }
    return state;
}