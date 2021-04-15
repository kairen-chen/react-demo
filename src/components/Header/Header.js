import React,{Component} from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import * as actionCreators from '../../redux/action'
import { createBrowserHistory as createHistory } from "history";

const 
  Container = styled.div`
    border: 1px solid red;
    margin:40px 0;
  `
  ;


class Header extends Component {
  history = createHistory(this.props);
  redirect = () => {
    // console.log(this.history)
    // this.history.push({
    //   path: '/login',
    // });
  }

  render(props){
    // console.log("Header props: ", this.props);
    return(
      <Container>
        
        {/* 類似v-slot */}
        { this.props.children[0] }

        <br/>

        { this.props.children[1] }

        <h1> {this.props.cToc ? `子傳子 Demo --> ${this.props.cToc}` : ""} </h1>

        <button onClick={()=>{ 
          this.props.userInfo ? this.props.logout() 
          : 
          this.redirect()
        }}> 
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

export default connect(mapStateToProps, actionCreators)(Header);