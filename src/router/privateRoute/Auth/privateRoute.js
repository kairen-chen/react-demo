import React, {Component} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from '../../../pages/Login';

class PrivateRoute extends Component {
    componentDidMount() {
        window.previousLocation = this.props.location;
    }
    
    render(props) {
        let { component: Component, userInfo, ...routeConfig } = this.props;
        return (
           
                <Route
                    {...routeConfig}
                    render={() => 
                        userInfo ? 
                        // 已登入: render CharacterIntroduction component 
                        //1. this.props會拿到layout那傳過來的值 
                        //2. props會拿到history
                        <Component {...this.props} /> 
                        : 
                        <Login/>
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
