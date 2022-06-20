import React, { useState, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/action/action";

import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  border: 1px solid red;
  margin: 40px 0;
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const About = (props) => {
  const { t } = useTranslation();

  //從reducer取得state
  const userData = useSelector((state) => state.common),
    dispatch = useDispatch();

  let { state } = useLocation(), // get data of the router push
    { PID } = useParams(), // get /xx/:me of the url params
    query = useQuery(); // get /xx?me=123 of the url query

  // console.log(
  // "useLocation",useLocation(),
  // "useParams",useParams(),
  // "useQuery",useQuery()
  // )

  // [msg,setMsg]
  const [msg] = useState(() => {
    return state ? state.message : "";
  });

  /**
   * 呼叫 useEffect 時，你告訴 React 刷新 DOM 變動之後運行你的 「effect」。Effect 在 component 裡面被宣告所以他們有權限訪問他的 props 和 state
   * 在少見的需要同步發生的情況下（例如測量 layout） -> useLayoutEffect
   * 不需要同步發生 -> useEffect
   *
   * 另characterIntroduction組件有介紹更多
   * */
  useEffect(() => {
    // console.log("about");
    // 透過setMsg修改msg的值
    // setMsg("change")
    window.previousLocation = props.location;
  }, [props.location]);

  return (
    <Container>
      <div>{t("Welcome to React")}</div>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <br />
      這訊息是從 Route props取得 -> {props.routerToPage}
      <br />
      About
      <br />
      count: {userData.counter}
      {/* if、else */}
      {(() => {
        if (PID) {
          return <div>PID is exist</div>;
        } else {
          return <div>PID is not exist</div>;
        }
      })()}
      {/* 三元運算式 */}
      {msg ? `Get value from router push--> ${msg}` : ""}
      {PID ? <p>Get PID from url params --> {PID}</p> : ""}
      {query.get("searchMsg")
        ? `Get Msg from url search --> ${query.get("searchMsg")}`
        : ""}
      <br />
      default Props -> {props.name}
      <br />
      <img
        src="https://github.com/kdchang/reactjs101/raw/master/Ch04/images/react-lifecycle.png"
        alt="test"
        style={{ width: "800px", height: "auto", margin: "20px" }}
      />
    </Container>
  );
};

// PropTypes 驗證，若傳入的 props type 不符合將會顯示錯誤
About.propTypes = {
  name: PropTypes.string,
};

// Prop 預設值，若對應 props 沒傳入值將會使用 default 值
About.defaultProps = {
  name: "About defaultProps",
};

export default About;
