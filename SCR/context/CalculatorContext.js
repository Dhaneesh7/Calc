
import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [curval, setCurval] = useState("");

  const Input = (value) => {
    setCurval((prev) => prev + value);
  };

  const clear = () => setCurval("");

  return (
    <CalculatorContext.Provider value={{ curval,Input, clear }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);
