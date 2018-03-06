import {connect} from 'react-redux';
import Task from '../component/task';
import {taskPartIn} from "../actions/actions";

const mapStateToProps = (state)=>{
    return {};
};

const mapDispatchToProps = (dispatch)=>({

      takePartIn:(e)=>{
          e.stopPropagation();
        const taskInfor ={name: sessionStorage.getItem("name"),taskName:name};
          dispatch(taskPartIn(taskInfor));
      }

});
export default connect(mapStateToProps,mapDispatchToProps)(Task);