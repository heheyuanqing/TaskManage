import React, {Component} from 'react';
import Task from '../container/joinInTask';
import Shortcut from "./shortcut";


class AllTasksList extends Component {


    render() {
        const tasks = this.props.allTasks;
        const myTasks = this.props.myTasks;
        console.log(this.props);

        return (
            <div>
                <div className="homeLeftPart">
                    {tasks.length > 0 ? tasks.map((task,i) => <Task key={i} taskInfor={task}/>) : ""}
                </div>
                <div className="homeRightPart">
                    <Shortcut tasks={myTasks}/>
                </div>
            </div>
        )
    }
}

export default AllTasksList;