import React from 'react';
import './Input.css'

function Heading(props){
    const heading=props.headings;
    return(
     <h1>{heading}</h1>
    );
}
export default Heading;