import { Actiontypes } from "../contants/actiontype"
export const SetProducts=(products)=>
{
    return {
        
        type:Actiontypes.SET_PRODUCTS,
        payload:products,
    }
    console.log(products);
}

export const SelectedProduct=(product)=>
{
    return {
        type:Actiontypes.SELECTED_PRODUCT,
        payload:product,
    }
}
export const RemoveProduct=()=>
{
    return {
        type:Actiontypes.REMOVE_SELECTED_PRODUCT,
   
    }
}