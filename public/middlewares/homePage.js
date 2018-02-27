import request from 'superagent';

export default store=>next=>action=>{

    //请求获取所有的任务基本信息
    if(action.type === 'showNewestTasks'){
        request.get('/home')
            .end((err,res)=>{
                if (err){
                    console.log(err);
                }
                else {
                    const data = JSON.parse(res.text);
                    if(data.state === 'SUCESS'){
                       action.tasks=data.allTasks;
                    }
                    if(data.state === 'FAIL'){
                      action.tasks='';
                    }
                }
            })
    }

}