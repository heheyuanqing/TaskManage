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


//加入任务
export const taskPartIn = (actor) =>({
    type:'takePartIn',
        actor
});
