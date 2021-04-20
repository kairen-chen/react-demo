import {Component} from "react";
import { connect } from 'react-redux'
import * as actionCreators from '../redux/action'

// component
import RouterView from "../router/";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";

import classNames from "classnames/bind";
import styles from "./layout.css";

// for IE 11 !!
import 'url-search-params-polyfill';
import 'babel-polyfill';

let scoped = classNames.bind(styles);

class layout extends Component {

  state = {
    routerToPage:"routerToPage",
    pTocName:"",
    cTopName: "",
    cTocName: ""
  }

  // life-cycle
  // DOM已經掛載完成 ，在這個階段可以呼叫api來更新DOM ，適合做一些初始化的工作
  componentDidMount(){
    /**
     * 使用stroe內的method改值
     * 注意: 因class component綁store的方式是透過props,
     *       又functio componet hook useEffect有觀察props,所以這裡action時
     *       改變了store.counter導致useEffect會被觸發,此時dispatch會跑兩次!!!!!
     * */ 
    this.props.increment();
  }
  componentWillMount() {}

  // 當props or state更新 ，就會觸發組件更新DOM，所以千萬不要在這個階段setState，會造成無限循環
  componentDidUpdate(){}

  // component即將銷毀,DOM被移除，在這階段可以用來清除一些計時器
  componentWillUnmount(){
    this.unlisten();
  }

  // props、state改變就會觸發，在初始化的時候也會觸發一次,使用情境:抄寫 prop 至 state
  // static getDerivedStateFromProps (props, state) {}

  // 讓你自己判斷是否要更新，如果回傳false這邊就不在往下執行render， 所以這邊可以做一些效能的優化
  // shouldComponentUpdate (nextProps, nextState) {}
  
  // 在更新DOM和Refs之前會觸發
  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  // 跟try catch概念有點像，捕捉子組件的錯誤，不因為錯誤而影響到父組件。
  // componentDidCatch(error, errorInfo) {}

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
          <Login/>

          <Nav/>
          {/* 使用props傳值到pages */}
          <RouterView routerToPage={this.state.routerToPage}/>

          <div className = {scoped("layout")}>
            <h1>Layout</h1>
            <br/>
            class component get store.counter value : { this.props.store_counter }
            <button onClick = {this.handleClick.bind(this,"Layout value demo1")}>Layout傳component Demo1</button>
            <button onClick = {()=>this.handleClick("Layout value demo2")}>Layout傳component Demo2</button>
            {this.state.cTopName?`子傳父 Demo --> ${this.state.cTopName}` : ''}
          </div>
   

          <div className={scoped("inline_container")}>
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
            
            <Footer
              pToc = { this.state.pTocName }
              handleCToP = {this.handleCToP}
              handleCToC = {this.handleCToC}
            ></Footer>
          </div>
        </div>

    );
  }
}
// 將store中的items值傳綁到props上
const mapStateToProps = store => (
  { 
    store_counter: store.counter
  }
)


export default connect(mapStateToProps, actionCreators)(layout)