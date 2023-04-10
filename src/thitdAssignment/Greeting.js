import React from 'react'
import { useState } from 'react';
import styles from './Greeting.module.css'; 

function Greeting() {
    const [greet, setGreet] = useState(['Happy Birthday','Happy Anneversary', 'Good Morning','Good Afternoon','Good Evening'])
    const [currentNum, setCurrentNum] = useState(0)
    
    const handleGreet = () => {
        setCurrentNum(currentNum +1)
    }
     
  return (
    <div>
        <h1 style={{backgroundColor:'yellow'}} className={styles.greetings}>Greetings : {greet[currentNum]}</h1>
            <button onClick={handleGreet}>Greet</button>
    </div>
  )
}

export default Greeting

// {
//   "1": [
//     "create state ,store number , Generate table ",
//     "cerate a button , update state with random value, update table"
//   ],

//   "2": [
//     "create a h1",
//     "create a h2",
//     "create a div",
//     "manage state to track that when user mouse overed on the h1 and when mouse out with date and time",
//     "create a html table to show the logs.",
//     [
//       { "time": "", "eventName": "out or in" },
//       { "time": "", "eventName": "out or in" }
//     ]
//   ],
//   "3": [
//     "create an array with multiple greetings",
//     "create a button and handle click on button ",
//     "show the next greeting message on h1"
//   ]
// }