import React, {Component} from 'react';

function MyTask(props) {
    return(
        <div className="myTaskEntry">
            <a href="#">{props.task.taskName}</a>
    </div>)
}

class Shortcut extends Component {
    render() {

        const myRecentTasks = this.props.tasks;
        // console.log(myRecentTasks);
        return (
            <div className="shortcut">
                <div className="createEntry">
                    <div className="plus">+</div>
                    <span>创建任务</span>
                </div>
                <div className="myTask">
                    <a href="#">我的任务</a>
                    <div className="mytaskList">
                        {myRecentTasks.length > 0 ? myRecentTasks.map((task, i) => <MyTask key={i} task={task}/>) : "没有加入任务"}
                    </div>
                </div>
            </div>
        )
    }
}

export default Shortcut;