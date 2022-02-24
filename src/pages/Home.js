import React, { Component } from "react";
import { withRouter } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { increment } from "../redux/action/action.js";
import { bindActionCreators } from "redux";

// 這兩個是一組的不寫沒辦法dispatch
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    Add: bindActionCreators(increment, dispatch),
  };
};

const Container = styled.div`
  border: 1px solid red;
  margin: 40px 0;
  color: ${(props) => props.theme[props.theme.mainColor].textColor};
  border-color: ${(props) => props.theme[props.theme.mainColor].borderColor};
  border-radius: ${(props) => props.theme[props.theme.mainColor].borderRadius};
  border-width: ${(props) => props.theme[props.theme.mainColor].borderWidth};
`;

class Home extends Component {
  state = {
    PID: "s96113123",
  };

  componentDidMount() {
    console.log("class component get URL information :", this.props.match);
    window.previousLocation = this.props.location;
    this.props.Add();
  }

  handlePush() {
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
      <ThemeProvider theme={this.props.theme}>
        <Container>
          Home
          <br />
          class component dispatch Demo !!
          <div>
            <button onClick={this.handlePush.bind(this)}>
              RouterPush state
            </button>
          </div>
          <div>
            <button onClick={this.handleSendUrlParameters.bind(this)}>
              URL Parameters
            </button>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
