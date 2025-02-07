import React, {useState} from 'react'
import EditBtn from './EditBtn'
import SaveBtn from './SaveBtn'

export default function GeneralInfo({info, setInfo}) {
    
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      {isEditing ?(
        <>
        <div className='txt1'>Personal Details</div>
        <form>
          <div className="first-input">
        <input type="text" placeholder='Fullname' value={info.name} onChange={(e)=>setInfo({...info, name: e.target.value})} />
        <input type="text" placeholder='Job Description' value={info.description} onChange={(e)=>setInfo({...info, description: e.target.value})} />
        </div>
        <p className='email-number-input'>
        <input type="email" value={info.email}
 placeholder='Email' onChange={(e)=>setInfo({...info, email: e.target.value})} />
    <input type="number" value={info.phone} placeholder='phone Number' onChange={(e) => setInfo({ ...info, phone: e.target.value })} />
    </p>

<p className='textarea-div'><textarea placeholder='Write about yourself' value={info.summary} onChange={(e) => setInfo({ ...info, summary: e.target.value })} ></textarea></p>

<div className='GeneralBtn'>

<SaveBtn value="Save" color="hsl(200, 100%, 50%)" type="button" onClick={() => setIsEditing(false)} />

</div>
</form>
</>
      ):(
        <>
        <form action="" >
          <div className='education_save'>
      <p><strong>Name:</strong> {info.name}</p>
      <p><strong>Job Description:</strong> {info.description}</p>
      <p><strong>Email:</strong> {info.email}</p>
      <p><strong>Phone:</strong> {info.phone}</p>
      <p><strong>About Yourself: </strong>{info.summary}</p>
      
      <EditBtn value="Edit" color="orange" type="button" onClick={() => setIsEditing(true)} />
      </div>
      </form>
        </>
      )
}
    </div>
  )
}
// import React, {useState} from 'react'
// import EditBtn from './EditBtn'
// import SaveBtn from './SaveBtn'

// export default function GeneralInfo({info, setInfo}) {
//   const [name, setName]=useState('')
//   const [email, setEmail]=useState('')
//   const [number, setNumber]= useState('')
    
//   const [isEditing, setIsEditing] = useState(true);

//   return (
//     <div>
//       {isEditing ?(
//         <>
      

//         <div>General Information</div>
//         <form action="">
//         <label htmlFor="Fname">Full Name: {name}</label> <br />
//         <input type="name" placeholder='name' onChange={(e)=>setName(e.target.value)} />
//         <br />
//    <p> <label htmlFor="email">Email Adress: {email}</label> <br />
//         <input type="email" placeholder='Email Adress' onChange={(e)=>setEmail(e.target.value)} />
// </p>
// <p>
//     <label htmlFor="Phone Number">Phone Number: {number}</label><br />
//     <input type="number" placeholder='phone Number' onChange={(e)=>setNumber(e.target.value)} />
// </p>
// <div className='GeneralBtn'>

// <SaveBtn value="Save" color="hsl(200, 100%, 50%)" type="button" onClick={() => setIsEditing(false)} />

// </div>
// </form>
// </>
//       ):(
//         <>
//         <form action="">
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//       <p>Phone: {number}</p>
     
//       <EditBtn value="Edit" color="orange" type="button" onClick={() => setIsEditing(true)} />

//       </form>
//         </>
//       )
// }
//     </div>
//   )
// }
