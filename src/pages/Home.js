import React, { useState } from 'react'

import axios from 'axios'
import { useEffect } from 'react'


const Home = () => {

const [feeds,setFeeds] = useState([{title:"none",description:"nones"}]);
var [ind,setInd] = useState(0);
const [storyFeeds,setStoryFeeds]=useState([]);
useEffect(()=>{
    const fetchdata= async()=>{
        try{
          const response = await axios.get('http://localhost:5000/getfeeds');

          
          const filteredArray = response.data.filter(item => item.tag === 'hirings');
          const stories = response.data.filter(item => item.tag === 'stories');

            setStoryFeeds(stories)
            setFeeds(filteredArray);
       
            //const content = await response.json();
        }
        catch(error){
            console.log(error);
        }
    }
    fetchdata();
},[]);



  const carousaldivStyle = {
    overflow:"hidden",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 1)",
    borderRadius: "10px",
    marginBottom: "40px",
    marginLeft: "5%",
    height: "300px",
    width: "90%",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    alignItems: "center"
  }
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ margin: "10%" }}>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ ...carousaldivStyle }}>
            <div>
              <div style={{ color: "white", textAlign: "center", padding: "10%",overflow:"hidden" }}>
              
              
                    <h5>{feeds[ind].title}</h5>
                <p>{feeds[ind].description}</p>
                  
              </div>
            </div>

          </div>
          <div className="carousel-item" style={{ ...carousaldivStyle }}>
            <div style={{ color: "white", textAlign: "center", padding: "10%" }}>
            <h5>{feeds[ind].title}</h5>
                <p>{feeds[ind].description}</p>
            </div>
          </div>
         
        </div>
        <a onClick={()=>{if(ind===0){setInd(feeds.length-1)} else{setInd(ind-1)}}} className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a onClick={()=>{if(ind===feeds.length-1){setInd(0)} else{setInd(ind+1)}}} className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '150px', flexWrap: 'wrap', gap: '200px' }}>


        <div style={{overflow: "hidden", padding: "5%", height: "400px", width: "33%", borderRadius: "8px", background: "#FFF", boxShadow: "0px 4px 12px rgba(0, 0, 0, 1)" }}>
           <h5>{storyFeeds.length===0 ? "" : storyFeeds[0].title}</h5>
            <p style={{ fontSize: "15px" }}>
              { storyFeeds.length===0 ? "" : storyFeeds[0].description}
               </p>
          </div>
        <div style={{ padding: "5%", overflow: "hidden", height: "400px", width: "33%", borderRadius: "8px", background: "#FFF", boxShadow: "0px 4px 12px rgba(0, 0, 0, 1)" }}>
        <h5>{storyFeeds.length===0 ? "" : storyFeeds[1].title}</h5>

            <p style={{ fontSize: "15px" }}>
            {storyFeeds.length===0 ? "" : storyFeeds[1].description}

  </p>
        </div>
        <div style={{ padding: "5%", overflow: "hidden", height: "400px", width: "33%", borderRadius: "8px", background: "#FFF", boxShadow: "0px 4px 12px rgba(0, 0, 0, 1)" }}>
        <h5>{storyFeeds.length===0 ? "" : storyFeeds[2].title}</h5>

            <p style={{ fontSize: "15px" }}>
            {storyFeeds.length===0 ? "" : storyFeeds[2].description}

  </p>
        </div>

      </div>
    </div>
  )
}

export default Home