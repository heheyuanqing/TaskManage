//登录时获取登录用户信息
'use strict';
export default (state = {onlineUsr: {}}, action) => {
    if (action.type === 'getOnlineUsr' || action.type === 'showHome') {
        console.log(action);
        const online = action.usrInfor.name || action.allTasks.usr;
        return Object.assign({}, state.onlineUsr, online)
    }
    return state;
}