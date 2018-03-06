import {connect} from 'react-redux';
import HomePage from '../component/homePage';

const mapStateToProps = (state) => {

    return {
        allTasks: state.allTasks,
        myTasks:state.myTasks
    }
};
const mapDispatchToProps = (dispatch) => ({
    getInfor:()=>{
        dispatch({type:'homeRequest'})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);