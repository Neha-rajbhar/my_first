import React, { useState } from 'react';
import styles from './MouseOver.module.css'; 

function MouseOver() {
  const [times, setTimes] = useState([]);
  function onmouseover(event){
    const name = event.target.getAttribute('dataname');
    setTimes([...times,{time: new Date().toLocaleString() ,eventmouse:'onMouseOver',id:name}]);

    
}
function onmouseout(event){
    // Define function logic here
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