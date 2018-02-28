import React, {Component} from 'react';
import Header from "./header";
import AllTasksList from "./allTasksList";
import '../style/home.css';

class HomePage extends Component {
    render() {
        const {online,allTasks} = this.props;
        console.log(this.props);
        return (
            <div>
                <Header usr={online}/>
                <AllTasksList allTasks={allTasks}/>
            </div>
        )
    }
}

export default HomePage;