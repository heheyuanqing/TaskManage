//登录时获取登录用户信息
'use strict';
export default (state={onlineUsr:{}},action)=>{
    if (action.type === 'login'){
       console.log(action);
        const online = state.onlineUsr;
        return {online:action.usrInfor}
    }
    return state;
}