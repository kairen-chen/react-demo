import React,{Component} from "react";
import logo from "./logo.svg";

// component
import PageView from "./router";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import classNames from "classnames/bind";
import styles from "./App.css";
let scoped = classNames.bind(styles);

export default class App extends Component {

  state = {
    pTocName:"",
    cTopName: "",
    cTocName: ""
  }

  componentDidMount(){}

  handleClick = (parameter)=> {
    this.setState({
      pTocName:parameter
    })
  }

  handleCToP = (parameter)=> {
    this.setState({
      cTopName:parameter
    })
  }

  handleCToC = (parameter)=> {
    this.setState({
      cTocName:parameter
    })
  }

  render() {
    return (

        <div className={scoped("App")}>
          APP(父)
          <br/>
          
          <button onClick = {this.handleClick.bind(this,"我是App(父)")}>父傳子Demo</button>
          
          <Header
            cToc = { this.state.cTocName } 
          > 
            {/* slot */}
            <div>
              <img src = {logo} className = {scoped("App-logo")} alt = "logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className = {scoped("App-link")}
                target = "_blank"
                rel = "noopener noreferrer"
                href = "https://reactrouter.com/web/example/basic"
              >
                Learn React
              </a>
              <h1 className = {scoped("title")}> scoped css test </h1>
            </div>
            <button> This is children props </button>
          </Header>

          <Nav/>

          {/* 使用props傳值到pages */}
          <PageView pToc={this.state.pTocName}/>

          <Footer
            pToc = { this.state.pTocName }
            handleCToP = {this.handleCToP}
            handleCToC = {this.handleCToC}
          />

          {this.state.cTopName?`子傳父 Demo --> ${this.state.cTopName}` : ''}
        </div>

    );
  }
}