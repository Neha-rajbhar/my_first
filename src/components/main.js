import styles from './main.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import {ImCross} from "react-icons/im";


export default function Main(){

    let [show,setShow]=useState(false);
   
    function handle(){
      
        setShow(!show);
       
    }
    
    return(
<>
<nav className={styles.mainNav}>
    <div className={styles.logo}>
<h2>
    <span>On</span>click
</h2>
    </div>
    <div className={show?styles.mobile:styles.mainLink}>
<ul>
    <li><a href="">Home</a></li>
    <li><a href="">Service</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Contact</a></li>
</ul>
    </div>

<div className={styles.loginLink}>
<ul className={styles.icon}>
    <li><a  href="">Login</a></li>
    <li><a  className={styles.box} href="">Signup</a></li>
    </ul>

    <div className={styles.hambergMenu}>
        <button onClick={handle}>
        {show ? (<i className={styles.time}><ImCross/></i>) :
            (<i className={styles.bar}><GiHamburgerMenu/></i>)
          }
            
        </button>

    </div>
</div>
</nav>
<section className={styles.text}>
    Welcome
    <br/>
    To The Website
</section>


</>
    );
}