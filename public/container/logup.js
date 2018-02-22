import {connect} from 'react-redux';
import Logup from '../component/logup';
import {signUp} from '../actions/actions';

const mapStateToProps = (state)=>{
    return ;
};

const mapDispatchToProps = (dispatch)=>({
    clickSignUp:()=>{
        const logupUsr = document.getElementsByTagName('input');
        const newUsr = {
            email:logupUsr[0].value,
            name:logupUsr[1].value,
            psw:logupUsr[2].value
        };
        dispatch(signUp(newUsr));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Logup);