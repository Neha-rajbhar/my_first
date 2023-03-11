import { useState } from "react";

export default function First(){
    let [name,setTest]=useState("");
    let [arr,setArr]=useState([]);

    function Text(e){
        setTest(e.target.value);
    }
function AddText(){
setArr([...arr,name]);
}
return(
    <>
    <br/>
    <input type="text" value={name} onChange={Text}/>
    <button onClick={AddText}>Add</button>
    <ul>
        {arr.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
    </ul>
    </>
)
}