import { combineReducers } from "redux";
import { ProductReducer,SelectedReducer } from "./productReducer";

const reducers=combineReducers({
    allProducts:ProductReducer,
    Product:SelectedReducer
})
export  {reducers};