import React from 'react'
import {FaBootstrap} from 'react-icons/fa';

function Footer() {
  return (
    <>
     {/* Large Devices */}
    <div className="container-fluid mt-5">
    <div className="row d-none d-lg-col">

     {/*  */}
    <div className="col-sm-3 fs-6">
 
    <div className="d-flex flex-column">
    <FaBootstrap size="25px" color="blue"/>  @ 2017-2025
    </div>
  </div>

  {/* Features */}
  <div className="col-sm-3 fs-6">
  <h4>Features</h4>   
    <div className="">
      <div className="fw-light">Cool stuff</div>
      <div className="fw-light">Random feature</div>
      <div className="fw-light">Team feature</div>
      <div className="fw-light">Stuff for developers</div>
      <div className="fw-light">Another one</div>
      <div className="fw-light">Last time</div>
    </div>
  </div>


     {/* Resource */}
     <div className="col-sm-3 fs-6">
     <h4>Resources</h4>   
    <div className="">
      <div className="fw-light">Resource</div>
      <div className="fw-light">Resource name</div>
      <div className="fw-light">Another resource</div>
      <div className="fw-light">Final resource</div>
    </div>
  </div>


    {/* Features */}
    <div className="col-sm-3 fs-6">
     <h4>About</h4>   
    <div className="fw-light">
      <div className="fw-light">Team</div>
      <div className="fw-light">Locations</div>
      <div className="fw-light">Privacy</div>
      <div className="fw-light">Terms</div>
    </div>
  </div>
  
</div>
    </div>





 {/* Small Devices */}
 <div className="container-fluid d-lg-none d-sm-block">
 <div className="d-flex flex-column">

   {/*  */}
   <div className="col-sm-3 fs-6 ms-4">
  
     <div className="d-flex flex-column">
     <FaBootstrap size="25px" color="blue"/>  @ 2017-2025
     </div>
   </div>


   <div className="d-flex flex-row justify-content-around mt-3">
   {/* Features */}
   <div className="fs-6">
   <h4>Features</h4>   
     <div className="">
       <div className="fw-light">Cool stuff</div>
       <div className="fw-light">Random feature</div>
       <div className="fw-light">Team feature</div>
       <div className="fw-light">Stuff for developers</div>
       <div className="fw-light">Another one</div>
       <div className="fw-light">Last time</div>
     </div>
   </div>



      {/* Resources */}
      <div className="col-sm-3 fs-6">
      <h4>Resources</h4>   
     <div className="">
       <div className="fw-light">Resource</div>
       <div className="fw-light">Resource name</div>
       <div className="fw-light">Another resource</div>
       <div className="fw-light">Final resource</div>
     </div>
   </div>
   </div>

     {/* Features */}
     <div className="col-sm-3 fs-6 ms-4  mt-3">
      <h4>About</h4>   
     <div className="fw-light">
       <div className="fw-light">Team</div>
       <div className="fw-light">Locations</div>
       <div className="fw-light">Privacy</div>
       <div className="fw-light">Terms</div>
     </div>
   </div>
  </div>
 </div>
 </>
  )
}

export default Footer;
