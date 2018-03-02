//用户登录
export const signIn = (usrInfor) => ({
    type: 'login',
    usrInfor
});

//用户注册
export const signUp = (newUsr) => ({
    type: 'logup',
    newUsr
});

//关键词搜索相关任务
export const searchTasks = (keyWord)=>({
    type:'searchTasks',
    keyWord
});

//显示首页
export const showHome = (allTask)=>({
    type:'showHome',
    allTasks
});