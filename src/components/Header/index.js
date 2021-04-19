import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import * as actionCreators from '../../redux/action'
import { withRouter } from "react-router";

const 
  Container = styled.div`
    border: 1px solid red;
    margin:40px 10px;
  `
  ;


class Header extends Component {
  render(props){
    // console.log("Header props: ", this.props);
    const { history } = this.props;
    return(
      <Container>
        <h1>Header</h1>
        {/* 類似v-slot */}
        { this.props.children[0] }

        <br/>

        { this.props.children[1] }

        <h1> {this.props.cToc ? `子傳子 Demo --> ${this.props.cToc}` : ""} </h1>
        <button onClick={()=>{ 
          this.props.userInfo ? 
          this.props.logout() 
          : 
          history.push(`/login`)
        }}
        > 
          {this.props.userInfo? "logout" : "login"} 
        </button>
      </Container>
    )
  }
}

const mapStateToProps = store => {
  return {
      userInfo: store.UserInfo
  };
};
export default withRouter(connect(mapStateToProps, actionCreators)(Header))