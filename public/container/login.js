import {connect} from 'react-redux';
import Login from '../component/login';
import {signIn} from "../actions/actions";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({

    clickSignIn: () => {
        const loginUsr = document.getElementsByTagName('input');
        const usrInfor = {
            name: loginUsr[0].value,
            psw: loginUsr[1].value
        };
        dispatch(signIn(usrInfor));

    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);