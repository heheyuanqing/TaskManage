import React,{Component} from 'react';
import TaskProcess from "./myTaskProcess";
import Actors from "./taskActors";
import '../style/myTaskPage.css'

class TaskPage extends Component {
    render(){
        return(
            <div>
                <TaskProcess/>
                <Actors/>
            </div>
        )
    }
}

export default TaskPage;