import React, {Component} from 'react';
import AllTasksList from "./allTasksList";
import '../style/home.css';
import Header from '../container/header';

class ResultPage extends Component {

    componentWillMount(){
        this.props.showResult();
    }

    render() {
        const {allTasks,myTasks} = this.props;
        return (
            <div>
                <Header/>
                <AllTasksList allTasks={allTasks} myTasks={myTasks}/>
            </div>
        )
    }
}

export default ResultPage;