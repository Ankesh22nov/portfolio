import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
     <div className="main_div">
    <Navbar/>
 <Routes>
 <Route exact path="/" element={<Home/>}/>
 <Route exact path="/about" element={<About/>}/>
 <Route exact path="/project" element={<Project/>}/>
 <Route exact path="/contact" element={<Contact/>}/>
 </Routes>
 </div>
 </>
  );
}

export default App;
