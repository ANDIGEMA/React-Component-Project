import React from 'react'

function BodyText() {
  return (
    <>
      <h1 class="text-center mt-5">Pricing</h1>
      {/* Small Devices */}
      <p className="text-center fs-5 fw-light-bold d-md-none d-sm-block">Quickly build an effective pricing  
      <br/>table for your potential customers
       <br/>with this Bootstrap example. It’s 
        <br/>built with default Bootstrap<br/>
        components and utilities with little 
        <br/>customization.</p>
      {/* Large Devices */}
      <p className="text-center fs-5 fw-light-bold d-none d-sm-none d-lg-block">Quickly build an effective pricing table for your potential customers with <br/>
      this Bootstrap example. It’s built with default Bootstrap components and<br/>  
         utilities with little customization.</p>

    </>
  )
}

export default BodyText;