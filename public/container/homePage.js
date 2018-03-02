import {connect} from 'react-redux';
import HomePage from '../component/homePage';
import {showNewestTask} from "../actions/actions";

const mapStateToProps = (state) => {

    return {
        online: state.onlineUsr,
        allTasks: state.allTasks
    }
    // return state.allTasks?{allTasks: state.allTasks}:{allTasks:{}}
};
const mapDispatchToProps = (dispatch) => ({
    getInfor:()=>{
        dispatch({type:'homeRequest'})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);