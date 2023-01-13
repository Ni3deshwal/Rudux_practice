import { useSelector } from "react-redux";
import { Link,} from "react-router-dom";

const ProductComponent=()=>{
    const Products=useSelector((state)=>{
        // console.log(state);
        return state.allProducts.products;
    })
    console.log(Products)
    return(
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)",gap:"10px",  }}>
            {Products.map((element)=>{
                return <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"20px"}}>
                    <Link to={`/product/${element.id}`}>
                    <img src={element.image} alt="" style={{width:'100px'}} />
                    <h5>{element.id}</h5>
                    <h5>{element.title}</h5>
                    <h5>{element.price}</h5>
                    <h5>{element.rating.rate}</h5>
                    </Link>
                    
                </div>
            })}
        </div>
      
    )
}
export default ProductComponent