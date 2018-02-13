import React,{Component} from 'react';

class Task extends Component{
    render(){
        return(
            <div className="task">
                <div className="promulgator">
                    <img src={this.props.infor.avator} alt=""/>
                    <span>{this.props.infor.promulgator}</span>
                    <button>加入</button>
                </div>
                <div className="introduction">
                    <p>每天阅读1小时，坚持每日打卡……</p>
                </div>
                <div className="operation">
                    <span>参与人数： 255</span>
                    <span>创建时间 2017-01-01</span>
                </div>
            </div>
        )
    }
}
export default Task;