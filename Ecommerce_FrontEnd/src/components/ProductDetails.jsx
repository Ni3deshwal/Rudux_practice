import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { RemoveProduct, SelectedProduct } from "../redux/actions/productActions";


const ProductDetails=()=>{
    let {id}=useParams();
    let dispatch=useDispatch()
    let element=useSelector((state)=>{
        
        return state.Product;
    })
    
    const selecteddata=async()=>{
        let response=await fetch(`https://fakestoreapi.com/products/${id}`)
        let data=await response.json();
            console.log(data);
            dispatch(SelectedProduct(data));
        }
    useEffect(()=>{
        selecteddata();
        return ()=>{
            dispatch(RemoveProduct());
        }
    },[id])    
    

    return(
        <>
            <img src={element.image} alt="" style={{width:"200px"}}/>
            <h5>{element.id}</h5>
            <h5>{element.title}</h5>
            <h5>{element.price}</h5>
                    {/* <h5>{element.rating.rate}</h5> */}
        </>
    )
 
    
}
export default ProductDetails