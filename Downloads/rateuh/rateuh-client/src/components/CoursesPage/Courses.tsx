import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import {useState, useEffect} from "react";
import { courses } from './data/courses';
import './Courses.css';

function Courses(){
    const [coursenames, setCoursenames] = useState([] as any);

useEffect (()=>{
    loadCourses();
},[]);

const loadCourses = () =>{
    const courseNames : any = [];
    courses.map((course: any)=>{
        const courseName = course.sourceSubject+ " " + course.sourceCatalogNumber + ": "+ course.sourceCourseName;
       courseNames.push(courseName);
    })
  courseNames.sort();
  setCoursenames(courseNames);
}

const loadSearch = (e : any) =>{
    console.log(e);
   const value = e.toLowerCase();
   const relevantcourseNames : any = [];

   courses.forEach((course: any)=>{
      const courseName = course.sourceSubject+ " " + course.sourceCatalogNumber + ": "+ course.sourceCourseName;

      if (courseName.toLowerCase().includes(value)){
        relevantcourseNames.push(courseName);
      }
   })
   relevantcourseNames.sort();
   setCoursenames(relevantcourseNames);
   
}
    

    return( 
    <div className="CoursesPage-contents">
     
     <div className="search-wrapper">
    <input type="search" id="courses-search" data-search placeholder="🔍 Search courses"
     onChange = {(event)=>{
        loadSearch(event.target.value);
     }}/>
     </div>
      {
          coursenames.map((coursename : any)=>{
            const courseURLPATH = "/courses/"+ (coursename).replaceAll(" ", "");
            return(
                <div>
                   <Link to = {courseURLPATH}>{coursename}</Link>
                </div>
            )
          })
      }
    </div>
    );
}

export default Courses