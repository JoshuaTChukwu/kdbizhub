import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {verifyUser} from '../../store/actions/authActions';
import './css/signin.css'

class Verify extends Component {
	state ={
		email:this.props.match.params.email,
		verification_code:'',
		check_email:'',
		key:"1d4228f22fb41420639ca9084bacef85",
		resend_response:null
	}

	handleChange=(e)=>{
		this.setState({
		  [e.target.id]: e.target.value
		})
	  }

	  resendVerify=()=>{
		this.setState({
			resend_response:null
			});
		axios.post('https://kdbizhubpi.online/api/users/resendverification.php', this.state)
			.then(res=>{
			this.setState({
				resend_response:res.data.message
				});
			}) 
	  }

	handleSubmit=(e)=>{
		this.setState({
			response: "Verifying"
		})
		e.preventDefault();
		this.props.verifyUser(this.state);
	}
  render(){
	const {verifyError, user} = this.props;

	var success = {
		display:"none"
	}
	if(user.message==="Verified Successfully"){
		 success = {
			 display:"flex"
		 }
	  }

	  if(!this.props.match.params.email){
		return <Redirect to='/' /> 
	  }


    if(user.jwt){
      return <Redirect to='/dashboard' />
	}
	const style = {
		color:'red'
	}

	return (
		<div className="homepageApp">
		<section className="signup">
			<div className="success" style={success}>
			<div>
				<img src={require("./images/done.png")} alt="verify" className="verify_img" />
				<p>Verified Successfully <br /> <Link to='/signin'> Sign In</Link></p>
			</div>
			</div>
            <img src={require("./images/done.png")} alt="verify" className="verify_img" />
            <h1>Verify Email</h1>
            <p>
                A verification number has been sent to {this.state.email}, <br />
                input the number below <br />
                Didn't Receive it? 
                <button onClick={this.resendVerify}> Resend </button> 
				{this.state.resend_response? <br />: null }
				{this.state.resend_response? this.state.resend_response : null }
            </p>
            <form onSubmit={this.handleSubmit} method="POST">
				<input type="number" name="verification" id="verification_code" onChange={this.handleChange} required/>
				{verifyError?<p style={style}>{verifyError}</p> : null}
				<input type="submit" value="Verify" />
            </form>
            <p><Link to="/signup"> Sign Up </Link> || <Link to="/signin"> Sign In </Link> </p>
		</section>
		</div>
	);
  }
}

const matchDispatchToProps=(dispatch) =>{
	return{
		verifyUser:(user)=>dispatch(verifyUser(user))
	}
}


const matchStateToProps = (state)=>{
	return{
		verifyError:state.auth.err,
		user:state.auth.user
	}
  }
export default connect(matchStateToProps, matchDispatchToProps)(Verify);
