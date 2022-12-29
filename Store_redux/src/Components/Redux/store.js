import { legacy_createStore as createStore } from "redux";
// import logger from "redux-logger";
import reducer from "./reducer"
export const mystore=createStore(reducer);

