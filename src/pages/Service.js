import React from 'react'

const Service = () => {
  return (
  

    <div className="service">
    <div className="title">
      <h2>Services</h2>
    </div>

  
    <div className="box">
<div className="card">
<i className="fas fa-bars"></i>
<h5>Full Stack Web Development</h5>
<div className="pra">
  <p>I create responsive and efficient web solutions for diverse needs as a full-stack developer.</p>
  <p style={{ textAlign: 'center' }}>
    <a className="button" href="#">Read More</a>
  </p>
</div>
</div>





<div className="card">
<i className="far fa-user"></i>
<h5>Database Manager</h5>
<div className="pra">
<p> I ensure data integrity, security, and efficiency through structured design, robust data strategies,  and data-driven decision support.</p>
<p style={{ textAlign: 'center' }}>
  <a className="button" href="#">Read More</a>
</p>
</div>
</div>


    

    
<div className="card">
<i className="fas fa-cloud"></i>
<h5>Cloud Computing</h5>
<div className="pra">
<p>Optimizing cloud solutions with two key goals: ensuring compatibility across all devices and maximizing performance.</p>
<p style={{ textAlign: 'center' }}>
  <a className="button" href="#">Read More</a>
</p>
</div>
</div>
</div>
</div>


  )
}

export default Service