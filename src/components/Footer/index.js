import React,{Component} from 'react';
/**
 * css scoped 方法1.
 * 
 * npm run eject //打開webpack.config.js設定檔
 * 找到wp.config.js內大概line:470
 * use: getStyleLoaders({
 *              加入modules
                modules: {
                  localIdentName: "[path][name]__[local]--[hash:base64:5]",
                },

                importLoaders: 1,
                sourceMap: isEnvProduction
                  ? shouldUseSourceMap
                  : isEnvDevelopment,
              }),
    npm install classnames --save
    再加入以下:
    import classNames from "classnames/bind";
    import styles from "./Home.css";
    let cx = classNames.bind(styles);
    <h1 className = {cx("title")}>我是Header</h1>
 */

/**
 * css scoped 方法2.
 * 
 * npm install --save styled-components
 * 在加入以下:
 * import styled from 'styled-components';
    const Title = styled.h1`
      color: green;
      background-color:black;
    `
    <Title>我是styled Header</Title>
 */
import styled, { css } from 'styled-components';
const Container = styled.div`
  border: 1px solid red;
  margin: 20px 10px;
  overflow: hidden;
`

const Title = styled.h1`
  color: green;
  background-color:black;
  ${ props => props.yellow && css`
      color:yellow;
  `}
`
const InputText = styled.input`
  width: 300px;
  height: 50px;
`


export default class Footer extends Component {
  // 傳統react state寫法 方法1.
  // constructor(props){
  //   super(props) 
  //   this.state = {
  //     name: "Kairen"
  //   }
  //   //需要.bind的原因:es6 class寫法會讓this指向el本身,非react實體
    // this.handleInputText = this.handleInputText.bind(this)

    /**
     * 如果是要call父層方法的事件,會在父層import conponent時呼叫一次,
     * 事件觸發時再呼叫一次
     */
    // this.props.chandleClick(`${this.state.cTopValue} ${this.state.name}`);

    
    /**
     * 雙箭頭使用
     * 時機1:當觸發事件要使用到e和傳入參數時
     * https://github.com/gothinkster/react-redux-realworld-example-app/blob/master/src/components/Editor.js
     */
    // const up = key => e => console.log(key, e.target.value);
    // this.handleInputText = up("test")

    // 這寫法是因為只想取得傳入的參數不拿e
    // this.handleInputText = (tag) => () => {
    //   console.log(tag)
    // }
  // }
  
  // babel會幫忙轉譯寫法 方法2.
  state = {
    name: "Kairen",
    cTopValue: "footer value",
    /* 迴圈Demo */
    UserDate: [
      {
        name: "Skoda",
        age: "82.9",
      },
      {
        name: "Toyota",
        age: "77.8",
      }
    ]
  }

  // 雙向綁定Demo
  handleInputText = i_am_parameter => e => {
    const {name, value} = e.target;
    // react的值要用setState設定
    this.setState({[name]: value});
  };

  // 子傳父Demo
  handleCToP(){
    this.props.handleCToP(`${this.state.cTopValue}`);
  };


  // 子傳子Demo
  handleCToC(){
    this.props.handleCToC(`${this.state.cTopValue}`);
  };

  render(){
    // console.log("Footer props: ", this.props);

    return(
      <Container>
        <h1>Footer</h1>
        {/* props Demo */}
        <h1> {this.props.pToc ? `component get value of Layout --> ${this.props.pToc}` : ""} </h1>


        {/* scoped css Demo */}
        <Title>我是styled title1</Title>
        <Title yellow>我是styled title2</Title>
        <Title>我是styled title3</Title>


        {/* 雙向綁定Demo */}
        <InputText 
          name = "name" 
          value = { this.state.name }  
          onChange = { this.handleInputText("test") }
        />
        <Title>我是 { this.state.name } </Title>


        {/* 迴圈Demo */}
        <ul>
          {
            this.state.UserDate.map((obj,index) => {
              return(
                <li key = { index }>
                    廠牌: { obj.name } 售價: { obj.age } w
                </li>
              )
            })
          }
        </ul>
        
        <br/>
        
        {/* props Demo */}
        <button onClick = {this.handleCToP.bind(this)}>子傳父Demo1</button>
        <button onClick={()=>{this.props.handleCToP("子傳父")}} >子傳父Demo2</button>
        <button onClick = {this.handleCToC.bind(this)}>子傳子Demo</button>
        
        

      </Container>
    ); 
  }

}