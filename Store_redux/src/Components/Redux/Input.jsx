import { useState } from "react";
import { useDispatch } from "react-redux";
import actiondata from "./action";


function Input()
{
    let[inputdata,setInputdata]=useState("");
    let nitin=useDispatch();

    let handledata=()=>
    {
        
        actiondata(inputdata,nitin);
    }
    return(
        <div style={{padding:"100px"}}>
        <h1>Input Component</h1>
        <input type="text" name="" id="" onChange={(e)=>{setInputdata(e.target.value)}}/>
        <button onClick={handledata}>Submit</button>
    </div>
    )
}
export default Input;
