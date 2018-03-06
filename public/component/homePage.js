import React, {Component} from 'react';
// import Header from "./header";
import AllTasksList from "./allTasksList";
import '../style/home.css';
import Header from '../container/header';

class HomePage extends Component {

    componentWillMount() {
        this.props.getInfor();
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

export default HomePage;