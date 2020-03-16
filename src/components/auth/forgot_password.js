import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './css/signin.css'

class ForgotPassword extends Component {
	state ={
		email:'',
		key:"1d4228f22fb41420639ca9084bacef85",
		success:{
			display:'none'
		}
	}

	handleChange=(e)=>{
		this.setState({
		  [e.target.id]: e.target.value
		})
	  }

	  handleSubmit=(e)=>{
		this.setState({
			response: "Checking Email"
		})
		e.preventDefault();
		axios.post('https://kdbizhubpi.online/api/users/resetpassword.php', this.state)
			.then(res=>{
			this.setState({
				response:res.data.message
				});
				if(res.data.message ==="Password Reset Link has Been Sent to Email"){
					this.setState({
						success :{
						display:'flex'
					}
						});
				}
			}) 
		}
  render(){
	const style = {
		color:'red'
	}
	return (
		<div className="homepageApp">
		<section className="signup">
            <div className="success" style={this.state.success}>
			<div>
				<img src={require("./images/done.png")} alt="verify" className="verify_img" />
				<p>{this.state.response} <br /> <Link to='/signin'> Back </Link></p>

			</div>
			</div>
			<h1>Forgot Password?</h1>
            <p>
                Fill in Email Below
            </p>
			<form onSubmit={this.handleSubmit} method="POST">
				<input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange}  required/>
				<p style={style}>{this.state.response}</p>
				<input type="submit" value="Send Password" style={this.state.button_style} />
			</form>
			<img src={require("./images/Group 310.png")} alt="" />
			<p><Link to="/signin">Sign In</Link> </p>
		</section>

		</div>
	);

  }
}

export default ForgotPassword;
