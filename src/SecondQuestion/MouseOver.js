import React, { useState } from 'react';
import styles from './MouseOver.module.css'; 

function MouseOver() {
  const [times, setTimes] = useState([]);
  function onmouseover(event){
    const name = event.target.getAttribute('dataname');
    setTimes([...times,{time: new Date().toLocaleString() ,eventmouse:'onMouseOver',id:name}]);

    
}
function onmouseout(event){
   
    const name = event.target.getAttribute('dataname');
    setTimes([...times,{time: new Date().toLocaleString() ,eventmouse:'onMouseOut',id:name}]);

  }
  return (
    <div>
      <h1 className={styles.h1} dataname="Header 1" onMouseOver={onmouseover} onMouseOut={onmouseout}>H1</h1>
      <h2 className={styles.h1} dataname="Header 2" onMouseOver={onmouseover} onMouseOut={onmouseout}>H2</h2>
    <div className={styles.h1} dataname="div" onMouseOver={onmouseover} onMouseOut={onmouseout}>Div Tag</div>
      <table className={styles.table}>
        <thead>
          <tr >
            <th className={styles.th}>Time</th>
            <th className={styles.th}>Event Name</th>
            <th className={styles.th}>Tag Name</th>
          </tr>
        </thead>
        <tbody>
          {times.map((log, index) => (
            <tr key={index}>
              <td className={styles.td}>{log.time}</td>
              <td className={styles.td}>{log.eventmouse}</td>
              <td className={styles.td}>{log.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MouseOver;


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