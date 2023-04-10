import React from 'react'
import { useState } from 'react';
import styles from './Table.module.css';

function Table() {
    let random=Math.floor(Math.random()* 99) + 1 ;
    let [number, setNum] = useState(0);
    let multiplyer=[1,2,3,4,5,6,7,8,9,10];

    function handleGenerate(){
        setNum(random);
    }
  return (
    <div>
        <h1 className={styles.h1}>Random Number That is Generated {number}</h1>
      <button onClick={handleGenerate}>Generate no</button>
<div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>multiplyer</th>
            <th className={styles.th}>Product</th>
            
          </tr>
        </thead>
        <tbody>
          {multiplyer.map((element, index) => (
            <tr key={index}>
              <td className={styles.td}>{element}</td>
              <td className={styles.td}>{element*number}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Table
