import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";


import style from './Register.module.css';

export default function Register() {
    let [name, setName] = useState("");
    let [pass, setPass] = useState("");
    let [email, setEmail] = useState("");
    

    const sty = {
        textDecoration: 'none',
        color: 'orange',
        cursor: 'pointer',
        fontSize: '20px',
        marginTop: '60px',
        fontWeight: 'bold',

    }


    return (
        <>
            <div className={style.mainDiv}>
                <Navbar />
                <h1 className={style.head}> Register Here !!!</h1>
                <div className={style.form}>
                    <input type="email" className={style.u} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                    <br />
                    <br />
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter username" />
                    <br />
                    <br />

                    <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />
                    <br />
                    <br />
                    <button className={style.btn}>Submit</button>
                    <br />
                    <br />
                    <Link to="/login" style={sty}>Already Registerd</Link>

                </div>
            </div>
         
        </>
    )
}