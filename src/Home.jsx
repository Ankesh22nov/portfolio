import React from 'react';
import profileimg from "./profile.jpg";
import {CircleProgress} from 'react-gradient-progress'

const Home = () => {
    return (
    <>
 <div className=" home d-grid  ">
 <div className="row m-0">
     <div className="intro_left col-lg-6 col-md-6 col-sm-6">
     <section>
     <h1 data-aos="fade-right" data-aos-duration="800">Welcome to my portfolio</h1>
         <h3 data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">Hey there! <span style={{fontSize:"2em"}}> &#128075;&#127998;</span></h3>
         <p  data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">I'm Ankesh Kaneriya,
          a Passionate FrontEnd Developer With a Keen Eyen In Design and a Love Creating Engaging Web Experiences. </p>
         <div style={{justifyContent:'center'}}>
             <span  className='text-center' data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
             <a href="#" class="hbtn hb-border-off3">say hello</a>
            </span>
         </div>
     </section>
       
            </div>
            <div className="intro_right col">
            <div data-aos="zoom-in" data-aos-duration="1000">
            <img src={profileimg} alt=""/>
            </div>
            </div>
 </div>
 </div>
    </>
    )
}

export default Home















