import { useEffect } from "react"
import { useDispatch } from "react-redux"
import ProductComponent from "./ProductComponent"
import { SetProducts } from "../redux/actions/productActions"

const ProductListing=()=>{
    const dispatch=useDispatch();
    const getdata=async()=>{
        let response=await fetch(`https://fakestoreapi.com/products`)
        let data=await response.json();
        dispatch(SetProducts(data));
        // console.log(data);

    }
    useEffect(()=>{
        getdata();
    },[])
 
    return(
        <div>
            <ProductComponent />
        </div>
    )
}
export default ProductListing;