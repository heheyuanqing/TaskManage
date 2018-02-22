import {connect} from 'react-redux';
import MainPart from '../component/mainPart';

const mapStateToProps = (state) => {
    return {taskInfor: state.allTasks}
};
const mapDispatchToProps=()=>{
    return ;
};
export default connect(mapStateToProps,mapDispatchToProps)(MainPart);