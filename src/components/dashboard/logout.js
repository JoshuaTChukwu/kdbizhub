import React, { Component } from 'react'
import {connect} from 'react-redux';
import {logOut} from '../../store/actions/authActions';
import './css/logout.css'

class Logout extends Component {

    logout=()=>{
        this.props.logOut()
    }

		render(){
			return (
                <section id="logout">
                    <div className="card">
                       <h4>Hello {this.props.user.username}, come back quickly</h4>
                       <button onClick={this.logout}>Sign Out</button>
                    </div>
                </section>
			);
	
		}
    }
    const matchDispatchToProps = (dispatch) =>{
        return{
            logOut : ()=> dispatch(logOut())
        }
    }
	
	const matchStateToProps = (state, props)=>{
		return{
			user:state.auth.user
		}
	}
	
export default  connect(matchStateToProps, matchDispatchToProps)(Logout);
	
