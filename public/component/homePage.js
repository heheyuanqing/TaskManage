import React, {Component} from 'react';
import Header from "./header";
import AllTasksList from "./allTasksList";
import '../style/home.css';

class HomePage extends Component {

   /* componentDidMount() {
        this.props.getInfor();
    }
*/
    render() {
        const {online, allTasks} = this.props;

        return (
            <div>
                <Header usr={online}/>
                <AllTasksList allTasks={allTasks}/>
            </div>
        )
    }
}

export default HomePage;