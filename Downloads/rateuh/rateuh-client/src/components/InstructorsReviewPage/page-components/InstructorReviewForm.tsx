import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './InstructorReviewForm.css';
import axios from 'axios';

interface instructorProperties{
    lastName: String,
    firstName: String,
}

function InstructorReviewForm(instructor : instructorProperties) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  interface reviewProperties  {
    rating: string,
    message: string
}
   const [review, setReview] = useState<reviewProperties>({rating: '', message: ''});

   const addReview = async() =>{
    if (review.rating != "" && review.message != ""){
        const reviewData = {
            "lastName": instructor.lastName,
            "firstName": instructor.firstName,
            "date": new Date().toLocaleDateString(),
            "review":{
                "rating": review.rating,
                "message": review.message
            }
        }  
        await axios.post(`${process.env.REACT_APP_RATEUH_MAIN_API}/instructorReviews/addReview`, reviewData).then(()=>{
            handleClose();
            window.location.reload();
        });
    }
}

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Rate Professor {instructor.lastName} 
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rate Professor {instructor.lastName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center>
        <div>
        <span className = "rating-intro">Rating: </span>
          <select id = "rating" name = "rating" onChange = {(event)=>{ 
                review.rating = event.target.value;
            }}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
        </div>
        <div>
        <textarea className = "instructor-review-input" placeholder ="Write your review..." onChange={(event)=>{
          review.message = event.target.value;
        }}
          required
          />
        </div>
        </center>
         
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={addReview}> Submit Review </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
}

export default InstructorReviewForm