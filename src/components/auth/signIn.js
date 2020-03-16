import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../store/actions/authActions';
import './css/signin.css'


class SignIn extends Component {
	state={
		username:'',
		password:'',
		key:'1d4228f22fb41420639ca9084bacef85',
		response:''
	}

	handleChange=(e)=>{
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		this.setState({
			response: "Logging In"
		})
		this.props.loginUser(this.state);
	}
	render(){

		const style = {
			color:'red'
		}
		const {loginError, loginVerify, user} = this.props;
		if(loginVerify){
			return <Redirect to={'/verify/'+user.email} />
		}else if(user.jwt){
			return <Redirect to='/dashboard' />
		}else{
	return (
		<div className="homepageApp">
			<section className="signin">
								<h1>Sign In</h1>
								<form onSubmit={this.handleSubmit}>
										<input  type="text" name="username" id="username" placeholder="Username"  required onChange={this.handleChange}/>
										
										<input type="password" name="password" id="password" placeholder="Password"  onChange={this.handleChange} required/>
										{loginError?<p style={style}>{loginError}</p> : null}
										<input type="submit" value="Sign In" />
								</form>
								<img src={require("./images/Group 290.png")} alt="illustration" />
								<p> <Link to="/forgotpassword">Forgot Password?</Link> </p>
								<p>New User? <Link to="/signup">Sign Up</Link> </p>
								<p>
										Your most preferred way to trade 
										<br />
										Buy . Sell . Repeat
								</p>
						</section>
		</div>
	);
	}
	}
}
const matchDispatchToProps = (dispatch) =>{
	return{
		loginUser : (user)=> dispatch(loginUser(user))
	}
}
const matchStateToProps = (state)=>{
	return{
		loginError:state.auth.err,
		loginVerify:state.auth.loginVerify,
		user:state.auth.user
	}
}

export default connect(matchStateToProps, matchDispatchToProps)(SignIn);
