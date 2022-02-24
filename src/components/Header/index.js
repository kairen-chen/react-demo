import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/action";

const Container = styled.div`
  border: 1px solid red;
  margin: 40px 10px;
`;
class Header extends Component {
  render() {
    // console.log("Header props: ", this.props);
    return (
      <Container>
        <h1>Header</h1>
        {/* 類似v-slot */}
        {this.props.children[0]}

        <br />

        {this.props.children[1]}

        <h1> {this.props.cToc ? `子傳子 Demo --> ${this.props.cToc}` : ""} </h1>
      </Container>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    userInfo: store.UserInfo,
  };
};
export default connect(mapStateToProps, actionCreators)(Header);
