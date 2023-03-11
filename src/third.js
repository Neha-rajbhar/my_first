import { useState } from "react";

export default function Third(){
 let [text,setText]=useState("Amit")

 function Change(){
    setText(text=="Amit"?"Ranjan":"Amit");
 }
    return(
        <>
        <h1>My name is {text}</h1>
<button onClick={Change}>Change Name</button>
</>
    );
}