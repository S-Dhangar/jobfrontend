import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Hirings from './pages/Hirings'
import Admin from "./pages/Admin";
import Login from "./pages/Login";

import Footer from "./pages/Footer";
function App() {
  const style = {
    backgroundImage: 'linear-gradient(to right, #DECBA4, #3E5151)',
    marginTop: "0px",
    backgroundSize: "cover",

  }

  return (
    <div className="App" style={style}>

      <Router>

        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/hirings' element={<Hirings />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/internships' element={<Hirings />} />
            <Route path='/login' element={<Login />} />


          </Routes>
        </div>
        <Footer/>

      </Router>
    </div>

  );
}

export default App;
