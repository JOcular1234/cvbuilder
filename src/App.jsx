
// import React, { useState, useEffect } from "react";
// import GeneralInfo from "./components/GeneralInfo";
// import Education from "./components/Education";
// import Experience from "./components/Experience";
// import CvPreview from "./components/CvPreview";
// import "./App.css";

// const App = () => {
//     const submitBtn = {
//         backgroundColor: 'green',
//         border: 'none',
//         padding: '10px 40px',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         color: '#fff',
//         fontFamily: 'Arial, Helvetica, sans-serif',
//         fontWeight: 700,
//         margin: '0 auto',
//         textAlign: 'center',
//         display: 'flex'
//     };

//     // Retrieve saved data from localStorage or use default values
//     const [general, setGeneral] = useState(() => {
//         const savedGeneral = localStorage.getItem("general");
//         return savedGeneral ? JSON.parse(savedGeneral) : { name: "", email: "", phone: "" };
//     });

//     const [education, setEducation] = useState(() => {
//         const savedEducation = localStorage.getItem("education");
//         return savedEducation ? JSON.parse(savedEducation) : [{ school: "", title: "", startDate: "", endDate: "" }];
//     });

//     const [experience, setExperience] = useState(() => {
//         const savedExperience = localStorage.getItem("experience");
//         return savedExperience ? JSON.parse(savedExperience) : [{ comname: "", posTitle: "", jobRes: "", startDt: "", endDt: "" }];
//     });

//     const [submitted, setSubmitted] = useState(false);

//     // Save to localStorage whenever state changes
//     useEffect(() => {
//         localStorage.setItem("general", JSON.stringify(general));
//     }, [general]);

//     useEffect(() => {
//         localStorage.setItem("education", JSON.stringify(education));
//     }, [education]);

//     useEffect(() => {
//         localStorage.setItem("experience", JSON.stringify(experience));
//     }, [experience]);

//     return (
//         <div className="container">
//             {!submitted ? (
//                 <>
//                 <div className="main-container">
//                     <GeneralInfo info={general} setInfo={setGeneral} />
//                     <Education education={education} setEducation={setEducation} />
//                     <button onClick={() => setEducation([...education, { school: "", title: "", startDate: "", endDate: "" }])}>
//                         Add Education
//                     </button>

//                     <Experience experience={experience} setExperience={setExperience} />
//                     <button onClick={() => setExperience([...experience, { comname: "", posTitle: "", jobRes: "", startDt: "", endDt: "" }])}>
//                         Add Experience
//                     </button>

//                     <button style={submitBtn} onClick={() => setSubmitted(true)}>Submit CV</button>
//                     </div>
//                 </>
//             ) : (
//                 <div>
//                 {/* <CvPreview general={general} education={education} experience={experience} setSubmitted={setSubmitted} /> */}
//                 </div>
//             )};
//           <aside>
//           <CvPreview general={general} education={education} experience={experience} setSubmitted={setSubmitted} />
//           </aside>
//         </div>
//     );
// };

// export default App;

import React, { useState, useEffect } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";
import "./App.css";

const App = () => {
    const submitBtn = {
        backgroundColor: 'green',
        border: 'none',
        padding: '10px 40px',
        borderRadius: '5px',
        cursor: 'pointer',
        color: '#fff',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 700,
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex'
    };

    const [general, setGeneral] = useState(() => {
        const savedGeneral = localStorage.getItem("general");
        return savedGeneral ? JSON.parse(savedGeneral) : { name: "", email: "", phone: "", description:"", summary: "" };
    });

    const [education, setEducation] = useState(() => {
        const savedEducation = localStorage.getItem("education");
        return savedEducation ? JSON.parse(savedEducation) : [{ school: "", title: "", startDate: "", endDate: "", degree:"", qualification:"", schlLocation: "" }];
    });

    const [experience, setExperience] = useState(() => {
        const savedExperience = localStorage.getItem("experience");
        return savedExperience ? JSON.parse(savedExperience) : [{ comname: "", posTitle: "", jobRes: "", startDt: "", endDt: "", location: "", archievement: "" }];
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        localStorage.setItem("general", JSON.stringify(general));
    }, [general]);

    useEffect(() => {
        localStorage.setItem("education", JSON.stringify(education));
    }, [education]);

    useEffect(() => {
        localStorage.setItem("experience", JSON.stringify(experience));
    }, [experience]);

    return (
        <div className="container">
            <div className="main-content">
                {!submitted ? (
                    <>
                        <GeneralInfo info={general} setInfo={setGeneral} />

                        <Experience experience={experience} setExperience={setExperience} />
                        <button className="add-experience" onClick={() => setExperience([...experience, { comname: "", posTitle: "", jobRes: "", startDt: "", endDt: "", location:"", archievement: "" }])}>
                            Add Experience
                        </button>
                        
                        <Education education={education} setEducation={setEducation} />
                        
{/* 
                        <button style={submitBtn} onClick={() => setSubmitted(true)}>Submit CV</button> */}
                    </>
                ) : (
                    <div>
                        {/* <CvPreview general={general} education={education} experience={experience} setSubmitted={setSubmitted} /> */}
                    </div>
                )}
            </div>
            <div className="cv-preview">
                <CvPreview general={general} education={education} experience={experience} setSubmitted={setSubmitted} />
            </div>
        </div>
    );
};

export default App;
