import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CvPreview from "./components/CvPreview";
import { FaPrint, FaDownload } from "react-icons/fa";
import "./App.css";

const App = () => {
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
    const cvRef = useRef(); // Create a reference for the CvPreview component

    useEffect(() => {
        localStorage.setItem("general", JSON.stringify(general));
    }, [general]);

    useEffect(() => {
        localStorage.setItem("education", JSON.stringify(education));
    }, [education]);

    useEffect(() => {
        localStorage.setItem("experience", JSON.stringify(experience));
    }, [experience]);

    // Function to handle print/download
    const handlePrint = useReactToPrint({
        content: () => cvRef.current, // Reference to the component to print
    });

    return (
        <div className="container">
            <div className="main-content">
                {!submitted ? (
                    <>
                        <GeneralInfo info={general} setInfo={setGeneral} />
                        <Experience experience={experience} setExperience={setExperience} />
                        <button 
                            className="add-experience" 
                            onClick={() => setExperience([...experience, { comname: "", posTitle: "", jobRes: "", startDt: "", endDt: "", location:"", archievement: "" }])}
                        >
                            Add Experience
                        </button>
                        <Education education={education} setEducation={setEducation} />
                    </>
                ) : (
                    <div>
                        {/* <CvPreview general={general} education={education} experience={experience} setSubmitted={setSubmitted} /> */}
                    </div>
                )}
            </div>

            {/* CV Preview Section */}
            <div className="cv-preview">
                <CvPreview 
                    ref={cvRef} // Attach the ref here
                    general={general} 
                    education={education} 
                    experience={experience} 
                    setSubmitted={setSubmitted} 
                />
                <div className='download-btn'>
                    <button className="download-btn2" onClick={handlePrint}> 
                        <FaDownload /> &nbsp; Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
