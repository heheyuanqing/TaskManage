import {connect} from 'react-redux';
import Shortcut from '../component/shortcut';
import showMyRecentTasks from '../actions/actions';

const mapStateToProps = (state) => {

    return {myRecentTasks: state.onlineUsr}

};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Shortcut);