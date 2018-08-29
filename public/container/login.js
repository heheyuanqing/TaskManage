import {connect} from 'react-redux';
import Login from '../component/login';
import {signIn} from "../actions/actions";
import request from "superagent";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({

    clickSignIn: (e) => {
        e.stopPropagation();
        const loginUsr = document.getElementsByTagName('input');
        const usrInfor = {
            name: loginUsr[0].value,
            psw: loginUsr[1].value
        };
        // dispatch(signIn(usrInfor));
        dispatch(function (dispatch){
            request.post('/signin')
                .send(usrInfor)
                .end((err, res) => {
                    if (err)
                        console.log(err);
                    else {
                        // console.log(res);
                        const data = JSON.parse(res.text);
                        console.log(data);
                        if (data.state === 'SUCESS' && data.type === '0') {
                            window.location.href = '/home';//跳转到主页的组件
                            console.log('登录成功');
                        }
                        if (data.state === 'FAIL' && data.type === '1') {
                            alert('用户不存在');
                        }
                        if (data.state === 'FAIL' && data.type === '2') {
                            alert('密码错误');
                        }
                    }
                })
        })
    },
    clickSignUp: (e) => {
        e.stopPropagation();
        // dispatch({type:'createNewUsr'});
        dispatch(function (dispatch){
            // console.log(action);
            window.location.href = '/signup';
        })
    }

});
export default connect(mapStateToProps, mapDispatchToProps)(Login);