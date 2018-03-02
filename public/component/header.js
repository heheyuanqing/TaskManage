import React,{Component} from 'react';
import '../style/header.css';
class Header extends Component{
    render(){

        const {clickSearch} = this.props;

        return(
            <div className="header">
                <span>干啥儿</span>
                <input type="text" className="search" placeholder={"输入任务关键字/创建人"}/>
                <button onClick={clickSearch}>搜索</button>
                <div className="my">
                    <img src="./images/avatar.jpg" className="myAvatar"/>
                    <span>{sessionStorage.getItem("name")}</span>
                </div>
            </div>
        )
    }
}

export default Header;