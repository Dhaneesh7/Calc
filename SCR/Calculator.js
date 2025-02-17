import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreval } from "./actions";
import { useCalculator } from "./CalculatorContext";
import "./styles.css";  // Import normal CSS file

const Calculator = () => {
  const { curval, Input, clear } = useCalculator();
  const dispatch = useDispatch();
  const preval = useSelector((state) => state.preval);

  const calculateResult = () => {
    
      const result = eval(currentValue);
      dispatch(setPreval(result));
      clear();
    
  };

  return (
    <div className="calculator">
      <div className="display">{currentValue || "0"}</div>
      <div className="previous">Previous: {previousValue ?? "None"}</div>
      <div className="buttons">
        {["7", "8", "9", "/"].map((item) => (
          <button key={item} onClick={() => Input(item)}>{item}</button>
        ))}
        {["4", "5", "6", "*"].map((item) => (
          <button key={item} onClick={() => Input(item)}>{item}</button>
        ))}
        {["1", "2", "3", "-"].map((item) => (
          <button key={item} onClick={() => Input(item)}>{item}</button>
        ))}
        {["0", ".", "=", "+"].map((item) => (
          <button key={item} onClick={() => (item === "=" ? calculateResult() : Input(item))}>{item}</button>
        ))}
        <button className="clear-btn" onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;

