import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../../../pages/Login";

class PrivateRoute extends Component {
  componentDidMount() {
    window.previousLocation = this.props.location;
  }

  render(props) {
    //   剩下都放在...routeConfig
    let { component: Component, ...rest } = this.props;
    return (
      <Route
        render={() =>
          this.props.userInfo ? (
            // 已登入: render CharacterIntroduction component
            //1. this.props會拿到layout那傳過來的值
            //2. props會拿到history
            <Component {...rest} />
          ) : (
            <Login />
          )
        }
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    userInfo: store.common.UserInfo,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
