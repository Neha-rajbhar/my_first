import { useState } from "react"
import style from './guess.module.css';
export default function Guess() {

    const [check, setCheck] = useState(
        Math.floor((Math.random() * 10)) + 1
    )
    let [input, setValue] = useState("");
    let [message, setMessage] = useState(false);
    let [count, setCount] = useState(0);
    // let check=Math.floor((Math.random()*10))+1;
    console.log("number" + check);
    function handle() {
        setCount(count + 1);
        console.log(0 + 1);
        if (input < check) {
            alert("You guess a smaller number");
            setValue("");
        }
        else if (input > check) {
            alert("You guess a greater number");
            setValue("");
        }

        if (input == check) {

            setMessage(!message);
            setCheck(Math.floor((Math.random() * 10)) + 1);

            // console.log("clicked");
            setValue("");
        }
    }


    function setHandle() {
        setCount(0);
        setMessage("");
        setValue("");
        setCheck(Math.floor((Math.random() * 10)) + 1);
    }
    return (
        <>
            <h1 className={style.h11}>You have to guess between 1 to 10</h1>
            <div className={style.mainDiv}>

                <input className={style.input} type="number" value={input} onChange={(e) => setValue(e.target.value)} />
                <button className={style.btn} onClick={handle} >Match Number</button>

            </div>
            <div className={style.second}>
                {message &&
                    <div> <h1 className={style.h1}>Congrates you guess it Right in  {count} Attempts</h1>
                        <button className={style.btnn} onClick={setHandle} >Restart</button>
                    </div>
                }
            </div>
        </>
    )
}