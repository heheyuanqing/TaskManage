import React,{Component} from 'react';
import {render} from 'react-dom';
import Login from "./component/login";
import Logup from "./component/logup";
import Header from "./component/header";
import MainPart from "./component/mainPart";
import TaskPage from "./component/taskPage";


class Entry extends Component{
    render(){
        return(
            <div>
                <Header/>
                <TaskPage/>
            </div>
        )
    }

}
render(<Entry/>,document.getElementById('login'));