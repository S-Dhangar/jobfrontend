import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
const Description = (props) => {
  const [sentences,setSentences] =useState([]);
const style={
  cursor:"pointer",
  marginLeft:"10%",
   marginTop:"30px",
   marginBottom:"20px",
   boxShadow: '0 0 10px rgba(0.5, 0.5, 0.5, 0.5)',
   width:"80%",
   alignItems:"center",
borderRadius:"20px",
padding:"20px"  
}
useEffect(() => {
  setSentences(props.desc.description.split('\n'));
}, [props.desc.description]);


  return (
    <div>
<div style={style}>

<h3 style={{color:"white"}}>  {props.desc.company + ' - ' + props.desc.profile}
 </h3>

    {   
    sentences.map((e,index)=>{
     
        return <p style={{color:"white"}} key={index}>{e}</p>
    })

     }
    <Link to ={props.desc.link}>Click here to apply</Link>
    </div>
    </div>
  )
}

export default Description