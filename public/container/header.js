import {connect} from 'react-redux';
import Header from '../component/header';
import {searchTasks} from '../actions/actions';

const  mapStateToProps = (state) =>{
    return {};
};

const mapDispatshTProps= (dispatch)=>({
    clickSearch:(e)=> {
        e.stopPropagation();
        const keyWord = document.getElementsByTagName('input');
        dispatch(searchTasks(keyWord[0].value))
    }
});

export default connect(mapStateToProps,mapDispatshTProps)(Header);