import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface courseProperties{
    name: String,
    subject: String,
    catalogNumber: String
}

function CourseSummary(course : courseProperties) {

    useEffect(()=>{
        loadAvgGPA();
        loadRelatedInstructors();
    },[])

    const [avgGPA, setAvgGPA] = useState(0);


     //gets average GPA
    const loadAvgGPA = async() =>{
        const response = await axios.get(`${process.env.REACT_APP_RATEUH_MAIN_API}/classes/courseaverageGPA/${course.name}/${course.subject}/${course.catalogNumber}`);
        //response.data typically will be in the following format:
        //[{_id: {COURSEDESCR: String, SUBJECT: String, CATALOGNBR: String}, averageGPA: Number}] **note this is an array of size 1
        setAvgGPA(response.data[0].averageGPA.toFixed(2));
    }
    //gets all instructors who teach this course
    const loadRelatedInstructors = async() =>{
         const response = await axios.get(`${process.env.REACT_APP_RATEUH_MAIN_API}/classes/relatedInstructors/${course.name}/${course.subject}/${course.catalogNumber}`);
         //response.data typically will be in the following format:
         //array of {lastName: String , firstName: String}
         console.log(response.data);
    }

  return (

    <div className = "course-summary">
        <div>{avgGPA} GPA</div>
    </div>
    
  );
}

export default CourseSummary;