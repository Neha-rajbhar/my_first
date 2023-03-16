import { useState } from "react";
import './textarea.css';
export default function Texrarea() {
    let [input, setValue] = useState("");
    let count = input.length;

    function handle(e) {
        let text = e.target.value;
       

        if (text.length <= 100) {
            setValue(text);
        }
        else {

            alert("Reach maxium limit : 100");
        }

    }

    return (
        <div id="textMain">
            <h1>How was your day</h1>
            <textarea className="text" value={input} onChange={handle} cols='30' rows='5' placeholder="Enter the text here"></textarea>
            <p id="count" style={{ color: count == 100 ? 'green' : 'red' }}>{100-count}</p>
        </div>
    );
}