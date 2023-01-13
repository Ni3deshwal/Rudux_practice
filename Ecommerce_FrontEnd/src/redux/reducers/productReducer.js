import { Actiontypes } from "../contants/actiontype";

const initialState={ 
    products:[] 
};
export const ProductReducer=(state=initialState,{type,payload})=>
{
    switch (type) {
        case Actiontypes.SET_PRODUCTS :
            // console.log(payload)
            return {...state,products:payload};    
        default: return state;
    }
}
export const SelectedReducer=(state={},{type,payload})=>
{
    switch (type) {
        case Actiontypes.SELECTED_PRODUCT:
            // console.log(payload)
            return {...state,...payload};
        case Actiontypes.REMOVE_SELECTED_PRODUCT:
            return {};    
        default: return state;
    }
}