import React from 'react';
import './Button.css';

export default function Button(props){
    const buttonText=props.text;
return(
<button className='btn'>{buttonText}</button>
);
}