import React, {Component} from 'react';

class Shortcut extends Component {
    render() {

        const {myRecentTasks} = this.props;

        return (
            <div className="shortcut">
                <div className="createEntry">
                    <div className="plus">+</div>
                    <span>创建任务</span>
                </div>
                <div className="myTask">
                    <a href="#">我的任务</a>
                    <ul className="mytaskList">
                        {myRecentTasks?myRecentTasks.map((task) => {<li><a>{task.introduction}</a></li>}):"没有加入任务"}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Shortcut;