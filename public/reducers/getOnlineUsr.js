//登录时获取登录用户信息

export default (state={online:{}},action)=>{
    if (action.type === 'login'){
        const online = state.online;
        return {online:action.usrInfor}
    }
    return state;
}