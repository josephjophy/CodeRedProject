import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import StaticRouter from 'react-router'
import './App.css';
import NavBar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage';
import Instructors from './components/InstructorsPage/Instructors'
import Courses from './components/CoursesPage/Courses'
import InstructorReviewPage from './components/InstructorsReviewPage/InstructorReviewPage'
import CourseReviewPage from './components/CourseReviewPage/CourseReviewPage';
import { instructors } from './components/InstructorsPage/data/instructors';
import { courses } from './components/CoursesPage/data/courses';
import { useEffect, useState } from 'react';


function App() {
const [instructorRoutes, setInstructorRoutes] = useState([] as any);
const [courseRoutes, setcourseRoutes] = useState([] as any);

useEffect(()=>{
  loadInstructorRoutes();
  loadCourseRoutes();
},[]);

const loadInstructorRoutes = () =>{
  var count = 1;
  const instructorRoutes : any = [];
  instructors.map((instructor : any)=>{
    const instructorName = instructor.sourceLastName + ", " + instructor.sourceFirstName;
    const instructorURLPath = "/instructors/"+instructorName.replaceAll(" ","");
    instructorRoutes.push( <Route path = {instructorURLPath} element= {<InstructorReviewPage lastName = {instructor.sourceLastName} firstName = {instructor.sourceFirstName}/>}/>);
    count++;
  });
   setInstructorRoutes(instructorRoutes);
}

const loadCourseRoutes = () =>{
     const courseRoutes : any = [];
     courses.map((course : any) =>{

       const courseURLPATH = "/courses/"+ (course.sourceSubject + " " + course.sourceCatalogNumber + ": "+ course.sourceCourseName).replaceAll(" ", "");

       courseRoutes.push(<Route path = {courseURLPATH} element={<CourseReviewPage name={course.sourceCourseName} subject={course.sourceSubject} catalogNumber={course.sourceCatalogNumber} />}></Route>)
     });
     setcourseRoutes(courseRoutes);
}
console.log(process.env.RATEUH_MAIN_API);
  return (
    <div className = "App">
     <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/instructors" element = {<Instructors/>}/>
      <Route path = "/courses" element = {<Courses/>}/>
      {instructorRoutes}
      {courseRoutes}
     </Routes>
     </BrowserRouter>
     </div>
  );
}

export default App;
