import React from 'react'
import'./resume.css'
function Resume({mainTitle,userName,interest,skill,education,experience,extracurriculars,signature,darkmode}) {
  let interestData; 
  let skillData; 
  let educationData; 
  let experienceData; 
  let extraData;
  if(interest.length > "0"){
    interestData = <><p className="head">Interests</p>
      <ul>
        {
            interest.map(link =>
                <li key={link}>{link}</li> 
            )
        }   
      </ul></>
  }else{
    interestData=""
  }
  if(skill.length > "0"){
    skillData = <> <p className="head">Skills</p>
    <ul>
    {
          skill.map(link =>
              <li key={link}>{link}</li> 
          )
      }   
    </ul></>
  }else{
    skillData=""
  }
  if(education.length > "0"){
    educationData = <><p className="head">Education</p>
    <ul>
    {
          education.map(item =>
             <a href={item.link} >
              <li key={item.name}>{item.name}</li> 
              </a>
          )
      }   
    </ul></>
  }else{
    educationData=""
  }
  if(experience.length > "0"){
    experienceData = <><p className="head">Experience</p>
    <ul>
    {
          experience.map(link =>
              <li key={link}>{link}</li> 
          )
      }   
    </ul></>
  }else{
    experienceData=""
  }
  if(extracurriculars.length > "0"){
    extraData = <><p className="head">Extracurriculars</p>
    <ul>
    {
          extracurriculars.slice(0, 5).map(link =>
              <li key={link}>{link}</li> 
          )
      }   
    </ul></>
  }else{
    extraData=""
  }

//   handler for print page
const handlePrint =(e)=>{
    e.stopPropagation();
    window.print();
}
  return (
    <>
    <div class="print-btn" onClick={handlePrint}>🖨️</div>
    <div class={darkmode?"darkmode":"lightmode"}>
    <div id="header" />
    <div className="left" />
    <div className="stuff">
      <br />
      <br />
      <h1>{mainTitle}</h1>
      <h2>{userName}</h2>
      <hr />
      <br />
      {interestData}
     {skillData}
      {educationData}
      {experienceData}
      {extraData}
    </div>
    <div className="right" />
    <div id="footer">
      <h2 id="name">{signature}</h2>
    </div>
  </div>
  </>
  )
}

export default Resume
