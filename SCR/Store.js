
import { createStore } from "redux";
import { CalculatorReducer } from "./reducer";

export const store = createStore(CalculatorReducer);
