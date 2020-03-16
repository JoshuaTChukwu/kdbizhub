import React, {Component} from 'react';
import queryString from 'query-string';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './css/signin.css'

class UpdatePassword extends Component {
	state ={
		key:"1d4228f22fb41420639ca9084bacef85",
		password:'',
		confPassword:'',
		success:{
			display:'none'
		},
		check_password:'',
		check_confPassword:''
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
			this.state.check_password==="Strong"&&
			this.state.check_confpassword ==="Passwords Match"
		){
			var email_send;
			var link_send;
			this.setState({
				response: "Verifying"
			})
			const  query = this.props.location.search;
			const email = queryString.parse(query);
			email_send = email.email;
			link_send = email.link;
		axios.post('https://kdbizhubpi.online/api/users/changepassword.php', {
			email:email_send,
			link:link_send,
			key:this.state.key,
			password:this.state.password
		}).then(res=>{
			this.setState({
				response:res.data.message
				});
				if(res.data.message ==="Password Changed Successfully"){
					this.setState({
						success :{
						display:'flex'
					}
						});
				}
			})
		}
		}
  render(){
	const  query = this.props.location.search;
	const email = queryString.parse(query);
	if(email.email && email.link){
	}else{
		this.props.history.push('/signup')
	}
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

	  const style = {
        color:'red'
    }
	return (
		<section className="signup">
        <div className="success" style={this.state.success}>
			<div>
				<img src={require("./images/done.png")} alt="verify" className="verify_img" />
				<p>Password Changed Successfully <br /> <Link to='/signin'> Sign In</Link></p>

			</div>
			</div>
            <h1>Reset Password</h1>
            <p>
                Update Password Below
            </p>
            <form onSubmit={this.handleSubmit} method="POST">
				<input type="password" name="password" id="password" placeholder="New Password" onChange={this.handlePassword} required/>
				<p style={password_style}>{this.state.check_password}</p>
                <input type="password" name="confPassword" placeholder="Confim Password" id="confPassword" onChange={this.handleConfPassword} required />
				<p style={confpassword_style}>{this.state.check_confpassword}</p>
                <p style={style}>{this.state.response}</p>
                <input type="submit" value="Change" />
            </form>
            <p><Link to="/signup"> Sign Up </Link> || <Link to="/signin"> Sign In </Link> </p>
		</section>
	);
  }
}

export default UpdatePassword;
