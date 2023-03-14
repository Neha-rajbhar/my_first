
import { useState } from "react";



export default function Todo(){
let [input,setInput]=useState("");
let [arr,setArr]=useState([]);

let [count,setCount]=useState(0);

function TakeValue(e){
setInput(e.target.value);
}

function Submit(){
    if(input !== " "){
        const newText = [...arr, { item: input, completed: false }];
        setArr(newText);
        console.log(newText);
        setInput(" ");
      setCount(count+1);
    }
  
}

function Heading(){
  return  <h1>Pending Task ({count})</h1>
}


function Complete(i){

const newtext = [...arr];
console.log(newtext[i]);
if (newtext[i].completed == false) {
    newtext[i].completed = true
    setArr(newtext);
    count > 0 && setCount(count - 1);
}
setArr(newtext);
console.log(newtext)

}

function Remove(i){
    const newtext = [...arr];
    if (!newtext[i].completed) {
        setCount(count - 1);
    }
    newtext.splice(i, 1);
    setArr(newtext);

}
    return(
        <>
    
    <div className="container">
    {<Heading/>}
    
        {arr.map((item,i)=>{
            return <div className="Single-data" key={i}>
                <div>
                {item.completed ? (
                <s>{item.item}</s>
            ) : (
                item.item
            )}
            
            <button id="add" onClick={()=>Complete(i)}>complete</button>
            <button className="icon" id="icons" onClick={()=>Remove(i)}><i>X</i></button>
            </div>
            </div>
        })}
<div className="input-part">
<input type="text" value={input} onChange={TakeValue}/>
    <button onClick={Submit}>Add</button>
    </div>
        </div> 

       
        </>
    )
}