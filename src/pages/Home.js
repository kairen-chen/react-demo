import React, { Component } from "react";
import { withRouter } from "react-router";
import styled, {ThemeProvider} from "styled-components";
import { setName } from "../redux-saga/actions"
import { connect } from 'react-redux';

const Container = styled.div`
  border: 1px solid red;
  margin: 40px 0;
  color:${props => props.theme[props.theme.mainColor].textColor};
  border-color:${props => props.theme[props.theme.mainColor].borderColor};
  border-radius:${props => props.theme[props.theme.mainColor].borderRadius};
  border-width:${props => props.theme[props.theme.mainColor].borderWidth};
  background-color: ${props => props.theme[props.theme.mainColor].backgroundColor};
`;

class Home extends Component {
  
  state = {
    PID: "s96113123",
  };

  componentDidMount() {
    const {match, setName, location} = this.props;
    console.log("class component get URL information :" , match)
    window.previousLocation = location;
    // saga Demo
    setName({name: "jaredpalmer"}, null);
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
      <ThemeProvider theme = { this.props.theme }>
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
          
          <div style={{"fontSize" : "10px", "textAlign" : "left"}}>
            <h1>saga demo</h1>
            <pre>
              {JSON.stringify(this.props.profile, (key,value) => {
                  return value
              }, 4)}
            </pre>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = {
    setName 
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))