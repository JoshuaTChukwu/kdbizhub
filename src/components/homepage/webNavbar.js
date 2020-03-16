import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/webnav.css'

const WebNavbar = () => {
	
	return (
		<nav className="web flex_row web_nav">
			<ul>
				<li>
					<a href="/#header"><img src={require('./images/Logo.png')} alt="Logo" />  </a>  
				</li>
			</ul>

			<ul className=" flex_row">
				<li>
					<a href="/#products">Products</a>
				</li>
				<li>
					<a href="/#about">About</a>
				</li>
				<li>
					<a href="/#rates">Rates</a>
				</li>
			</ul>

			<ul className=" flex_row">
				<li>
					<NavLink to="/signup">Sign Up</NavLink>
				</li>
				<li>
					<NavLink to="/signin">Sign In</NavLink>
				</li>
			</ul>
   	 	</nav>		
	);
}

export default WebNavbar;
