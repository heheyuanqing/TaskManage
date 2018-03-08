import {connect} from 'react-redux';
import Header from '../component/header';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    clickSearch: (e) => {
        e.stopPropagation();
        const keyWord = document.getElementsByTagName('input');
        if(localStorage.getItem("keyWord")!==null){
            localStorage.clear();
        }
        localStorage.setItem("keyWord",keyWord[0].value);
        dispatch({type:'searchTasks'});
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);
