import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid red;
  margin: 40px 0;
`;
export default class Home extends Component {
  
  state = {
    PID: "s96113123",
  };

  handlePush() {
    alert(this.store.getState())
    this.props.history.push({
      pathname: `/about`,
      state: { message: " Home send massage " },
    });
  }

  handleSendUrlParameters() {
    this.props.history.push({
      pathname: `/about/${this.state.PID}`,
      search: "?searchMsg=this is searchMsg",
    });
  }

  render() {
  
    return (
      <Container>
        Home
        <div>
          <button onClick={this.handlePush.bind(this)}>RouterPush state</button>
        </div>
        <div>
          <button onClick={this.handleSendUrlParameters.bind(this)}>
            URL Parameters
          </button>
        </div>
      </Container>
    );
  }
}
