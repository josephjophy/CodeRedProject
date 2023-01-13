import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './InstructorReviews.css';

interface instructorProperties{
    lastName: String,
    firstName: String
}

function InstructorReviews(instructor : instructorProperties) {

    const [reviews, setReviews] = useState([] as any);

    useEffect(()=>{
        loadReviews();
    },[])

     //gets reviews for instructor
     const loadReviews = async() =>{
        const response = await axios.get(`${process.env.REACT_APP_RATEUH_MAIN_API}/instructorReviews/${instructor.lastName}/${instructor.firstName}`);
        //response.data typically will be in the following format:
        // array of  {"review": { "rating": Number, "message":  String},  "_id": String,"lastName": String,"firstName": String, "__v": Number}
        setReviews(response.data);
    }

  if (reviews.length == 0){
return(
    <div className = "review-section">
    <div className = "review-section-header">Reviews</div>
        <div className = "review-section-reviews">
        Be the first to review Professor {instructor.lastName}
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

export default InstructorReviews