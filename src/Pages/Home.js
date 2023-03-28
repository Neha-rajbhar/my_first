
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import style from './Home.module.css';


export default function Home() {



    return (
        <>
            <section className={style.mainHome}>
                <Navbar />
                <div className={style.second}>
                    <h2 className={style.h22}>About Us</h2>
                    <hr className={style.line} />
                </div>
                <div className={style.imageSection}>
                    <img src="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg" style={{ width: '250px', height: '250px' }} alt="loading" />
                    <p className={style.para}>Age : 25</p>
                    <p className={style.para}>Location : India</p>
                </div>
                <div className={style.thirdSection}>

                    <p className={style.detail}>Mat semion</p>
                    <p className={style.detail}>write about yourself.70-80 words</p>
                    <div className={style.four}>
                        <div>
                            <p>What are your skills?</p>
                            <p>write here !!!</p>
                        </div>
                        <div>
                            <p>What are your skills?</p>
                            <p>write here !!!</p>
                        </div>
                        <div>
                            <p>What are your skills?</p>
                            <p>write here !!!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}