import React,{Component} from 'react';

export default class TaskProcess extends Component{
    render(){
        return(
            <div className="taskLeft">
                <div className="taskTitle">
                    <div className="taskName">学习打卡</div>
                    <button>新信息</button>
                    <div className="taskSummary">通过3天的学习掌握html知识并完成任务</div>
                </div>
                <div className="processList">
                    <div className="process">
                        <div className="tag"></div>
                        <span>完成HTML的网站练习，提交总结</span>
                    </div>
                </div>
            </div>
        )
    }
}