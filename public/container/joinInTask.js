import {connect} from 'react-redux';
import Task from '../component/task';
import takePartIn from '../actions/actions';

const mapStateToProps = ()=>{
    return ;
};

const mapDispatchToProps = (dispatch)=>({
  return{
      takePartIn:()=>{
          const actorInfor ={
              name:'从session中获取当前登录用户的信息'
          };
          dispatch(takePartIn(actorInfor));
      }
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(Task);