import React,{Component} from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../redux/action'
import { withRouter } from "react-router";


class Login extends Component {
  render(props){
    // console.log("Header props: ", this.props);
    const { history } = this.props;
    return(
        <button onClick={()=>{ 
          this.props.userInfo ? 
          this.props.logout() 
          : 
          history.push(`/login`)
        }}
        > 
          {this.props.userInfo? "logout" : "login"} 
        </button>
    )
  }
}

const mapStateToProps = store => {
  return {
      userInfo: store.UserInfo
  };
};
export default withRouter(connect(mapStateToProps, actionCreators)(Login))