import React from 'react'

function Pagination({totalpage,currentpage,onchange}) {

    var arr=new Array(totalpage).fill("").map((_,i)=>i+1)
  return (
    <div style={{textAlign:"center"}}>
        {arr.map((e)=>{
            return <button style={{border:e==currentpage?"2px solid blue":"2px solid red"}} disabled={e==currentpage?true:false} onClick={()=>onchange(e)}>{e}</button>
        })}
    </div>
    
  )
}

export default Pagination