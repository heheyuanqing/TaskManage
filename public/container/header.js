import {connect} from 'react-redux';
import Header from '../component/header';
import {searchTasks} from '../actions/actions';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    clickSearch: (e) => {
        const keyWord = document.getElementsByTagName('input');
        // console.log(keyWord[0].value);
        dispatch(searchTasks(keyWord[0].value))
    }
});
const clickT = connect(mapStateToProps,mapDispatchToProps)(Header);
export default clickT;