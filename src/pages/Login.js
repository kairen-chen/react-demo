import React,{Component} from "react";
import { connect } from "react-redux";
import * as actionCreators from '../redux/action'
class PrivateRoute extends Component {
    
    handle_login(){
        new Promise((resolve, reject) => {
            resolve(this.props.login());
        }).then( (res) => {
            // props更新後導頁
            if(this.props.userInfo)
            // console.log("角色介紹頁於(router/privateRoute/Auth/privateRoute.js)history挾帶了參數 -> ", this.props.location.state.referrer.pathname)
                this.props.history.push({
                pathname: window.previousLocation.pathname,
            });
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <button onClick={()=>{ this.handle_login() }}> Click </button>
            </div>
        ); 
    }
}


// 將store中的items值傳綁到props上
const mapStateToProps = store => (
    { userInfo: store.UserInfo }
);
  
export default connect(mapStateToProps, actionCreators)(PrivateRoute)