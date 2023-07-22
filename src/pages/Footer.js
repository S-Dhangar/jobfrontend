import React from 'react'
import { Link } from 'react-router-dom'
import Address from "./Address.png"
import Phone from "./phone.png"
import Email from "./email.png"
const Footer = () => {

    
  const footerStyle = {
    marginTop: "50vh",
    padding: "7%",
    display: "flex",
    background: "#FFF",
    justifyContent: "space-evenly"
  }
  const belowfooterStyle = {
    paddingTop: "20px",
    alignItems: "center",
    height: "65px",
    color: "black",
    background: "#FFF",
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }


  return (
    <div>
        
        <footer>
        <div style={footerStyle}>

          <div style={{ color: "black", textAlign: "left", fontSize: "15px" }}>
            <div style={{fontSize:"19px"}} >Quick Links</div>
            <div> <Link to="/">home</Link> </div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/about">Contact Us</Link></div>
            <div style={{color:"blue"}}>T & C</div>
            <div style={{color:"blue"}} >Privacy</div>

          </div>
          <div style={{ color: "black", textAlign: "left" }}>
             Contact
            <div>
              <div style={{ marginBottom: "20px", fontSize: "15px" }}><img style={{ height: "20px", borderRadius: "25px" }} src={Phone} alt="" /> +91 8989404186</div>
              <div style={{ marginBottom: "20px", fontSize: "15px" }}><img style={{ height: "20px", borderRadius: "25px" }} src={Email} alt="" /> Jobpath@gmail.com</div>
              <div style={{ marginBottom: "20px", fontSize: "15px" }}><img style={{ height: "20px", borderRadius: "25px" }} src={Address} alt="" />Bhopal, MP, India</div>
            </div>

          </div>
        </div>
        <div style={{ width: "100%", height: "100px" }}>
          <div style={belowfooterStyle}>
            copyright @ JobPath
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer