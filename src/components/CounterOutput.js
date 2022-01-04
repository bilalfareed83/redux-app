import React from "react";
import { useSelector } from "react-redux";
const CounterOutput = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <h3>{counter}</h3>
    </>
  );
};

export default CounterOutput;
