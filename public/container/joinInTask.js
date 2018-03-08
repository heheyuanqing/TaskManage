import {connect} from 'react-redux';
import Task from '../component/task';
import {taskPartIn} from "../actions/actions";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({

    takePartIn: (e) => {
        e.stopPropagation();
        const id = e.target.parentElement.childNodes[2].id;
        // console.log(id);
        const taskInfor = {name: sessionStorage.getItem("name"), taskId:id};
        dispatch(taskPartIn(taskInfor));
    }

});
export default connect(mapStateToProps, mapDispatchToProps)(Task);