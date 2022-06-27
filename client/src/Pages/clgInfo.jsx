
import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'

const clgInfo=()=> {
 
  return (
    <div>
      <HomeHelper />  
          <ul class="slideshow">
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
          </ul>
      <div class='ourDepartment'>
        <h1 style={{color:"#0492c2"}}>Our Department</h1>
        <p>Department has been established to design and offer courses MCA and BCA with an objective of producing the best computer professionals to keep swiftness with the R&D activities in this fast emerging field of Computer Applications. Ever since its inception in 1986, the department strives to meet the computing needs of different sectors and offering specially designed courses to their students. The department consistently updates curriculum as per the changing requirements of the industry by considering suggestions from qualified board of studies committee involving efficient members from the field of industry, research and academia. The department has witnessed around 70 percent placements in reputed companies and also seen students opting for promoting start-ups and higher studies. Department is always getting constant encouragement and support for uplifting the quality of education from the management with divine blessings of His Holiness Swamiji.</p>
      </div>
    </div>
)}

export default clgInfo;
