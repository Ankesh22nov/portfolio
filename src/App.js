import './App.css';
import { useState } from 'react'; 
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import {Routes, Route} from 'react-router-dom';

function App() {
  const [isDarkModeOn,setisDarkModeOn] = useState(false);

  const toggleMode = () => {
    setisDarkModeOn(!isDarkModeOn);
    console.log('ok');
    
  }
  return (
    <>
     <div className="main_div" 
     style={{background: isDarkModeOn ? '#333' : '#fff' , 
     color: isDarkModeOn ? '#fff' : '#333' }}>

    <Navbar fun={toggleMode} 
    style={{background: isDarkModeOn ? '#333' : '#fff' , 
    color: isDarkModeOn ? '#fff' : '#333', 
    boxShadow: isDarkModeOn ? 'rgb(35 35 34) 0px 5px 10px' : 'rgb(235, 231, 226) 0px 5px 10px' }}
      style2={{color: isDarkModeOn ? '#fff' : '#333'}}
    />

 <Routes>
 <Route exact path="/"
  element={<Home style={{background: isDarkModeOn ? '#333' : '#fff' , 
                color: isDarkModeOn ? '#fff' : '#333' }}/>}/>

 <Route exact path="/about"
  element={<About style={{background: isDarkModeOn ? '#333' : '#fff' , 
                color: isDarkModeOn ? '#fff' : '#333' }}/>}/>

 <Route exact path="/project" 
 element={<Project style={{background: isDarkModeOn ? '#333' : '#fff' , 
                color: isDarkModeOn ? '#fff' : '#333' }}/>}/>

 <Route exact path="/contact"  
 element={<Contact style={{background: isDarkModeOn ? '#333' : '#fff' , 
                color: isDarkModeOn ? '#fff' : '#333' }}/>}/>

 </Routes>
 </div>
 </>
  );
}

export default App;
