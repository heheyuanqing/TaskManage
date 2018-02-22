import React,{Component} from 'react';
import Header from "./header";
import AllTasksList from "./allTasksList";
import '../style/home.css';

class HomePage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <AllTasksList/>
            </div>
        )
    }
}

export default HomePage;