import { NavLink } from "react-router-dom";
import style from './navbar.module.css';

export default function Navbar() {
    return (
        <>

            <div className={style.mainNav}>

                <div className={style.logo}>
                    <h1 className={style.maiLogo}>Navbar</h1>
                </div>
                <div className={style.mainLink}>
                    <ul>
                        <li>   <NavLink className={style.navLink} to='/' >Home</NavLink></li>
                        <li>  <NavLink className={style.navLink} to='/about' >About</NavLink></li>
                        <li> <NavLink className={style.navLink} to='/login' >Login</NavLink></li>
                        <li> <NavLink className={style.navLink} to='/register' >Register</NavLink></li>
                    </ul>

                </div>

            </div>
        </>
    );
}