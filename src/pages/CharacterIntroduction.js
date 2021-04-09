import React, { useEffect, useState, useCallback } from "react";

import { useSelector, useDispatch  } from "react-redux";
import { increment, decrement, fetchUsers } from "../redux/action";

import styled from "styled-components";

const Container = styled.div`
  border: 1px solid red;
  margin: 40px 0;
`;

function CharacterIntroduction(props) {

  const userData = useSelector(state => state),
        dispatch = useDispatch(),
        [_height, setHeight] = useState(0);

  
  /**
   * 順序-> render後執行
   * 
   * useEffect --> mount 或 props update 或 指定變數改變時 觸發
   * return function --> 在 component unmount時 或 props update 或 指定變數改變時，React 會執行清除,這是 effect 的可選清除機制
   *                     ,除了unmount時,其餘兩種狀況下會優先觸發本return在觸發useEffect
   * 
   * Try it --> [userData.counter] 代表這參數一改變時觸發(mount、unmount)
   * */ 
  useEffect(() => {

    dispatch(fetchUsers());

    //Try it -->
    // alert(`Component inited or props change (step 2)! ${ props.pToc || '' } `)
    
    // unmount
    return  () => { 

      //Try it -->
      // alert("Component leaved or props change (step 1) ")

    }
  }, [dispatch]);

  /*
   * refDemo
   * 取得dispatch後的,el height
   */
  const refDemo = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      //Try it -->
      // alert(`height change : ${node.getBoundingClientRect().height} px`)
    }
  }, [userData.users]);

  return (
    <Container>
      這訊息是從 Route props取得 -> {props.routerToPage}
      <br/> 
      CharacterIntroduction :
      <br/> 
      count: {userData.counter}
      <br/>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <div ref={refDemo}>
        <h2>The height of div is {Math.round(_height)}px</h2>
        {
          userData &&
          userData.users &&
          userData.users.map((user,index) => <p key = {index}>{user.name}</p>)
        }
      </div>
    </Container>
  );
}

export default CharacterIntroduction;
