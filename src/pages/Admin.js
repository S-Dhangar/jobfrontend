import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
const navigate=useNavigate();
useEffect(()=>{
  if(!localStorage.getItem('user')){
    navigate('/login');
  }
  
},[navigate])


const [data,setData] = useState({company:"",profile:"",type:"",description:"",link:""});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevObject) => ({ ...prevObject, [name]: value }));
  }; 



const onsubmit =()=>{
        const fetchdata= async()=>{
          try{
          
             await axios.post('https://jobbackend-f12u.vercel.app/insertdata',data);
              //const content = await response.json();
          }
          catch(error){
              console.log(error);
          }
        }
        fetchdata();
    }
    const sunglasses = '\uD83D\uDE0E';

    const smirk = '\uD83D\uDE0F';

  return (
    <div>
        <h3>I am Admin {smirk} {sunglasses} <button onClick={()=>{localStorage.setItem('user',''); navigate('/login')}}>Logout</button> </h3>

        <form>
          <br />  <input type="text" name='company' value={data.name} onChange={handleInputChange} placeholder='enter company name' />
         <br /> <br /> <br />  <input type="text" name='profile' value={data.profile} onChange={handleInputChange} placeholder='enter profile name' />
         <br /> <br /> <br />  <input type="text" name='type' value={data.type} onChange={handleInputChange} placeholder='enter type - job or intern' />

       <br />  <br /> <br />  <textarea style={{width:"100%"}} type="text" name='description' value={data.description} onChange={handleInputChange} placeholder='enter job descriptione' />
         <br /> <br />  <input type="text" name='link' value={data.link} onChange={handleInputChange} placeholder='put job application link here' />
<br />
<br />
<button onClick={onsubmit}>Submit data</button>
        </form>

    </div>
  )
}

export default Admin