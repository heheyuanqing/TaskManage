import request from 'superagent';

export default store => next => action => {
    /*
    1.根据task_id获取task的全部信息
    2.根据task_id获取成员信息
    3.根据用户和task_id获取用户的进程
    */
    if(action.type==='requestTask'){
        request.get('/taskProcess')
            .query(action)
            .end((err,res)=>{
                if(err){
                    console.log("请求任务进度失败");
                    console.log(err);
                }
                else{
                    const data = JSON.parse(res.text);
                    next({type:'showProcess',data:data.process});
                }
            });
    }
    else {
        next(action);
    }
}