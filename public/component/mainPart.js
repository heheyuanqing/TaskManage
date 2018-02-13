import React, {Component} from 'react';
import '../style/home.css';
import Task from "./task";
import MyPart from "./myPart";

class MainPart extends Component {
    constructor(){
        super();
        this.state={
            promulgator: "heheyuanqing",
            avator: "./images/avatar.jpg",
            introduction: "每天阅读1小时，坚持每日打卡……",
            number: "255",
            time: "2017-01-02"
        };
    }
    render() {

        return (
            <div>
                <div className="mainLeft">
                    <Task infor={this.state}/>
                    <Task infor={this.state}/>
                    <Task infor={this.state}/>
                </div>
                <div className="mainRight">
                    <MyPart/>
                </div>
            </div>
        )
    }
}

export default MainPart;