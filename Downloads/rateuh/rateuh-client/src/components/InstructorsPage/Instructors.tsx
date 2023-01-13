import React, { useEffect , useState} from 'react';
import {Link} from 'react-router-dom';
import {instructors} from './data/instructors';
import Axios from 'axios';
import './Instructors.css';





//cache data
function Instructors(){
   const [instructorNames,setinstructorNames] = useState([] as any);

   useEffect(()=>{
        loadInstructors();
    },[]);


const loadInstructors = () => {
   const instructorNames : any= [];
   instructors.map((instructor : any)=>{
     const instructorname = instructor.sourceLastName + ", " + instructor.sourceFirstName;
    instructorNames.push(instructorname);
   });
   instructorNames.sort();
    setinstructorNames(instructorNames);
}

//called when something is typed into the search bar 
const loadSearch = (e : any) => { 
   
   const value = e.toLowerCase();
   const relevantInstructors : any = [];
   instructors.forEach( (instructor : any) => {
      const instructorname = instructor.sourceLastName + ", " + instructor.sourceFirstName;

      if (instructorname.toLowerCase().includes(value)){
         relevantInstructors.push(instructorname);
      }
   });
   setinstructorNames(relevantInstructors);
}

var count = 1;
return(
<div className = "Faculty-contents">

<div className="search-wrapper">
    <input type="search" id="instructor-search" data-search placeholder="🔍 Search instructors"
     onChange = {(event)=>{
        loadSearch(event.target.value);
     }}/>
  </div>

{
   instructorNames.map((instructorname: any)=>{
      const linkName = ("/instructors/" + instructorname).replaceAll(" ", "");
     return(
      <div><Link to = {linkName}>{instructorname}</Link></div>
     )
     count++;
   })
}
</div>
);


}

export default Instructors;


