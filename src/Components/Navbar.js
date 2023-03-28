import { Link } from "react-router-dom";
import style from './Navbar.module.css';
import { BsPersonFill } from "react-icons/bs";
export default function Navbar() {

    const sty = {
        textDecoration: 'none',
        color: '#be2edd',
        cursor: 'pointer',

    }


    return (
        <>
            <div className={style.mainNav}>

                <div className={style.logo}>
                    <h1 className={style.maiLogo}>UI/UX Design</h1>
                </div>
                <div className={style.mainLink}>
                    <ul>
                        <li>  <Link to="/" style={sty}>Home</Link></li>
                        <li> <Link to="/about" style={sty}>About</Link></li>
                        <li> <Link to="/login" style={sty}>Login</Link></li>
                    </ul>

                </div>
                <div className={style.loginLink}>
                    <a href="#"><i className={style.icon}><BsPersonFill /></i></a>
                </div>
            </div>
        </>
    )
}