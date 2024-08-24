import { combineReducers } from "redux";
import amountreducer from "./amountreducer";

const reducers = combineReducers({
    amount: amountreducer
})

export default reducers;