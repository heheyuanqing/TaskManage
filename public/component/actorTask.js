import React,{Component} from 'react';
import Header from '../container/header';
import TaskProcess from "./myTaskProcess";
import Actors from "./taskActors";
import '../style/myTaskPage.css';

class ActorPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <TaskProcess/>
                <Actors/>
            </div>
        )
    }
}

export default ActorPage;