import {connect} from 'react-redux';
import AllTaskList from '../component/allTasksList'
const mapStateToProps = (state) => {
    return {taskInfor: state.allTasks}
};
const mapDispatchToProps=()=>{
    return ;
};
export default connect(mapStateToProps,mapDispatchToProps)(AllTaskList);