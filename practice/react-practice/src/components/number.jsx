import React from 'react';
import { useParams } from 'react-router';

const NumberWord =()=>{
    const {id,color1,color2} = useParams();
    return(
        <>
        {
            // <h1>The number is: {isNaN(id)?"this is not a number" :id}</h1>
            isNaN(id)? <h2 style={{backgroundColor: color1, color: color2}}>The word is: {id}</h2> : <h2 style={{backgroundColor: color1, color: color2}}>The number is: {id}</h2>
        }
        </>
        
    )

}


export default NumberWord;