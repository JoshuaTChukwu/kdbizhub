import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {regUser} from '../../store/actions/authActions';
import './css/signin.css'

class SignUp extends Component {
	state={
		username:'',
		email:'',
		password:'',
		confPassword:'',
		phone_number:'',
		response:'',
		key:"1d4228f22fb41420639ca9084bacef85",
		check_username:'',
		check_password:'',
		check_email:'',
		check_confPassword:'',
		last_name:'',
		first_name:''
	  }
	
	  handleChange=(e)=>{
		this.setState({
		  [e.target.id]: e.target.value
		})
		
	  }

	  handleUsername=(e)=>{
		this.setState({
		  [e.target.id]: e.target.value
		})
		  axios.post('https://kdbizhubpi.online/api/users/username.php', {
			  username:e.target.value,
			  key:'1d4228f22fb41420639ca9084bacef85'
		  })
		.then(res=>{
			this.setState({
				check_username:res.data.message
			})
		})
		
	  }

	  handleEmail=(e)=>{
		this.setState({
		  [e.target.id]: e.target.value
		})
		  axios.post('https://kdbizhubpi.online/api/users/email.php', {
			  email:e.target.value,
			  key:'1d4228f22fb41420639ca9084bacef85'
		  })
		.then(res=>{
			this.setState({
				check_email:res.data.message
			})
		})
		
	  }

	  handlePassword=(e)=>{
		this.setState({
		  [e.target.id]: e.target.value
		})
		if(e.target.value.length < 6){
			this.setState({
				check_password:"Password is Weak"
			})
		}else{
			this.setState({
				check_password:"Strong"
			})
		}

		if(e.target.value === this.state.confpassword){
			this.setState({
				check_confpassword:"Passwords Match"
			})
		}else{
			this.setState({
				check_confpassword:"Passwords don't Match"
			})
		}
		
	  }
	  handleConfPassword=(e)=>{
		this.setState({
		  [e.target.id]: e.target.value
		})
		if(e.target.value === this.state.password){
			this.setState({
				check_confpassword:"Passwords Match"
			})
		}else{
			this.setState({
				check_confpassword:"Passwords don't Match"
			})
		}

	  }
	  
	handleSubmit=(e)=>{
		e.preventDefault();
		if(
			this.state.check_username === "Username is Available"&&
			this.state.check_email === "Email is Available"&&
			this.state.check_password==="Strong"&&
			this.state.check_confpassword ==="Passwords Match"
		){
			this.props.regUser(this.state);
		}
	}
  render(){
	  const {email, regError} = this.props;
	  if(email){
		return <Redirect to={'/verify/'+email} />
	  }
	  const username_style = this.state.check_username === "Username is Available"? ({
		  color:'green'
	  }):({
		  color:'red'
	  }) ;

	  
	  const confpassword_style = this.state.check_confpassword === "Passwords Match"? ({
		color:'green'
	}):({
		color:'red'
	}) ;
	  const password_style = this.state.check_password === "Strong"? ({
		  color:'green'
	  }):({
		  color:'red'
	  }) ;
	  const email_style = this.state.check_email === "Email is Available"? ({
		  color:'green'
	  }):({
		  color:'red'
	  }) ;
	  const style = {
		  color:'red'
	  }
	return (
		<div className="homepageApp">
		<section className="signup">
			<h1>Sign Up</h1>
			<form onSubmit={this.handleSubmit} method="POST">
				<input type="text" name="username" id="username" placeholder="Username" onChange={this.handleUsername} required/>
				<p style={username_style}>{this.state.check_username}</p>
				<input type="text" name="first_name" id="first_name" placeholder="First Name" onChange={this.handleChange} required/>
				<input type="text" name="last_name" id="last_name" placeholder="Last Name" onChange={this.handleChange} required/>
				<input type="email" name="email" id="email" placeholder="Email" onChange={this.handleEmail}  required/>
				<p style={email_style}>{this.state.check_email}</p>
				<input type="password" name="password" id="password" placeholder="Password" onChange={this.handlePassword}  required/>
				<p style={password_style}>{this.state.check_password}</p>
				<input type="password" name="confPassword" id="confPassword" placeholder="Confirm Password" onChange={this.handleConfPassword}  required/>
				<p style={confpassword_style}>{this.state.check_confpassword}</p>
				<input type="tel" name="phone_number" id="phone_number" placeholder="Phone Number" onChange={this.handleChange}  required/>
				<p>By Registering, you accept our <Link to="/terms"> terms & conditions</Link></p>
				{regError?<p style={style}>{regError}</p> : null}
				<input type="submit" value="Sign Up" style={this.state.button_style} />
			</form>
			<img src={require("./images/Group 310.png")} alt="" />
			<p>Already have an account? <a href="/signin">Sign In</a> </p>
		</section>
		</div>
	);

  }
}

const matchDispatchToProps = (dispatch) =>{
	return{
	  regUser : (user)=> dispatch(regUser(user))
	}
  }

const matchStateToProps = (state)=>{
	return{
	  email:state.auth.user.email,
	  regError:state.auth.err
	}
  }
  
  export default connect(matchStateToProps, matchDispatchToProps)(SignUp);
  
