import React,{Component} from 'react';
import '../style/header.css';
class Header extends Component{
    render(){
        return(
            <div className="header">
                <span>干啥儿</span>
                <input type="text" className="search"/>
                <div className="my">
                    <img src="./images/avatar.jpg" className="myAvatar"/>
                    <span>heheyuanqing</span>
                </div>
            </div>
        )
    }
}

export default Header;