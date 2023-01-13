import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './CourseReviews.css'

interface courseProperties{
    name: String,
    subject: String,
    catalogNumber: String
}

function CourseReviews(course : courseProperties) {

    const [reviews, setReviews] = useState([] as any);

    useEffect(()=>{
        loadReviews();
    },[])

    //gets review for the course
    const loadReviews = async() =>{
        const response = await axios.get(`${process.env.REACT_APP_RATEUH_MAIN_API}/courseReviews/${course.name}/${course.subject}/${course.catalogNumber}`);
        //response.data typically will be in the following format:
        // array of  {"review": { "rating": Number, "message":  String, "date": date},  "_id": String,"name": String,"SUBJECT": String, "CATALOGNBR: String, " "__v": Number}
        console.log(response.data);
        setReviews(response.data);
    }

  if (reviews.length == 0){

    return (

      <div className = "review-section">
          <div className = "review-section-header">Reviews</div>
              <div className = "review-section-reviews">
              Be the first to review {course.name}
              </div>
      </div>
      
    );

  }

  else{
  return (

    <div className = "review-section">
        <div className = "review-section-header">Reviews</div>
            <div className = "review-section-reviews">
            {
            reviews.map((review : any)=>{
                
                return(
                    <Card className = "review-card" style={{ width: '35rem' }}>
      <Card.Body>
        <Card.Title>Rating: {review.review.rating}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Posted on {review.date}</Card.Subtitle>
        <Card.Text>
          {review.review.message}
        </Card.Text>
      </Card.Body>
    </Card>
                );
            })
            }
            </div>
    </div>
    
  );
  }
}

export default CourseReviews