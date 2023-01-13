import React, { useState, useEffect } from "react"
import './CourseReviewPage.css'
import CourseReviewForm from "./page-components/CourseReviewForm"
import CourseReviews from "./page-components/CourseReviews"
import CourseSummary from "./page-components/CourseSummary"
import CourseGradeDistributionGraph from "./page-components/CourseGradeDistributionGraph"
import axios from "axios"


interface courseProperties{
    name: String,
    subject: String,
    catalogNumber: String
}
function CourseReviewPage(course : courseProperties){

    //information we want
    //1.) Grade distribution
    //2.) Avg GPA  //DONE
    //3.) Course Description
    //4.) Similar courses
    //5.) Teachers who teach this courses //DONE
    //6.) Get reviews  //DONE
    //7.) course history
    
    // <CourseGradeDistributionGraph name = {course.name} subject = {course.subject} catalogNumber = {course.catalogNumber}/>
     return(
        <div className = "coursereview-page">
           
            <div className = "review-page-header">

                <span >{course.name} </span>
                <span> <CourseReviewForm name = {course.name} subject = {course.subject} catalogNumber = {course.catalogNumber}/> </span>
                <div>{course.subject} {course.catalogNumber}</div>
            </div>

            <CourseSummary name = {course.name} subject = {course.subject} catalogNumber = {course.catalogNumber}/>
            
            <CourseReviews name = {course.name} subject = {course.subject} catalogNumber = {course.catalogNumber} />


        </div>
     );
}


export default CourseReviewPage