
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import style from './Home.module.css';


export default function Home() {



    return (
        <>
            <section className={style.mainHome}>
               
            <h1 className={style.h1}>Welcome to the home page</h1>
            </section>
        </>
    )
}