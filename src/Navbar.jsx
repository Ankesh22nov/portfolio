import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgMenuRightAlt } from "react-icons/cg";
import { SiAirbrakedotio } from "react-icons/si";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

const Navbar = ( props ) => {

    return (
      <><div className="navbar_main_div" style={props.style}>
      <div className="header">
      <div>
      <div  className='logo '>
    <h1><SiAirbrakedotio /></h1>
      <img src="" alt=""/>
      </div>
      </div>
      <div className="">
   <nav className="navbar navbar-dark  ">
  <div className="container-fluid d-flex justify-content-end">
    <button className="navbar-toggler border-0 shadow-none m-1 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      {/* <span className="navbar-toggler-icon "></span> */}
      <CgMenuRightAlt style={props.style2}/>
    </button>
    <button className='dark_light_mode' onClick={props.fun}><WiMoonAltThirdQuarter style={props.style2}/></button>
    <div className=" menu offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header d-md-flex justify-content-md-end">
        <button type="button" className="btn-close text-reset shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link active" aria-current="page" href="#"><NavLink className="menu_item" to="/">Home</NavLink></a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link" href="#"><NavLink className="menu_item" to="/about">About Me</NavLink></a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link" href="#"><NavLink className="menu_item" to="/project">Projects</NavLink></a>
          </li>
          <li className="nav-item" data-bs-dismiss="offcanvas">
            <a className="nav-link" href="#"><NavLink className="menu_item" to="/contact">Contact With Me</NavLink></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</div>
</div>
 </div>
</>
    )
}

export default Navbar
