import {connect} from 'react-redux';
import MyPart from '../component/myPart';
import showMyRecentTasks from '../actions/actions';

const mapStateToProps = (state)=>{
    return {
        unfinished:state.usr
    };
};

const mapDispatchToProps=()=>{

};