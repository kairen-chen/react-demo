import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/action/action";
import { withRouter } from "react-router";
class PrivateRoute extends Component {
  handle_login() {
    new Promise((resolve, reject) => {
      resolve(this.props.login());
    }).then((res) => {
      // props更新後導頁
      if (this.props.userInfo) {
        // console.log("角色介紹頁於(router/privateRoute/Auth/privateRoute.js)history挾帶了參數 -> ", this.props.location.state.referrer.pathname)
        console.log(`Login page get BaseURL : ${this.props.baseURL}`);
        if (window.previousLocation) {
          this.props.history.push({
            pathname: window.previousLocation.pathname,
            search: window.previousLocation.search,
          });
        } else {
          this.props.history.push({
            pathname: "/",
          });
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <button
          onClick={() => {
            this.handle_login();
          }}
        >
          {" "}
          Click{" "}
        </button>
      </div>
    );
  }
}

// 將store中的items值傳綁到props上
const mapStateToProps = (store) => ({ userInfo: store.common.UserInfo });

export default withRouter(
  connect(mapStateToProps, actionCreators)(PrivateRoute)
);
