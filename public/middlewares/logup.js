import request from 'superagent';

export default store => next => action => {
    if (action.type === 'logup') {
        console.log(action);
        request.post('/signup')
            .send(action)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const data = JSON.parse(res.text);
                    if (data.state === 'SUCESS' && data.type === '0') {
                        alert('注册成功！');
                        window.location.href = '/signin';
                    }
                    if (data.state === 'FAIL' && data.type === '1') {
                        alert('用户名已存在！');
                    }
                    if (data.state === 'FAIL' && data.type === '2') {
                        alert('注册失败！');
                    }
                }
            })

    }
    else next(action);
}