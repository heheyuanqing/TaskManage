import React, {Component} from 'react';


export default class TaskProcess extends Component {
    render() {
        return (
            <div className="taskLeft">
                <div className="taskTitle">
                    <div className="taskName">{this.props.task.task_name}</div>
                    <button>新信息</button>
                    <div className="taskSummary">{this.props.task.introduction}</div>
                </div>
                <div className="processList">
                    <div className="process">
                        <div className="tag"></div>
                        <span>{this.props.task.process_1}</span>
                    </div>
                    <div className="process">
                        <div className="tag"></div>
                        <span>{this.props.task.process_2}</span>
                    </div>
                    <div className="process">
                        <div className="tag"></div>
                        <span>{this.props.task.process_3}</span>
                    </div>
                    <div className="process">
                        <div className="tag"></div>
                        <span>{this.props.task.process_4}</span>
                    </div>
                    <div className="process">
                        <div className="tag"></div>
                        <span>{this.props.task.process_5}</span>
                    </div>
                </div>
            </div>
        )
    }
}