import React from 'react';
import SimpleSlider from "../SlickSlider";
function HealthTips(props) {
    return (
       <>
           <div className="container b-transform">
               <p className="fs-1 text-uppercase text-center mt-4 mt-lg-5">Health Articles</p>
               <p className="text-center p-color">Get health tips from experts</p>
               <div className="row">
                   <SimpleSlider/>
               </div>
               <div className="row d-flex justify-content-center">
                   <div className="col-8 col-md-4 mt-3">
                       <a className="btn btn-primary w-100 rounded fs-6 py-2" href="#" role="button">Read More Articles</a>
                   </div>
               </div>
           </div>
       </>
    );
}

export default HealthTips;