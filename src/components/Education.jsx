import React, { useState } from 'react';
import SaveBtn from './SaveBtn';
import EditBtn from './EditBtn';

export default function Education({ education, setEducation }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducation(updatedEducation);
  };

  return (
    <div>
      {isEditing ? (
        education.map((edu, index) => (
          <form key={index}>
                    <div className='txt1'>Education Details</div>
          <div className="first-container-general">

           <p className='education-input'>
           <input
              type="text" placeholder='School/Institution'
              value={edu.school}
              onChange={(e) => handleChange(index, "school", e.target.value)}
            /></p>
            <p className='fiel-study-div'>
            <input
              type="text" placeholder='Field of Study'
              value={edu.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
            />
            <input type="text" placeholder='Location' value={edu.schlLocation}
              onChange={(e) => handleChange(index, "schlLocation", e.target.value)} />
            </p>
            <p className='qualification-div' >          
                <input type='text' placeholder='Qualification' value={edu.qualification}
              onChange={(e) => handleChange(index, "qualification", e.target.value)} />

              <input type="text" placeholder='Degree/Certificate Name' value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
 />
            </p>
{/* 
           <p className='start-end-date-div'>
            <div className='start-end-div'>
              <p className='edu_date'>
          <p><label htmlFor="">Start Date</label></p>
          <p>
            <input className='educations-input'
              type="month"
              value={edu.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
            /></p>
          </p>

          <p className='edu_date'>
            <p><label htmlFor="">Start Date</label></p>
            <p><input className='educations-input2'
              type="month"
              value={edu.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
            /></p>
            </p>
              </div>
        
            </p> */}
            <div className="company-input-div ">
           <p> <label>Start Date:</label><br />
            <input className='month-date'
              type="month"
              value={edu.startDate}
              onChange={(e) => handleChange(index, "startDate", e.target.value)}
            /></p>
           <p className='exp-end-date'> <label>End Date:</label><br />
            <input
              type="month"
              value={edu.endDate}
              onChange={(e) => handleChange(index, "endDate", e.target.value)}
            /></p>
            </div>
            
            <SaveBtn value="Save" color="hsl(200, 100%, 50%)" type="button" onClick={() => setIsEditing(false)} />
              </div>
          </form>
        ))
      ) : (
        education.map((edu, index) => (
          <div className='education_save' key={index}>
            <p><strong>School:</strong> {edu.school}</p>
            <p><strong>Location: </strong>{edu.schlLocation}</p>
            <p><strong>Title:</strong> {edu.title}</p>
            <p><strong>Qualification:</strong> {edu.qualification}</p>
            <p><strong>Degree:</strong> {edu.degree}</p>
            <p><strong>Start Date:</strong> {edu.startDate}</p>
            <p><strong>End Date:</strong> {edu.endDate}</p>
            <EditBtn value="Edit" color="orange" type="button" onClick={() => setIsEditing(true)} />
          </div>
        ))
      )}
    </div>
  );
}