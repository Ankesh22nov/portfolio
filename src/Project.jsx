import React from 'react';
import Copyright from './Copyright';
import ss1 from './ss1.png';
import ss2 from './ss2.png'

const Project = () => {
let project1 =' https://ankesh22nov.github.io/bootstrap5.github.io/';

    return (
        <>
         <div className='project_main_div'>
             <div className="projects row">
             <div class="card text-white bg-dark col-6 col-sm-12 border-secondary" style={{width: "25rem",}}>
             <div style={{height:'50%',width:'100%'}}>
                <img src={ss1} class="card-img-top p-3" />
             </div>
                <div class="card-body">
                    <h5 class="card-title">business website</h5>
                    <p class="card-text">i was build random business website during my bootstrap larning phase.</p>
                    <a href={project1} target="_blank" class="btn btn-primary">take a look</a>
                </div>
                </div>
                <div class="card text-white bg-dark col-6 col-sm-12 border-secondary  " style={{width: "25rem",}}>
                <div style={{height:'50%',width:'100%'}}>
                <img src={ss2} class="card-img-top p-3" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">whatsaap clone</h5>
                    <p class="card-text">i was build whatsaap clone using html, css, and js.</p>
                    <a href=" https://ankesh22nov.github.io/whatsapClone.github.io/" target="_blank" class="btn btn-primary">take a look</a>
                </div>
                </div>
             </div>
         </div>
             <Copyright/>
        </>
    )
}

export default Project
