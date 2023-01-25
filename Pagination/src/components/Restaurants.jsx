import{ useEffect } from 'react'
import { useState } from 'react';
import Loading from './Loading';
import Pagination from './Pagination';

function Restaurants() 
{
    let[resdata,setResdata]=useState([]);
    let[loadingpage,setLoadingpage]=useState(true);
    let[page,setPage]=useState(1);
    let[totalpage,setTotalPage]=useState(0);
    const getdata=async()=>{
        let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`);
        let data=await res.json();
        console.log(data.totalPages);
        setTotalPage(data.totalPages);
        setLoadingpage(false);
        setResdata(data.data);

    }
    useEffect(()=>{
        getdata();
    },[page])

  return (
    loadingpage?(<Loading />):<>
   
    <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px"}}>
       
        {resdata.map((e)=>{
        return <div style={{display:"flex",padding:"20px",border:"2px solid black"}}>
            <div><img src={e.image} alt="image"style={{width:"200px",marginRight:"20px"}} /></div>
            <div><h5>Name:{e.name}</h5>
            <h5>Type:{e.type}</h5>
            <h5>Price:{e.price_starts_from}</h5>
            <h5>Rating:{e.rating}</h5>
            <h5>Votes:{e.number_of_votes}</h5></div>
      </div>
    })}</div>
    <Pagination totalpage={totalpage} currentpage={page} onchange={(page)=>setPage(page)} />
    </>
  )
}

export default Restaurants