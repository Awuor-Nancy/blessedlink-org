import React from "react"
import bob from './images/bob.jpg,'
import doctor from './images/doctor.jpg,'
import babutalent from './images/babutalent.jpg,'
import kidsfarm from './images/kidsfarm.jpg,'

const Ourpartners = ()=>{
    return (

<div className="gallery">
<div className="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={bob} alt="bob" width="600" height="400" />
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src={doctor} alt="doctor" width="600" height="400" />
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src={babutalent} alt="Northern Lights" width="600" height="400" />
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src={kidsfarm} alt="Mountains" width="600" height="400" />
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src={babutalent} alt="Cinque Terre" width="600" height="400" />
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src={bob} alt="Forest" width="600" height="400" />
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src={babutalent} alt="Northern Lights" width="600" height="400" />
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

<div className="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src={kidsfarm} alt="Mountains" width="600" height="400" />
  </a>
  <div className="desc">Add a description of the image here</div>
</div>

</div>

   ) 
 }

export default Ourpartners;