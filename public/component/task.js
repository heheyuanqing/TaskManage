import React, {Component} from 'react';

class Task extends Component {

    componentDidMount() {
        const name=this.props.taskInfor.task_name,
        id = this.props.taskInfor.task_id;
        localStorage.setItem(name, id);
    }

    render() {
        const {takePartIn} = this.props;
        const taskName = this.props.taskInfor.task_name;
        return (
            <div className="task">
                <div className="promulgator">
                    <img src='../images/avatar.jpg' alt="创建人头像"/>
                    <span>{this.props.taskInfor.task_maker}</span>
                    <p id={localStorage.getItem(this.props.taskInfor.task_name)}>{this.props.taskInfor.task_name}</p>
                    <button onClick={takePartIn}>加入</button>
                </div>
                <div className="introduction">
                    <p>{this.props.taskInfor.task_introduction}</p>
                </div>
                <div className="operation">
                    <ul>
                        <li>参与人数：5</li>
                        <li>创建时间:{this.props.taskInfor.task_time}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Task;