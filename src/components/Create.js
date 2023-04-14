import React, { useState } from 'react'

function Create() {
    let [texts,setText]=useState('');
    let [arr,setArr]=useState([]);

    function handleClick(){
           let newData=[...arr,{notes:texts}]
           setArr(newData);
           console.log(newData);
    }
  return (
    <div>
      create page
      <textarea type='text' value={texts} onChange={(e)=> setText(e.target.value)}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Create
