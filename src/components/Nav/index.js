import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";
import styled from "styled-components";
import { withRouter } from "react-router";

const Container = styled.div`
  width: 100%;
  border: 1px solid red;
  ul {
    display: flex;
    justify-content: space-around;
    background: linear-gradient(to right, red, yellow) no-repeat fixed;
    li {
      list-style: none;
      flex: 1;
      a {
        color: white;
        :hover {
          color: #61dafb;
        }
      }
    }
  }
`;
class Nav extends Component {
  state = {
    isBoxVisible: false,
  };
  componentDidMount() {}

  dropDownMenu_onHover = () => {
    this.setState({ isBoxVisible: true });
  };

  dropDownMenu_onLeave = () => {
    this.setState({ isBoxVisible: false });
  };

  dropDownMenu_onClick = () => {
    this.setState({ isBoxVisible: false });
  };

  handleRedirect = (go) => {
    if (this.props.location.pathname !== go)
      this.props.history.push({
        pathname: go,
      });
  };

  render(props) {
    return (
      <Container>
        <ul>
          <li onClick={() => this.handleRedirect("/")}>Home</li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <Link to="/characterIntroduction">Character introduction</Link>
          </li>
          <li
            onMouseEnter={this.dropDownMenu_onHover}
            onMouseLeave={this.dropDownMenu_onLeave}
            className={`dropDownMenu ${
              this.state.isBoxVisible ? "active" : ""
            }`}
          >
            {" "}
            Router
            <div onClick={this.dropDownMenu_onClick}>
              <ul>
                <li>
                  <Link to="/RecursivePath/0">Recursive path</Link>
                </li>
                <li>
                  <Link to="/Sidebar">Sidebar</Link>
                </li>
                {/* <li>
                  <Link to="/AnimatedTransitions">Animated Transitions</Link>
                </li> */}
                <li>
                  <Link to="/ModalGallery">Modal Gallery</Link>
                </li>
                <li>
                  <Link to="/AnimatedTransitions">AnimatedTransitions</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/immutableJS">immutableJS</NavLink>
          </li>
        </ul>
      </Container>
    );
  }
}
export default withRouter(Nav);
