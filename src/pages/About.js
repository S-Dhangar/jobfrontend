import Logo from './logo.png'
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
      <img style={{height:"5rem",width:'5rem',borderRadius:"100px",marginLeft:"42%"}} src={Logo} alt="" />


<div style={style}>

    <p style={{color:"white"}}>

  
<h3 style={{color:"black"}}> JobPath </h3>is a website started by us to helping out jobseekers and recently passed out freshers. 
   We provide job information and relevant preparation strategy to the students out there searching jobs in thier respecive
   fileds and provide news feeds related to jobs. Be in contact with us for getting awesome jobs, You will surely get whatever is best for you. 

     
    </p>
    </div>
    </div>
  )
}

export default About