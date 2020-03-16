import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './css/mobnav.css'

class MobileNavbar extends Component {
    nav =()=>{
        var x = document.getElementById("mob_nav");
        var a = document.getElementById("div_one");
        var b = document.getElementById("div_two");
        var c = document.getElementById("div_three");
        if(x.style.display === "flex"){
          x.style.display = "none";
          a.style="transform:none;";
          c.style="transform:none;";
          b.style="opacity:1";
        }else{
          x.style.display = "flex";
          b.style="opacity:0";
          a.style="transform: rotate(-45deg) translate(-9px,0px);";
          c.style="transform: rotate(45deg) translate(-8px,-4px);";
        }
      }
      render(){
      
	return (
		<nav className="mobile mobile_nav">
            <ul>
                <li>
                    <a href="/#header"> <img src={require('./images/Logo.png')}  alt="Logo" /> </a>
                </li>
                <li onClick={this.nav}>
                    <div id="div_one">.</div>
                    <div  id="div_two">.</div>
                    <div  id="div_three">.</div>
                </li>
            </ul>
            <ul id="mob_nav">
                <li>
                    <Link onClick={this.nav}  to="/#products">Products</Link>
                </li>
                <li>
                    <Link onClick={this.nav} to="/#about">About</Link>
                </li>
                <li>
                    <Link onClick={this.nav} to="/#rates">Rates</Link>
                </li>
                <li>
                    <NavLink onClick={this.nav} to="/signup">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink onClick={this.nav} to="/signin">Sign In</NavLink>
                </li>
            </ul>  
        </nav>                                         		
	);
}
}

export default MobileNavbar;
