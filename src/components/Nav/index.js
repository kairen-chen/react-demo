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
          <li className="dropDownMenu"> Router
            <div>
              <ul>
                <li>
                  <Link to="/RecursivePath">Recursive path</Link>
                </li>
                <li>
                  <Link to="/Sidebar">Sidebar</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </Container>
    );
  }
}
