//登录时获取登录用户信息
'use strict';
export default (state = {onlineUsr: ""}, action) => {
    if (action.type === 'getOnlineUsr') {
        console.log(action);
        const online = action.usrInfor.name;
        return Object.assign({}, state.onlineUsr, online)
    }
    if (action.type === 'showHome') {
        console.log(action);
        const online = action.infor.usr;
        return Object.assign([], state.onlineUsr, online)
    }
    return state;
}