import {Component} from "react";

// component
import RouterView from "../router";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import classNames from "classnames/bind";
import styles from "./layout.css";

// for IE 11 !!
import 'url-search-params-polyfill';
import 'babel-polyfill';

let scoped = classNames.bind(styles);

export default class App extends Component {

  state = {
    routerToPage:"routerToPage",
    pTocName:"",
    cTopName: "",
    cTocName: ""
  }

  // life-cycle
  // DOM已經掛載完成 ，在這個階段可以呼叫api來更新DOM ，適合做一些初始化的工作
  componentDidMount(){}

  // 當props or state更新 ，就會觸發組件更新DOM，所以千萬不要在這個階段setState，會造成無限循環
  componentDidUpdate(){}

  // DOM被移除 ，在這階段可以用來清除一些計時器
  componentWillUnmount(){}

  // props、state改變就會觸發，在初始化的時候也會觸發一次
  // getDerivedStateFromProps()

  // 讓你自己判斷是否要更新，如果回傳false這邊就不在往下執行render， 所以這邊可以做一些效能的優化
  // shouldComponentUpdate
  
  // 在更新DOM和Refs之前會觸發
  // getSnapshotBeforeUpdate

  // 跟try catch概念有點像，捕捉子組件的錯誤，不因為錯誤而影響到父組件。
  // componentDidCatch()

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

        <div className={scoped("layoutContainer")}>
          Layout
          <br/>
          <button onClick = {this.handleClick.bind(this,"Layout value")}>Layout傳component Demo1</button>
          <button onClick = {()=>this.handleClick("Layout value")}>Layout傳component Demo2</button>
          <Header
            cToc = { this.state.cTocName } 
          > 
            {/* slot */}
            <div>
              <img src = {process.env.PUBLIC_URL + '/logo.svg'} className = {scoped("App-logo")} alt = "logo" />
              <img src = {'../logo.svg'} className = {scoped("App-logo")} alt = "logo" />
              <p>
                Edit <code>src/layout.js</code> and save to reload.
              </p>
              <a
                className = {scoped("App-link")}
                target = "_blank"
                rel = "noopener noreferrer"
                href = "https://reactrouter.com/web/example/basic"
              >
                Learn React router
              </a>
              <hr/>
              <a
                className = {scoped("App-link")}
                target = "_blank"
                rel = "noopener noreferrer"
                href = "https://medium.com/@shizukuichi/100-%E8%A1%8C%E7%A7%92%E6%87%82-react-redux-middleware-52ac75d169fe"
              >
                Learn React redux
              </a>
              <h1 className = {scoped("title")}> scoped css test </h1>
            </div>
            <button> This is children props </button>
          </Header>

          <Nav/>

          {/* 使用props傳值到pages */}
          <RouterView routerToPage={this.state.routerToPage}/>

          <Footer
            pToc = { this.state.pTocName }
            handleCToP = {this.handleCToP}
            handleCToC = {this.handleCToC}
          ></Footer>

          {this.state.cTopName?`子傳父 Demo --> ${this.state.cTopName}` : ''}
        </div>

    );
  }
}