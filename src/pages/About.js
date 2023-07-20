const About = (props) => {
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

  return (
    <div>
      <img style={{height:"5rem",width:'5rem',borderRadius:"100px",marginLeft:"42%"}} src="/logo.png" alt="" />


<div style={style}>

    <p style={{color:"white"}}>

  
<h3 style={{color:"black"}}> GRAB IT </h3>is a website started by two students Shubham Dhangar and Bhuvaneshwar Viswxbhscxsxxrma of knowhere college, we are helping out jobseekers and recently passed out students. 
   We provide job information and relevant preparation strategy to the students out there searching jobs in thier respecive
   fileds and provide news feeds related to jobs.

     
    </p>
    </div>
    </div>
  )
}

export default About