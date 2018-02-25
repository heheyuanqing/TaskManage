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

//主页显示最新的任务项
export const showNewestTask = () => ({
    type: 'showNewestTasks'
});

//在主页中显示自己未完成的任务
export const showUnfinishTasks = (taskName)=>({
    type:'showUnfinishTasks',
    taskName
});

//参加任务
export const takePartIn = (actorInfor) => ({
    type:'takePartInTask',
    actorInfor
});

//创建任务
export const newTask =(taskContent)=>({
    type:'createNewTask',
    taskContent
});

//增加任务的分任务
export const partTask=()=>({
    type:'addPartTask'
});

//提交任务进度
export const taskProcess=()=>({
    type:'changeTaskProcess'
});

//退出任务
export const exitTask =()=>({
    type:'exitTask'
});

