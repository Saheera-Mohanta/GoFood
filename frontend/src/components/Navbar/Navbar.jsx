import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("Menu");

  return (
    <div className='navbar'>
        <div className="logo-box">
        <Link to='/'><img src={assets.icon_logo} alt='' className='logo' /></Link>
        <h1>Go<span>Food</span></h1>
        </div>
        <ul className="navbar-menu">
            <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=''/>
                <div className="navbar-search-icon">
                   <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                    <div className="dot">
                      
                    </div>
                   
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>
    </div>
  )
}

Navbar.propTypes = {

}

export default Navbar
