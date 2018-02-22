export default (state={usrInfor:[]},action)=>{
    if(action.type==='login'){
        return {action.usrInfor}
    }
    return state;
}