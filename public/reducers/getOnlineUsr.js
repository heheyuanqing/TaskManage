//登录时获取登录用户信息
'use strict';
export default (state={onlineUsr:{}},action)=>{
    if (action.type === 'getOnlineUsr'){
        const online = state.onlineUsr;
        console.log(action);
        // return {online:action.usrInfor}
      return Object.assign({},state.onlineUsr,action.usrInfor)
    }
    return state;
}