import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import style from './Login.module.css';

export default function Login() {
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
                <h1 className={style.head}> Login Here !!!</h1>
                <div className={style.form}>

                    <input type="text" className={style.u} onChange={(e) => setName(e.target.value)} placeholder="Enter username" />
                    <br />
                    <br />
                    <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Enter Password" />
                    <br />
                    <br />

                    <button className={style.btn}>Submit</button>
                    <br />
                    <br />
                    <Link to="/register" style={sty} >Don't have an Account? Register</Link>
                    <br />
                    <br />


                </div>
            </div>

        </>
    )
}

