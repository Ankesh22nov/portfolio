import React from 'react';
import img from "./profile2.jpg";
import Copyright from './Copyright'


const About = () => {
    return (
        <>
        <div style={{overflowX:'hidden'}}>
            <div className="bg-dark" style={{height:'50%'}}>
                <section className="about_main_section1">
                    <h1 data-aos="zoom-in-down" data-aos-duration="500" data-aos-anchor-placement="center-center">about me</h1>
                <section className="about_main_section2">
                    <div className="about_profile shadow-lg ">
                    <img data-aos="fade-right" data-aos-duration="700" src={img} alt=""/>
                    </div>
                    <div className='about_text'>
                    <p data-aos="fade-left" data-aos-duration="700">
                        hello! i'm ankesh, a passionate and aspiring frontend devloper .
                        though i'm new to the field, i'm dedicated to creating engaging and user-friendly web experiance.
                        my enthusiasm for learning and curiosity drive me to explore the latest trends in frontend development
                    </p>
                    </div>
                </section>
                </section>
                <section>
                    
<div id="home_section2" className="d-grid  ">
  <div className="work_skill row">
  <div className="intro_left  ">
  <h1>my skills......</h1><br/>
  <div className='d-flex' style={{width:"100%"}}>
  <div id="grid_skill_div" >
  <div className='skill '>
      <div><h4>=> languages:  </h4></div>
     <div   className="progress_bar" data-aos="fade-right" data-aos-duration="300">
         <b>HTML</b><span className="progress"> <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>100% </span>
     </div>
      <div   className="progress_bar" data-aos="fade-right" data-aos-duration="600">
         <b>CSS</b><span className="progress" style={{height:"30%", borderRadius:"10px"}}> <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>100% </span>
      </div>
      <div   className="progress_bar" data-aos="fade-right" data-aos-duration="900">
          <b>JAVASCRIPT</b><span className="progress" style={{height:"30%", borderRadius:"10px"}}> <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>95% </span>
      </div>
  </div>
  <div className='skill '>
      <div><h4>=> framwork/ libraries:  </h4></div>
      <div className="progress_bar" data-aos="fade-left" data-aos-duration="300">
          <b  >BOOTSTRAP</b><span className="progress" style={{height:"30%", borderRadius:"10px"}}> <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> 95%</span>
      </div>
      <div className="progress_bar" data-aos="fade-left" data-aos-duration="600">
          <b  >REACT</b><span className="progress" style={{height:"30%", borderRadius:"10px"}}> <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>80%</span>
      </div>
  </div>
  <div className='skill '>
      <div><h4>=> version control: </h4></div>
      <div className="progress_bar" data-aos="fade-right" data-aos-duration="300">
          <b  >GIT</b><span className="progress" style={{height:"30%", borderRadius:"10px"}}> <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> 90%</span>
      </div>
      <div className="progress_bar" data-aos="fade-right" data-aos-duration="600" >
          <b  >GITHUB</b><span className="progress" style={{height:"30%", borderRadius:"10px"}}> <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>90% </span>
      </div>
  </div>
  </div>
  </div>
  </div>
 </div>
 <div className="work_skill ">
 <h1 >What I DO......</h1><br/>
 <div className="what_i_do">
    <div id='about_card' class="card " >
      <div class=" work card-body">
        <h4 class="card-title">Web Development:</h4>
        <p class="card-text">Crafting pixel-perfect, responsive websites using HTML, CSS, JAVASCRIPT, REACT and FRAMWORKS.</p>
      </div>
    </div>
    <div id='about_card' class="card " >
      <div class="work card-body">
        <h4 class="card-title">UI/UX Design: </h4>
        <p class="card-text">ensuring a seamless and delightfull user interface through thoughtful design.</p>
      </div>
  </div>
 </div>
 </div>
  </div>
                </section>
            </div>
            <Copyright/>
        </div>
        </>
    )
}

export default About
