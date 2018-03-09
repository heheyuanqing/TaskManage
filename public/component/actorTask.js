import React, {Component} from 'react';
import Header from '../container/header';
import TaskProcess from "./myTaskProcess";
import Actors from "./taskActors";
import '../style/myTaskPage.css';

class ActorPage extends Component {
    componentWillMount() {
        this.props.getTaskProcess();
    }

    render() {
        const {task,myProcess,actor}=this.props;
        return (
            <div>
                <Header/>
                <TaskProcess task={task} process={myProcess}/>
                <Actors actor={actor}/>
            </div>
        )
    }
}

export default ActorPage;