import { Link } from "react-router-dom";
import style from './Navbar.module.css';

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
                    <h1 className={style.maiLogo}>React</h1>
                </div>
                <div className={style.mainLink}>
                    <ul>
                        <li>  <Link to="/" style={sty}>Home</Link></li>
                        <li> <Link to="/contact" style={sty}>Contact</Link></li>
                       
                    </ul>

                </div>
                
            </div>
        </>
    )
}