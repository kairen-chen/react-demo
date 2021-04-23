import React, {Component} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from '../../../pages/Login';

class PrivateRoute extends Component {
    componentDidMount() {
        window.previousLocation = this.props.location;
    }
    
    render(props) {
        let { component: Component, userInfo, ...rest } = this.props;
        return (
           
                <Route
                    {...rest}
                    render={props => 
                        userInfo ? 
                        // 已登入: render CharacterIntroduction component 
                        <Component {...props} /> 
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
