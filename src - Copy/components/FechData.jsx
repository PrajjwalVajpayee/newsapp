import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const FechData = ({cat}) => {
   const [Data,SetData] =useState("");
    const fetchData = async()=>{
   await axios.get(
      cat ?
      `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=46e43586ba9a4a188214cd329f7516c2`
    :"https://newsapi.org/v2/top-headlines?country=in&apiKey=46e43586ba9a4a188214cd329f7516c2"
    )
    .then((res) => SetData(res.data.articles))
    };
    useEffect(() =>{
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cat]);
  return (
    <div className='container my-4 '>
     <h1 style={{textAlign:"center"}}> TOP HEADLINES</h1>
     <div className=' conatiner d-flex justify-content-center align-items-center flex-column my-3' style={{minHeight:"100vh"}}>
        {Data ? Data.map((items,index)=>
        <>
        <div className='container my-3 p-3' style={{width:"100%",boxShadow:"5px 5px 50px silver",borderRadius:"10px"}}>
            <h2 className='my-4'>{items.title}</h2>
            
            <p>{items.description}</p>
            <img src={items.urlToImage} alt="/" className='img-fluid' style={{width:"auto", height:"300px", objectFit:"cover", borderRadius:"10px"}} / >
           <p>{items.content}</p>
           <Link to={items.url} target="_blank">Read More</Link>
            <p style={{fontSize:"18px",fontWeight:"600" }}> By {items.author}</p>
        </div>
        </>
     
     ):"Loading..."}</div>
    </div>
  )
}

export default FechData
