import React from 'react'

const CVPreview = ({ general, education, experience, setSubmitted }) => {
  const editsBtn = {
    backgroundColor:'red',
    border: 'none',
    padding: '10px 40px',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontWeight: 700,
    margin:'0 auto',
    textAlign: 'center',
    display:'flex'
}

  return (
    <div>
        <h2>General Information</h2>
        <p><span className='preview-name'> {general.name}</span></p>
            <p className='preview-detail'>{general.description}</p>
            <p className='preview-details'>{general.email} - {general.phone}</p>
            <p className='summary-page'>Professional Summary</p>           
            <hr />
            <p className='preview-details-sub'>{general.summary}</p>

            <h3 className='summary-page'>Experience</h3>
            <hr />
            {experience.map((exp, index) => <p key={index}>
              
              <p className='company-name'>{exp.posTitle}</p>
              <div className="company-date">
              <p className='company-name-date'>{exp.comname} <span></span>{exp.location}</p> 
              <p>{exp.startDt} - {exp.endDt}</p>
              </div>
              <p className='responsiblity'>Key Responsiblity:</p>
              <p className='jobres'>{exp.jobRes}</p>
              <p className='responsiblity'>Key Archievement:</p>
              <p className='jobres'>{exp.archievement}</p>
              </p>)}


            <h3 className='summary-page'>Education</h3>
            <hr />
            {education.map((edu, index) => <p key={index}>
              <div className="school-div">
              <p className='school-name'>{edu.school} </p> 
              <p>{edu.startDate} - {edu.endDate} </p>
              </div>
             <span className='schoolLocations'>{edu.schlLocation}</span>
              <p className='qualifications'>{edu.qualification}</p>
              <p>{edu.degree}</p>
              <p>{edu.title} </p>
              </p>)}

            <button style={editsBtn} onClick={() => setSubmitted(false)}>Edit CV</button>

    </div>
  )
};
export default CVPreview;

