import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid red;
  margin: 40px 0;
  fontsize: 20px;
`;


export default function PageNotFound(props) {

  useEffect(()=>{
    window.previousLocation = props.location;
  })

  
  return (
    <Container>
      你要去哪裡 ??
    </Container>
  );
}

