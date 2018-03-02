import request from 'superagent';

export default store => next => action => {

    /* 1.获取当前用户的的登录信息
       2.获取数据库内所有的任务信息
       3.获取当前用户参加的任务信息
    */
    if (action.type === 'homeRequest') {
        request.get('/home')
            .end((err, res) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const data = JSON.parse(res.text);
                    if (data.state === 'SUCESS') {
                        sessionStorage.setItem("name", data.all.usr);
                        next({type: 'showHome', infor: data.all});
                    }
                    else  if (data.state === 'FAIL') {
                        alert("请先登录账号！");
                        window.location.href = '/signin';
                    }
                }
            })
    }
}