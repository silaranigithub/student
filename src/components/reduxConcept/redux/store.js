import { createStore } from "redux";
import { counterReduce } from "./reducers";

export const counterstore=createStore(counterReduce)

