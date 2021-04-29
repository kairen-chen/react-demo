import { useEffect } from "react";
import styled,{ThemeProvider } from "styled-components";
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
  `;

Container.defaultProps = {
  theme : {
    themeColor: "palevioletred"
  }
}


export default function PageNotFound(props) {
  // console.log(props)
  const [theme = {}, setTheme] = useState( Container.defaultProps.theme );
  const history = useHistory();
  useEffect(()=>{
    window.previousLocation = props.location;
 
    // 達到某條件換色
    // setTheme(()=>{ return {main : "cornflowerblue"} })

    // history.push({
    //   pathname:  "/",
    // });
  },[props.location,history])
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <label htmlFor="changeTheme"> 換膚 </label>
        <input
          type="checkbox"
          id="changeTheme"  
          onChange = {
            (e)=>{
              setTheme(()=>{
                return {themeColor : (!e.target.checked ? Container.defaultProps.theme.themeColor : "cornflowerblue")}
              })
            }
          } 
        />
        <br/>
        你確定有這條路 ?? 
        <p>✨ {window.location.href}</p>
        <p>順便展示更換主題色</p>
      </Container>
    </ThemeProvider>
  );
}

