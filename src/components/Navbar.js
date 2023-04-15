import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css';

function Navbar() {
  const sty = {
    textDecoration: 'none',
    color: '#be2edd',
    cursor: 'pointer',

}

  return (

<div className={style.mainNav}>

<div className={style.logo}>
    <h1 className={style.maiLogo}>Notes</h1>
</div>
<div className={style.mainLink}>
    <ul>
        <li>  <Link to="/" style={sty}>Home</Link></li>
        <li> <Link to="/create" style={sty}>Create</Link></li>
        <li> <Link to="/edit" style={sty}>Edit</Link></li>
        <li> <Link to="/delete" style={sty}>Delete</Link></li>
       
    </ul>

</div>

</div>
  )
}

export default Navbar
