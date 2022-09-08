import React from 'react';
import { useParams } from "react-router";

const Languages =()=>{
    const {id} = useParams();


    return(
        <>
        <h3>The languages Ive learned in Coding Dojo</h3>
        <ol>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C#</li>
        </ol>
        <hr />
        <h4>The language you picked was: {isNaN(id)? "invalid language number": id}</h4>
        {
            isNaN(id)? <p>The language name is: {id}</p> : <p>The language number is: {id}</p>
        }
        </>

    )
};















export default Languages;