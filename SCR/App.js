
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { CalculatorProvider } from "./CalculatorContext";
import Calculator from "./Calculator";

const App = () => {
  return (
    <Provider store={store}>
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </Provider>
  );
};

export default App;
