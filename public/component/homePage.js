import React,{Component} from 'react';
import Header from "./header";
import AllTasksList from "./allTasksList";
import '../style/home.css';

class HomePage extends Component{
    render(){

        const {allTasks} = this.props;
        console.log(allTasks);
        return(
            <div>
                <Header/>
                <AllTasksList allTasks={allTasks}/>
            </div>
        )
    }
}

export default HomePage;