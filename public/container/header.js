import {connect} from 'react-redux';
import Header from '../component/header';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    clickSearch: (e) => {
        e.stopPropagation();
        const keyWord = document.getElementsByTagName('input');
        dispatch({type:'searchTasks',keyWord:keyWord});
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Header);
