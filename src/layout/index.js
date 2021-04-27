import {Component, Suspense} from "react";
import { connect } from 'react-redux'
import * as actionCreators from '../redux/action'
import { withRouter } from "react-router";

// component
import RouterView from "../router/";
import Nav from "../components/Nav";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
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

  // 當props or state更新 ，就會觸發組件更新DOM，所以千萬不要在這個階段setState，會造成無限循環
  componentDidUpdate(){
  }

  // component即將銷毀,DOM被移除，在這階段可以用來清除一些計時器
  componentWillUnmount(){
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

  render(props) {
    return (
      <div className={scoped("layoutContainer")}>
        <Login/>
        <Nav/>
        <Suspense fallback={ <div>Loading...</div> }>
            <RouterView 
              routerToPage={this.state.routerToPage} 
              location={this.props.location}
              // userInfo={this.props.userInfo}
              // flag={(window.previousLocation !== undefined && (window.previousLocation.pathname === this.props.location.pathname))}
            />
        </Suspense>
      </div>

    );
  }
}
// 將store中的items值傳綁到props上
const mapStateToProps = store => (
  { 
    userInfo: store.UserInfo,
    store_counter: store.counter
  }
)


export default withRouter(connect(mapStateToProps, actionCreators)(layout))