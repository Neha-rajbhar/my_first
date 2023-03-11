import {useState} from 'react';



export default function Second(){

    let [count,setCount]=useState(0);

    function Add(){
        setCount(count+1);
    }

    function Sub(){
        setCount(count-1);
    }

return(
    <>
    <h3 style={{color:"red",fontSize:"25px"}}>{count}</h3>
<button onClick={Add}>Increase count</button>

<button onClick={Sub}>Decrease count</button>
</>
);
}