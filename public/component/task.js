import React,{Component} from 'react';

class Task extends Component{
    render(){
    const {takePartIn}= this.props;
        return(
            <div className="task">
                <div className="promulgator">
                    <img src='../images/avatar.jpg' alt="创建人头像"/>
                    <span>{this.props.taskInfor.promulgator}</span>
                    <button onClick={takePartIn}>加入</button>
                </div>
                <div className="introduction">
                    <p>{this.props.taskInfor.introduction}</p>
                </div>
                <div className="operation">
                    <span className="actorNum">参与人数：5</span>
                    <span>创建时间:{this.props.taskInfor.establishTime}</span>
                </div>
            </div>
        )
    }
}
export default Task;