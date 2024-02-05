import React from 'react';
import Copyright from './Copyright'

const Contact = () => {
    return (
      <>
        <div style={{height:'100%',overflowX:'hidden'}}>
        <div>
        <div className='contact_heading'>
            <h1>get in touch</h1>
            <p>let's start a conversation! whether it's about potential projects, collaboration or just sharing ideas, i'm always here.</p>
        </div>
        <div style={{display:'grid',placeContent:'center'}}>
        <div class="row" style={{gap:'2rem',placeContent:'center'}}>
  <div class="contact col-6" >
    <div class="card   text-center  bg-dark border-light">
      <div class="card-body  text-light ">
        <h5 class="card-title">email</h5>
        <p class="card-text ">feel free to drop me an email at <br/> <span style={{fontSize:'2rem'}}>&#128071;&#127998;</span></p>
        <a href="#" class="btn btn-transparent text-light border-light">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="contact col-6 col-xsm-12" >
    <div class="card   text-center bg-dark border-light">
      <div class="card-body  text-light ">
        <h5 class="card-title">linkedIn</h5>
        <p class="card-text ">reach out via linkedIn<br/> <span style={{fontSize:'2rem'}}>&#128071;&#127998;</span></p>
        <a href="#" class="btn btn-transparent text-light border-light">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="contact col-6 col-xsm-12">
    <div class="card   text-center bg-dark border-light">
      <div class="card-body  text-light ">
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
