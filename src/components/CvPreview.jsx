

import React, { forwardRef } from "react";

const CVPreview = forwardRef(({ general, education, experience }, ref) => {
  return (
    <div ref={ref} className="cv-preview-content">
      <h2>General Information</h2>
      <p><span className='preview-name'>{general.name}</span></p>
      <p className='preview-detail'>{general.description}</p>
      <p className='preview-details'>{general.email} - {general.phone}</p>
      <p className='summary-page'>Professional Summary</p>
      <hr />
      <p className='preview-details-sub'>{general.summary}</p>

      <h3 className='summary-page'>Experience</h3>
      <hr />
      {experience.map((exp, index) => (
        <div key={index}>
          <p className='company-name'>{exp.posTitle}</p>
          <div className="company-date">
            <p className='company-name-date'>{exp.comname} <span></span>{exp.location}</p> 
            <p>{exp.startDt} - {exp.endDt}</p>
          </div>
          <p className='responsiblity'>Key Responsibility:</p>
          <p className='jobres'>{exp.jobRes}</p>
          <p className='responsiblity'>Key Achievement:</p>
          <p className='jobres'>{exp.archievement}</p>
        </div>
      ))}

      <h3 className='summary-page'>Education</h3>
      <hr />
      {education.map((edu, index) => (
        <div key={index}>
          <p className='school-name'>{edu.school}</p> 
          <p>{edu.startDate} - {edu.endDate}</p>
          <p className='schoolLocations'>{edu.schlLocation}</p>
          <p className='qualifications'>{edu.qualification}</p>
          <p>{edu.degree}</p>
          <p>{edu.title}</p>
        </div>
      ))}
    </div>
  );
});

export default CVPreview;
