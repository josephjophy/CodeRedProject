import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface instructorProperties{
    lastName: String,
    firstName: String
}


function InstructorSummary(instructor : instructorProperties) {

    useEffect(()=>{
        loadAvgGPA();
        loadCoursesTaught();
    },[])

    const [avgGpa, setAvgGPA] = useState(0);
    const [CoursesTaught, setCoursesTaught] = useState([]);


     //gets the average GPA
     const loadAvgGPA = async() =>{
        const response = await axios.get(`${process.env.REACT_APP_RATEUH_MAIN_API}/classes/instructoraverageGPA/${instructor.lastName}/${instructor.firstName}`);
        //response.data will typically be in the following format:
        //[{_id: {INSTRLASTNAME: String, INSTRFIRSTNAME: String}, averageGPA: Number}] **note: this is an array of size 1
        setAvgGPA(response.data[0].averageGPA.toFixed(2));
    }
     
     //gets all distinct courses taught
    const loadCoursesTaught = async() =>{
        const response = await axios.get(`${process.env.REACT_APP_RATEUH_MAIN_API}/classes/CoursesTaught/${instructor.lastName}/${instructor.firstName}`);
        //response.data will typically be in the following format:
        // array of {name: String, subject: String, catalognumber: String}
        setCoursesTaught(response.data);
        CoursesTaught.sort();
    }

  return (

    <div className = "course-summary">
         <div>{avgGpa} GPA</div>
         
    </div>
    
  );
}

export default InstructorSummary;