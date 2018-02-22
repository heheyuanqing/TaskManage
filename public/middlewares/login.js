import request from 'superagent';

export default state => next => action => {
    if (action.type === 'login') {
        console.log(action);

        request.post('/signin')
            .send(action)
            .end((err, res) => {
                if (err)
                    console.log(err);
                else{
                    const data = res.text;
                    if(data.state==='SUCESS'&&data.type==='0'){
                        window.location.href='./'//跳转到主页的组件
                    }
                    if(data.state==='FAIL'&&data.type==='1') {
                        alert('用户不存在');
                    }
                    if(data.state==='FAIL'&&data.type==='2') {
                        alert('密码错误');
                    }
                }
            })
    }
    else next(action);
}