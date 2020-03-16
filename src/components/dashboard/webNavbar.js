import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './css/webnav.css'
import {connect} from 'react-redux';

class WebNavbar extends Component {
	render(){
	return (
        <nav className="webnav">
    
            <ul>
                <li>
                    <img src={require('./images/Logo.png')} alt="logo" />
                    <h2>{this.props.user.username}</h2>
                </li>
                <li>
                    <NavLink to="/dashboard">	
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 30 30">
                            <path id="ic_view_day_24px" d="M2,33H32V28H2ZM30.421,11.333H3.579A1.629,1.629,0,0,0,2,13V23a1.629,1.629,0,0,0,1.579,1.667H30.421A1.629,1.629,0,0,0,32,23V13A1.629,1.629,0,0,0,30.421,11.333ZM2,3V8H32V3Z" transform="translate(-2 -3)"/>
                        </svg>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/transactions">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 30 30">
                            <path id="ic_exit_to_app_24px" d="M14.817,23.983l2.35,2.35L25.5,18,17.167,9.667l-2.35,2.35,4.3,4.317H3v3.333H19.117ZM29.667,3H6.333A3.332,3.332,0,0,0,3,6.333V13H6.333V6.333H29.667V29.667H6.333V23H3v6.667A3.332,3.332,0,0,0,6.333,33H29.667A3.343,3.343,0,0,0,33,29.667V6.333A3.343,3.343,0,0,0,29.667,3Z" transform="translate(-3 -3)"/>
                        </svg>
                        Transactions
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 30 30">
                            <path id="ic_dashboard_24px" d="M3,19.667H16.333V3H3ZM3,33H16.333V23H3Zm16.667,0H33V16.333H19.667Zm0-30V13H33V3Z" transform="translate(-3 -3)" />
                        </svg>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 30 30">
                            <path id="ic_person_24px" d="M19,19a7.5,7.5,0,1,0-7.5-7.5A7.5,7.5,0,0,0,19,19Zm0,3.75c-5.006,0-15,2.513-15,7.5V34H34V30.25C34,25.263,24.006,22.75,19,22.75Z" transform="translate(-4 -4)"/>
                        </svg>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/logout">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 31.667 20">
                            <path id="ic_keyboard_return_24px" d="M30.333,7.667v6.667H8.383L14.35,8.35,12,6,2,16,12,26l2.35-2.35L8.383,17.667H33.667v-10Z" transform="translate(-2 -6)" />
                        </svg>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
        
	);
}
}
const matchStateToProps = (state)=>{
    return{
        user:state.auth.user
    }
}

export default  connect(matchStateToProps)(WebNavbar);
