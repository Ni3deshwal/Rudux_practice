import { useSelector } from "react-redux";


function Display()
{
    let data=useSelector((mystoredata)=>{
        return mystoredata
    })
    return(
        <div>
            <h1>Display Component</h1>
            <h5>{data}</h5>
        </div>
   
    )
}
export default Display;