import { useEffect } from "react";
import styled, {ThemeProvider} from "styled-components";
import React,
  {
    useState
  }
from "react";
import { useHistory } from "react-router";


const Container = styled.div`
    border:1px solid red;
    margin: 40px 0;
    font-size: 20px;
    border-radius:${props => props.theme[props.theme.mainColor].borderRadius};
    border-width:${props => props.theme[props.theme.mainColor].borderWidth};
    background-color: ${props => props.theme[props.theme.mainColor].backgroundColor};
    color:${props => props.theme[props.theme.mainColor].textColor};

    p {
      color:${props => props.theme[props.theme.mainColor].textColor};
    }
  `;



export default function PageNotFound( props ) {
  const history = useHistory();
  useEffect( ()=>{
    window.previousLocation = props.location;

    // history.push({
    //   pathname:  "/",
    // });
  },[ props.location, history ] )
  
  return (
    <ThemeProvider theme = { props.theme }>
      <Container>
        Sorry,查無此路 ->
        <p>✨ {window.location.href} ✨</p>
        <br/>
        <label htmlFor = "changeTheme"> "都來這了,點我試試" </label>
      </Container>
      <Test component={Container} />
    </ThemeProvider>
  );
}



function Test( props ) {
  useEffect( ()=>{
    console.log(props.component._foldedDefaultProps);
  } );
  return ( 
    <props.component> 
      可以把styled-component整組傳給component
    </props.component> 
  );
}