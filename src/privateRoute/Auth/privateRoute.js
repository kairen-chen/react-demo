import React,{Component} from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";


class PrivateRoute extends Component {
    render() {
        let { component: Component, userInfo, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props => 
                    userInfo ? 
                    // 已登入: render CharacterIntroduction component 
                    <Component {...props} /> 
                     : 
                    // 未登入: 跳至page/login.js
                    <Redirect to={{
                        pathname: "/login",
                        state: { referrer: props.location }
                    }} />
                }
            />
        );
    }
}

const mapStateToProps = store => {
    return {
        userInfo: store.UserInfo
    };
};

export default connect(mapStateToProps)(PrivateRoute);
