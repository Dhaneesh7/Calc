
import preValfn from "./actions";

const initialState = { preval: null };

 const CalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case preValfn:
      return { ...state, preval: action.payload };
    default:
      return state;
  }
};

export default CalculatorReducer;
