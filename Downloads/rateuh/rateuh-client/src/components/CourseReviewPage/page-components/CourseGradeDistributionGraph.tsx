import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import { Chart } from "react-google-charts";



//there might be a more readable way to build this graph
//TODO: *clean this code up to make more readable and simple to maintain
interface courseProperties{
    name: String,
    subject: String,
    catalogNumber: String
}

function CourseGradeDistributionGraph(course : courseProperties){

    const graphLegend = ["Semester"];
    var hashmap = new Map();

    useEffect(()=>{
        getRelatedProfessors();
        getClassHistory();
    },[]);

    const getRelatedProfessors = async() =>{
        const response = await axios.get(`${process.env.REACT_APP_RATEUH_MAIN_API}/classes/relatedInstructors/${course.name}/${course.subject}/${course.catalogNumber}`);
        //response.data typically will be in the following format:
        //array of {lastName: String , firstName: String}
        let count = 1;
        response.data.forEach((data: any)=>{
        graphLegend.push(data.lastName+", "+data.firstName);
        hashmap.set(data.lastName + ", " + data.firstName, count);
        count++;
        })
        console.log(graphLegend);
    }

    const data = [
     ['Year', 'Sales', 'Expenses'],
    ['2004',  null,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
    ];


    const [graph_data, setGraph_data] = useState<any>([graphLegend]);
      

    var termMap = new Map();
    const getClassHistory = async() =>{
        const response = await axios.get(`${process.env.REACT_APP_RATEUH_MAIN_API}/classes/${course.name}/${course.subject}/${course.catalogNumber}`);
        //response.data typically will be in the following format:
        const temp = [];
        let count = 1;
        response.data.forEach((data: any)=>{
        console.log(data.TERM);
        console.log(termMap.get(data.TERM));
        if (termMap.get(data.TERM) == undefined){
        console.log(data.TERM);
        let GPAValues = [];
        GPAValues.push(data.TERM);
        //make term be inserted only once
        termMap.set(data.TERM, count);
        count++;
        for (let i = 0; i < graphLegend.length-1; i++){
            GPAValues.push(null);
        }
        graph_data.push(GPAValues);
        }
        })

        response.data.forEach((data: any)=>{
        if (data.AVGGPA != undefined){
        graph_data[termMap.get(data.TERM)] [hashmap.get(data.INSTRLASTNAME + ", " + data.INSTRFIRSTNAME)] = Number(data.AVGGPA);
        }
        })
        console.log(data);
        console.log(graph_data);
    }
      
      const options = {
        chart: {
          title: `${course.subject} ${course.catalogNumber} GPA over time by Instructor`,
          xaxis: "Average GPA"
        },
      };

       return(
           <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={graph_data}
      options={options}
    />
       );
}

export default CourseGradeDistributionGraph