import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { ReducerType } from "./store/rootReducer";
import { Status, changeStatus } from "./store/Slices/status";

function App() {
  const dispatch = useDispatch();
  const status = useSelector<ReducerType, string>(
    (state) => state.status.status
  );

  const handleSleeping = () => {
    dispatch(changeStatus("sleeping"));
  };

  const handleReading = () => {
    dispatch(changeStatus("reading"));
  };

  const handleStudying = () => {
    dispatch(changeStatus("Studying"));
  };

  return (
    <div className="App">
      <input></input>
      <div>{`현재 상태는 ${status}입니다.`}</div>
      <button onClick={handleSleeping}>sleeping</button>
      <button onClick={handleReading}>reading</button>
      <button onClick={handleStudying}>studying</button>
    </div>
  );
}

export default App;
