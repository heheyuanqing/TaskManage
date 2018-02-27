import {connect} from 'react-redux';
import HomePage from '../component/homePage';
import {showNewestTask} from "../actions/actions";

const mapStateToProps = (state) => {
    return state.allTasks?{allTasks: state.allTasks}:{allTasks:{}}
};
const mapDispatchToProps=(dispatch)=>({

});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);