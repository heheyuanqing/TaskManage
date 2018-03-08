import {connect} from 'react-redux';
import ResultPage from '../component/result';

const mapStateToProps = (state) => {
    return {
        allTasks: state.allTasks,
        myTasks:state.myTasks
    };
};

const mapDispatchToProps = (dispatch) => ({
    showResult: () => {
        let key = localStorage.getItem("keyWord");
        dispatch({type: 'searchResult', keyWord:key});
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
