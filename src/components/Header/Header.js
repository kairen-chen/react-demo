import React,{Component} from 'react';
import styled from 'styled-components';

const 
  Container = styled.div`
    border: 1px solid red;
    margin:40px 0;
  `
  ;


export default class Header extends Component {
  render(props){
    // console.log("Header props: ", this.props);
    return(
      <Container>
        
        {/* 類似v-slot */}
        { this.props.children[0] }

        <br/>

        { this.props.children[1] }

        <h1> {this.props.cToc ? `子傳子 Demo --> ${this.props.cToc}` : ""} </h1>
      
      </Container>
    )
  }
}