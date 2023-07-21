import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Hirings from './pages/Hirings'
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Address from "./pages/Address.png" 
import Phone from "./pages/phone.png" 
import Email from "./pages/email.png" 

function App() {
  const style = {
    backgroundImage: 'linear-gradient(to right, #DECBA4, #3E5151)',
    marginTop:"0px",
    backgroundSize:"cover",

  }
  
  const footerStyle = {
    marginTop:"50vh",
    padding:"7%",
    display:"flex",
    background:"#FFF",
    justifyContent:"space-evenly"
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
    <div className="App" style={style}>
      
    <Router>
    
      <Navbar/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/hirings' element={<Hirings/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/internships' element={<Hirings/>} />
        <Route path='/login' element={<Login/>} />


      </Routes>
      </div>
    </Router>
    <footer>
        <div style={footerStyle}>
          
          <div style={{ color: "black",textAlign:"left",fontSize:"15px"}}>
          <div>Quick Links</div>
          <div>home</div>
          <div>About</div>
          <div>Contact Us</div>
          <div>T & C</div>
          <div>Privacy</div>          
          
          </div>
          <div style={{ color: "black",textAlign:"left" }}>
            Contact
          <div>
             <div style={{marginBottom:"20px",fontSize:"15px"}}><img style={{height:"20px",borderRadius:"25px"}} src={Phone} alt="" /> +91 7067751093</div>
              <div style={{marginBottom:"20px",fontSize:"15px"}}><img style={{height:"20px",borderRadius:"25px"}} src={Email} alt="" /> bhuvaneshwar@gmail.com</div>
           <div style={{marginBottom:"20px",fontSize:"175x"}}><img style={{height:"20px",borderRadius:"25px"}} src={Address} alt="" /> Mars, Universe</div>
          </div>
          
          </div>
        </div>
        <div style={{ width: "100%", height: "100px" }}>
          <div style={belowfooterStyle}>
            copyright @ 2023 Shubam Dhangar
          </div>
        </div>
      </footer>
    </div>
   
  );
}

export default App;
