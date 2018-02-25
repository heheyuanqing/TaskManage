import React, {Component} from 'react';
import Task from "./task";
import Shortcut from "./shortcut";

class AllTasksList extends Component {
   /* constructor(){
        super();
        this.state={
            promulgator: "heheyuanqing",
            avator: "./images/avatar.jpg",
            introduction: "每天阅读1小时，坚持每日打卡……",
            number: "255",
            time: "2017-01-02"
        };
    }*/

    render() {
        const tasksInfor =this.props.tasksInfor;

        return (
            <div>
                <div className="homeLeftPart">
                    {tasksInfor.map((infor)=><Task ket={i} taskInfor={infor}/>)}
                </div>
                <div className="homeRightPart">
                    <Shortcut/>
                </div>
            </div>
        )
    }
}

export default AllTasksList;