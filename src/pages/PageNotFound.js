import { useEffect } from "react";
import styled, {ThemeProvider, css} from "styled-components";
import React,
  {
    useState
  }
from "react";
import { useHistory } from "react-router";



const 
  Container = styled.div`
    border: 1px solid red;
    margin: 40px 0;
    fontsize: 20px;
    p {
      color:${props => props.theme.themeColor};
    }

    // 淺色主題
    ${ props => props.main && css`
      border-width: 2px 3px 2px 5px;
      border-radius: 90% 6% 93% 5% / 5% 94% 7% 95%;
      transform: rotate(2deg);
      color: black;
      background-color: white;
    `}
  `;

Container.defaultProps = {
  main: "",
  theme : {
    themeColor: "palevioletred"
  }
}


export default function PageNotFound( props ) {
  // console.log(props)
  const [theme = {}, setTheme] = useState( Container.defaultProps.theme ),
        [main, setMain] =  useState( Container.defaultProps.main ),
        history = useHistory();
  useEffect( ()=>{
    window.previousLocation = props.location;

    // history.push({
    //   pathname:  "/",
    // });
  },[ props.location, history ] )
  
  return (
    <ThemeProvider theme = { theme }>
      <Container main = { main }>
        Sorry,查無此路 ->
        <p>✨ {window.location.href} ✨</p>
        <br/>
        <label htmlFor = "changeTheme"> "都來這了,點我試試" </label>
        <input
          type = "checkbox"
          id = "changeTheme"
          hidden
          onChange = {
            ( e )=>{
              setTheme( ()=>{
                setMain( () => e.target.checked ? "light" : "")
                return { themeColor : (!e.target.checked ? Container.defaultProps.theme.themeColor : "cornflowerblue") }
              } )
            }
          } 
        />
      </Container>
    </ThemeProvider>
  );
}

