import React,{Component} from "react";
import { connect } from "react-redux";
import * as actionCreators from '../redux/action'

class PrivateRoute extends Component {
    // props更新後導頁
    componentDidUpdate(){
        if(this.props.userInfo)
            this.props.history.push({
                pathname: this.props.location.state.referrer.pathname,
            });
    }
    redirect = () => {
        this.props.login();
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <button onClick={()=>{ this.redirect() }}> Click </button>
            </div>
        );
    }
}


// 將store中的items值傳綁到props上
const mapStateToProps = store => (
    { userInfo: store.UserInfo }
);
  
export default connect(mapStateToProps, actionCreators)(PrivateRoute)