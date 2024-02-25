import React from 'react';
import Copyright from './Copyright'

const Contact = (props) => {
    return (
      <>
        <div style={{height:'100%',overflowX:'hidden'}}>
        <div style={props.style}>
        <div className='contact_heading' data-aos="zoom-in" data-aos-duration="500">
            <h1>get in touch</h1>
            <p>let's start a conversation! whether it's about potential projects, collaboration or just sharing ideas, i'm always here.</p>
        </div>
        <div style={{display:'grid',placeContent:'center'}}>
        <div class="row" style={{gap:'2rem',placeContent:'center'}}>
  <div class="contact col-6" >
    <div class="card   text-center  bg-transparent  border-dark" data-aos="fade-right" data-aos-duration="1000">
      <div class="card-body   ">
        <h5 class="card-title">email</h5>
        <p class="card-text ">feel free to drop me an email at <br/> <span style={{fontSize:'2rem'}}>&#128071;&#127998;</span></p>
        <a href="ankeshkaneriya@gmail.com" class="btn  border-dark" style={props.style}>Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="contact col-6 col-xsm-12" >
    <div class="card   text-center bg-transparent  border-dark" data-aos="fade-left" data-aos-duration="1000">
      <div class="card-body   ">
        <h5 class="card-title">linkedIn</h5>
        <p class="card-text ">reach out via linkedIn<br/> <span style={{fontSize:'2rem'}}>&#128071;&#127998;</span></p>
        <a href="#" class="btn border-dark" style={props.style}>Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="contact col-6 col-xsm-12">
    <div class="card   text-center bg-transparent border-dark" data-aos="fade-right" data-aos-duration="500">
      <div class="card-body   ">
        <h5 class="card-title">contact number</h5>
        <p class="card-text "> 8462006521</p>
      </div>
    </div>
  </div>
  <p className='text-center'>feel free to drop a message anytime. 
  <br/> i'm excited to hear from you and explore the possibilities.</p>
</div>
        </div>
        </div>
        </div>
            <Copyright/>
            </>
    )
}

export default Contact
