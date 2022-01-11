import React, { useEffect } from "react";
import Immutable from "immutable";
const { Map } = require("immutable");

const ImmutableJS = (props) => {
  // ------------Object-------------
  // 1. Map 大小
  const map1 = Map({ a: 1, b: 2 });
  console.log("取得 Map 長度", map1.size);
  // => 1

  // 2. 新增或取代 Map 元素
  // set(key: K, value: V)
  const map2 = map1.set("a", 7);
  // => Map { "a": 7 }

  // 3. 刪除元素
  // delete(key: K)
  const map3 = map1.delete("a");

  // 4. 清除 Map 內容
  const map4 = map1.clear();

  // 5. 更新 Map 元素

  const map5 = map1.update("a", () => 7);
  // => Map { "a": 7 }

  // 6. 合併 Map
  const map6 = map1.merge(Map({ b: 8, c: 3 }));
  // => Map { "a": 1, "b": 3 }

  // ------------List-------------
  // List：有序且可以重複值，對應於一般的 Array
  const List = Immutable.List;

  // 1. 取得 List 長度
  const arr1 = List([1, 2, 3]);
  console.log("取得 List 長度", arr1.size);
  // => 3

  // 2. 新增或取代 List 元素內容
  // set(index: number, value: T)
  // 將 index 位置的元素替換
  const arr2 = arr1.set(-2, 7);
  // => [1, 2, 7]

  // 直接跳過index 3新增index 4 : 0
  const arr3 = arr1.set(4, 0);
  // => [1, 2, 3, undefined, 0]

  // 3. 刪除 List 元素
  // delete(index: number)
  // 刪除 index 位置的元素
  const arr4 = arr1.delete(1);
  // => [1, 3]

  // 4. 插入元素到 List
  // insert(index: number, value: T)
  // 在 index 位置插入 value
  const arr5 = arr1.insert(1, 2);
  // => [1, 2, 2, 3]

  // 5. 清空 List
  // clear()
  const arr6 = arr1.clear();
  // => []

  // ------------Set-------------
  const Set = Immutable.Set;

  // 1. 建立 Set
  const set1 = Set([1, 2, 3]);
  // => Set { 1, 2, 3 }

  // 2. 新增元素
  const set2 = set1.add(1).add(5);
  // => Set { 1, 2, 3, 5 }
  // 由於 Set 為不能重複集合，故 1 只能出現一次

  // 3. 刪除元素
  const set3 = set1.delete(3);
  // => Set { 1, 2 }

  // 4. 取聯集
  const set4 = Set([2, 3, 4, 5, 6]);
  set1.union(set4);
  // => Set { 1, 2, 3, 4, 5, 6 }

  // 5. 取交集
  set1.intersect(set4);
  // => Set { 2, 3 }

  // 6. 取差集
  set1.subtract(set4);
  // => Set { 1 }

  // deep互不感染
  const obj = {
    count: "count",
    list: [1, 2, 3, 4, 5],
  };
  var _map1 = Immutable.fromJS(obj); //深轉
  // var _map2 = _map1.set("count", 12);
  const _map2 = _map1.setIn(["list", 0], 40);
  console.log("還是指向同一塊記憶體 : ", _map1.list === _map2.list); // true

  // 單獨取得陣列值
  console.log("array access way : ", _map2.getIn(["list", 0])); // 40
  console.log("object access way : ", _map2.get("count")); // 40

  for (let element of _map1) {
    if (typeof element[1] === "object") {
      console.log("陣列迭代 : ");
      element[1]._tail.array.forEach((item, index) => {
        console.log(item);
      });
      // 使用reduce作加總
      let t = element[1]._tail.array.reduce((prev, next) => {
        return prev + next;
      });
      console.log(t);
    }
  }

  // Support Lazy Operation
  Immutable.Range(1, Infinity)
    .map((n) => -n)
    .take(2)
    .reduce((r, n) => console.log(r + n));

  // 觀察foo是否改變
  var SomeRecord = Immutable.Record({ foo: null });
  var x = new SomeRecord({ foo: "app" });
  var y = x.set("foo", "azz");
  console.log(x === y); // false

  useEffect(() => {
    // console.log("about");
    // 透過setMsg些改msg的值
    // setMsg("change")
    window.previousLocation = props.location;
  }, [props.location]);

  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ textAlign: "center", color: "red", fontSize: "100px" }}>
        ImmutableJS (deep clone plugin)
      </div>
      <h1 style={{ textAlign: "center" }}>object改值互不干擾</h1>
      <h3>map1.size: {map1.size}</h3>
      <h3>map1 a: {map1.get("a")}</h3>
      <h3>取代 Map 元素 a: {map2.get("a")}</h3>
      <h3>delete : {map3.get("a")}</h3>
      <h3>clear : {map4.get("a")}</h3>
      <h3>update : {map5.get("a")}</h3>
      {/* <h3>merge : {map6}</h3> */}
      <hr />
      <h1 style={{ textAlign: "center" }}>array demo</h1>
      <h3>arr1.size: {arr1.size}</h3>
      <h3>index 位置的元素替換 {arr2}</h3>
      <h3>直接跳過index 3新增index 4 : 0 (console)=> {arr3}</h3>
      <h3>delete : {arr4}</h3>
      <h3>insert : {arr5}</h3>
      <h3>clear : {arr6}</h3>
      <hr />
      Structural Sharing 為了維持資料的不可變，又要避免像 deepCopy
      一樣複製所有的節點資料而造成的資源損耗，在 ImmutableJS 使用的是 Structural
      Sharing
      特性，亦即如果物件樹中一個節點發生變化的話，只會修改這個節點和和受它影響的父節點，其他節點則共享。
      <h3>{`${_map1.list === _map2.list}`}</h3>
    </div>
  );
};

export default ImmutableJS;
