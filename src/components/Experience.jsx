import React, {useState} from 'react'
import SaveBtn from './SaveBtn';
import EditBtn from './EditBtn';


export default function Experience({ experience, setExperience }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };
    setExperience(updatedExperience);
  };

  return (
    <div>
      {isEditing ? (
        experience.map((exp, index) => (
          <form key={index}>
            <label className='txt1'>Company Name:</label>
          <div className="first-container-general">

            <p className='experience-input'>
              <input
              type="text" placeholder='Company Name'
              value={exp.comname}
              onChange={(e) => handleChange(index, "comname", e.target.value)}
            /></p>

           <p className='experience-position'>
            <input
              type="text" placeholder='Position'
              value={exp.posTitle}
              onChange={(e) => handleChange(index, "posTitle", e.target.value)}
            />
            <input type="text" placeholder='Location'  value={exp.location}
              onChange={(e) => handleChange(index, "location", e.target.value)} />
            </p>
           <p className='experience-textarea qualification-div'> 
            <textarea
              value={exp.jobRes} placeholder='Responsibility'
              onChange={(e) => handleChange(index, "jobRes", e.target.value)}
            />
            <textarea value={exp.archievement} placeholder='Key Archievement'
              onChange={(e) => handleChange(index, "archievement", e.target.value)} />

            </p>
            <div className="company-input-div ">
           <p> <label>Start Date:</label><br />
            <input className='month-date'
              type="month"
              value={exp.startDt}
              onChange={(e) => handleChange(index, "startDt", e.target.value)}
            /></p>
           <p className='exp-end-date'> <label>End Date:</label><br />
            <input
              type="month"
              value={exp.endDt}
              onChange={(e) => handleChange(index, "endDt", e.target.value)}
            /></p>
            </div>
            <SaveBtn color="hsl(200, 100%, 50%)" value="save" type="button" onClick={() => setIsEditing(false)} />
              </div>
          </form>
        ))
      ) : (
        experience.map((exp, index) => (
          <div className='education_save' key={index}>
            <p><strong>Company Name:</strong> {exp.comname}</p>
            <p><strong>Position:</strong> {exp.posTitle}</p>
            <p><strong>Job Responsibility:</strong> {exp.jobRes}</p>
            <p><strong>Start Date:</strong> {exp.startDt}</p>
            <p><strong>End Date:</strong> {exp.endDt}</p>
            <EditBtn color='orange' value="Edit"  onClick={() => setIsEditing(true)} />
          </div>
        ))
      )}
    </div>
  );
}
