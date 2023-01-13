import React from "react";
import axios from "axios";
import {Card} from 'react-bootstrap';
import {useState,useEffect} from "react";
import InstructorSummary from "./page-components/InstructorSummary";
import InstructorReviewForm from "./page-components/InstructorReviewForm";
import InstructorReviews from "./page-components/InstructorReviews";
import './InstructorReviewPage.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface instructorProperties{
    lastName: String,
    firstName: String,
}

function InstructorReviewPage( instructor : instructorProperties){
    
   
    //information we want:
    // 1.) Grade distribution for this professor in all courses taught %A, %B, %C, etc.
    // 2.) Distinct courses taught //DONE 
    // 3.) Similar instructors (instructors who teach similar courses)
    // 4.) Avg. GPA //DONE
    // 6.) Instructor reviews  //DONE
    // 7.) Class history

   
    return (
        <div className = "instructorreview-page">


            <div className = "review-page-header"> 
            <span>{instructor.lastName}, {instructor.firstName}</span>
            <span> <InstructorReviewForm lastName = {instructor.lastName} firstName = {instructor.firstName}/> </span> 
            </div>
            
           
            <InstructorSummary lastName = {instructor.lastName} firstName = {instructor.firstName}/>

             
            <InstructorReviews lastName = {instructor.lastName} firstName = {instructor.firstName}/>
            
        </div>
    )
  
}

export default InstructorReviewPage
