import {connect} from 'react-redux';
import Logup from '../component/logup';
import {signUp} from '../actions/actions';

const mapStateToProps = (state)=>{
    return{};
};

const mapDispatchToProps = (dispatch)=>({
    clickLogUp:(e)=>{
        e.stopPropagation();
        const logupUsr = document.getElementsByTagName('input');
        const newUsr = {
            email:logupUsr[0].value,
            name:logupUsr[1].value,
            psw:logupUsr[2].value
        };
        if(newUsr.name === ''){
            alert("昵称不能为空");
        }
        if(newUsr.psw===''||newUsr.psw.length<6||newUsr.psw.length>12){
            alert("密码长度应大于6并且小于12");
        }
        if(newUsr.email.indexOf('@')===-1){
            alert("邮箱格式不正确！");
        }
        dispatch(signUp(newUsr));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Logup);