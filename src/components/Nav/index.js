import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border: 1px solid red;
  ul {
    display: flex;
    justify-content: space-around;
    background: linear-gradient(to right, red, yellow) no-repeat fixed;
    li {
      list-style: none;
      flex:1;
      a {
        color: white;
        :hover {
          color: #61dafb;
        }
      }
    }
  }
`;
export default class Nav extends Component {
  state = {
    isBoxVisible: false
  }
  componentDidMount(){}
  
  dropDownMenu_onHover = () => {
    this.setState({isBoxVisible:true})
  }

  dropDownMenu_onLeave = () => {
    this.setState({isBoxVisible:false})
  }

  dropDownMenu_onClick = () => {
    this.setState({isBoxVisible:false})
  }
  
  render(props) {
    return (
      <Container>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/characterIntroduction">Character introduction</Link>
          </li>
          <li 
            onMouseEnter={ this.dropDownMenu_onHover } 
            onMouseLeave={ this.dropDownMenu_onLeave } 
            className={ `dropDownMenu ${this.state.isBoxVisible ? "active" : ""}` } 
          > Router
            <div onClick={ this.dropDownMenu_onClick }>
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
              </ul>
            </div>
          </li>
        </ul>
      </Container>
    );
  }
}
