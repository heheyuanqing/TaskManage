import  React,{Component} from 'react';
import '../style/login.css';
class Login extends Component{
 render(){

     const {clickSignIn}=this.props;

     return (
         <div className="loginContainer">
             <div className="title">
                <span>干啥儿</span>
             </div>
             <div className="input-group">
                <div className="input">
                    <span>昵称：</span>
                    <input type="text"/>
                </div>
                 <div className="input">
                     <span>密码：</span>
                     <input type="password"/>
                 </div>
                 <div className="more">
                     <a href="#">忘记密码？</a>
                     <input type="checkbox"/>
                     记住密码
                 </div>
                 <div>
                     <button onClick={clickSignIn}>登录</button>
                     <button>注册</button>
                 </div>
             </div>
         </div>
     )
 }
}
export default Login;