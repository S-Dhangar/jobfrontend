import { useEffect, useState } from "react";
import axios from 'axios'
import { useLocation } from 'react-router-dom';

import Description from "./Description";

const Hirings = () => {
    const [check,setCheck] = useState(false);
    const [desc,setDesc] = useState(null);
    var [data,setData] = useState([]);
    const location = useLocation();

    const titleStyle={
      cursor:"pointer",
       textAlign:"center",
       marginLeft:"23%",
        marginTop:"30px",
        marginBottom:"20px",
        boxShadow: '0 0 10px rgba(0.5, 0.5, 0.5, 0.5)',
        width:"50%",
        alignItems:"center",
backgroundColor:"white",
borderRadius:"10px",
padding:"10px"
    }
    
    useEffect(() => {
      if (location.pathname === ('/internships')) {
        setCheck(false);
      }
    }, [location]);
    useEffect(() => {
      if (location.pathname === ('/hirings')) {
        setCheck(false);
      }
    }, [location]);
useEffect(()=>{
    const fetchdata= async()=>{
        try{
          const response = await axios.get('https://jobbackend-f12u.vercel.app/getdata');

          if(window.location.pathname==='/hirings'){
            const filteredArray = response.data.filter(item => item.tag === 'job');
            setData(filteredArray);

            console.log(filteredArray)

          }
          else if(window.location.pathname==='/internships'){
            const filteredArray = response.data.filter(item => item.tag === 'internship');
            setData(filteredArray);

          }
            //const content = await response.json();
        }
        catch(error){
            console.log(error);
        }
    }
    fetchdata();
},[desc,location]);

const openDesc=(e)=>{
    setDesc(e);
    setCheck(true);
}
  return (
    <div>
      {
        check ? <Description desc={desc}/> :
        data.map((e,index)=>{
            return <div key={index} onClick={(event)=>{event.preventDefault(); openDesc(e)}} style={titleStyle}>
              <h5 style={{color:"green"}}>{e.company} </h5>  <h6 style={{color:"black"}}>is hiring{window.location.pathname==='/internships' ? <p>for interns</p>:<p></p>}</h6>
                </div>
        })
      }
        

    </div>
  )
}

export default Hirings