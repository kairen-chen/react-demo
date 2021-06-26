import React, { useEffect, useState, useCallback } from "react";

import { useSelector, useDispatch  } from "react-redux";
import { increment, decrement, fetchUsers } from "../redux/action";
import { Prompt } from "react-router-dom";
import Loading from "../components/Loading"

import styled from "styled-components";

const Container = styled.div`
  border: 1px solid red;
  margin: 40px 0;
`;

function CharacterIntroduction(props) {
  const userData = useSelector(state => state),
        dispatch = useDispatch(),
        [_height, setHeight] = useState(0);
  let [isBlocking, setIsBlocking] = useState(false);

         
  /**
   * useEffect順序-> render後執行
   * useEffect --> mount 或 props update 或 指定變數改變時 觸發
   * return function --> 在 component unmount時 或 props update 或 指定變數改變時，React 會執行清除,這是 effect 的可選清除機制
   *                     ,除了unmount時,其餘兩種狀況下會優先觸發本return在觸發useEffect
   * 
   * Try it --> [userData.counter] 代表這參數一改變時觸發(mount、unmount)
   * */ 
  useEffect (() => {
    /**
     * 注意: 因class component綁store的方式是透過props,
     *       又functio componet hook useEffect有觀察props,所以layout.js action時
     *       改變了store.counter導致useEffect會被觸發,此時dispatch會跑兩次!!!!!
     * */
    if(userData.users.length === 0) 
      dispatch(fetchUsers())
        
    //Try it -->
    // alert(`Component inited or props change (step 2)! ${ props.pToc || '' } `)
    
    // unmount
    return  () => { 
      //Try it -->
      // alert("Component leaved or props change (step 1) ")
    }
  },[dispatch,userData.users]);

  useEffect(() => {
    setIsBlocking(prev => 
      { 
        console.log("set hook get prev state -->> ",prev)
        return true 
      }
    );
    return  () => { 
      setIsBlocking(false);
    }
  },[]);

  /*
   * refDemo
   * 取得dispatch後的,el height
   */
  const refDemo = useCallback(node => {
    if (node !== null && userData.users.length > 0) {
      // console.log("get div height : ", node.offsetHeight)
      setHeight(node.getBoundingClientRect().height);
    }
  }, [userData.users]);  
  return (
    <Container>
        <Prompt
          when={isBlocking}
          message={location => `即將離開此頁, 為確保資料安全, 記得登出!!` }
        />
        這訊息是從 Route props取得 -> {props.routerToPage}
        <br/>
        CharacterIntroduction :
        <br/> 
        count: {userData.counter} {userData.counter_1}
        <br/>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <div ref={refDemo}>
          <h2>The height of div is {Math.round(_height)}px</h2>
          <Loading 
            component = { 
                userData &&
                userData.users &&
                userData.users.map((user,index) => <p key = {index}>{user[user.name ? "name" : "title" ]}</p>)
            }
          />
        </div>
    </Container>
  );
}

export default CharacterIntroduction;
