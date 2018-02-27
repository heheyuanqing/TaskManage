import React, {Component} from 'react';
import Task from "./task";
import Shortcut from "./shortcut";



class AllTasksList extends Component {

    render() {
        const tasks = this.props.allTasks;
        return (
            <div>
                <div className="homeLeftPart">
                    {tasks.length<=0?tasks.map((task)=><Task key={i} taskInfor={task}/>):"没有任务"}
                </div>
                <div className="homeRightPart">
                    <Shortcut/>
                </div>
            </div>
        )
    }
}

export default AllTasksList;