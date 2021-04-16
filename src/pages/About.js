import React,
  {
    useState,
    useEffect
  }
from "react";

import { 
  useLocation,
  useParams,
  Prompt
} from "react-router-dom";

import { useSelector } from "react-redux";

import styled from 'styled-components';

const 
  Container = styled.div`
    border: 1px solid red;
    margin:40px 0;
  `
  ;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function About(props) {
  //從reducer取得state
  const userData = useSelector(state => state)

  let  {state} = useLocation(),
       {PID} = useParams(),
       query = useQuery();

  // console.log(
  //   "useLocation",useLocation(),
  //   "useParams",useParams(),
  //   "useQuery",useQuery()
  // )

  const [msg,setMsg] = useState(()=>{
    return state ? state.message : ""
  });


  /**
   * 呼叫 useEffect 時，你告訴 React 刷新 DOM 變動之後運行你的 「effect」。Effect 在 component 裡面被宣告所以他們有權限訪問他的 props 和 state 
   * 在少見的需要同步發生的情況下（例如測量 layout） -> useLayoutEffect 
   * 不需要同步發生 -> useEffect
   * 
   * 另characterIntroduction組件有介紹更多
   * */ 
  useEffect(()=>{
    // 透過setMsg些改msg的值
    // setMsg("change")
  },[])

  
  return (
    <Container>
        
        About
        {props.pToc}
        <br/>
        count: {userData.counter}

        {/* if、else */}
        {
          (()=>{
            if (PID) {
              return (<div>PID is exist</div>)
            } else {
              return (<div>PID is not exist</div>)
            }
          })()
        }

        {/* 三元運算式 */}
        {msg ? `Get value from router --> ${msg}` : ""}
        
        
        { PID ?
          <p>
            Get PID from url params --> {PID}
          </p>
          : ""
        } 


        {query.get("searchMsg") ? `Get Msg from url search --> ${query.get("searchMsg")}` : ""}

      </Container>
  );
}

export default About;