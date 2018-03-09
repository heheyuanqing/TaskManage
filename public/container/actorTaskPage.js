import {connect} from 'react-redux';
import ActorPage from '../component/actorTask';
const mapStateToProps = (state)=>{
    return {
        /*任务的所有信息allOfTask/用户进度信息myProcess/所有参与者名称actorName*/
        task:state.taskProcess.task,
        myProcess:state.taskProcess.myProcess,
        actor:state.taskProcess.actor
    };
};

const mapDispatchToProps = (dispatch)=>({
    getTaskProcess:()=>{
        const base={
            name:sessionStorage.getItem("name"),
            id:localStorage.getItem("clickID")
        };
        dispatch({type:'requestTask',base:base});
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(ActorPage);