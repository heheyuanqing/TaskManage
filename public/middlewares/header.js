import request from 'superagent';

export default store => next => action => {

    if(action.type === 'searchTasks'){
        window.location.href='/result';
    }

    if (action.type === 'searchResult') {
        console.log("根据关键词搜索任务信息");
        request.get('/searchResult')
            .query(action)
            .end((err, res) => {
                if (err) {
                    console.log("请求搜索结果出错");
                    console.log(err);
                }
                else {
                    const data = JSON.parse(res.text);
                  next({type:'showResult',result:data.result});
                }
            })
    }
    else next(action);
}