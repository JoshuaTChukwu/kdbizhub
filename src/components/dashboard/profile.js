import React, { Component } from 'react'
import {connect} from 'react-redux';
import {editProfile} from '../../store/actions/authActions';

class Profile extends Component {

    state={
        phone_number:this.props.user.phone_number,
        user_id:this.props.user.user_id,
        username:this.props.user.username,
        password:'',
        confPassword:'',
        check_password:'',
        check_confPassword:'',
        key:'1d4228f22fb41420639ca9084bacef85'
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

    handleChange=(e)=>{
		this.setState({
			[e.target.id]: e.target.value
		})
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
		if(
			this.state.check_password!=="Password is Weak"&&
			this.state.check_confpassword !=="Passwords don't Match"
		){
        this.props.editProfile(this.state);
		}
	}

		render(){
            const {user, err} = this.props;
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
                <section id="profile">
                    <div className="card">
                        <h2>{user.username}</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form">
                                <div>
                                    <h4>First Name</h4>
                                    <input type="text" value={user.first_name} disabled />
                                </div>
                                <div>
                                    <h4>Last Name</h4>
                                    <input type="text" value={user.last_name} onChange={this.handleChange} disabled />
                                </div>
                                <div>
                                    <h4>Phone Number</h4>
                                    <input type="tel" id="phone_number" value={this.state.phone_number} onChange={this.handleChange} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <input type="email" id="email" value={user.email} onChange={this.handleChange} disabled />
                                </div>
                                <div>
                                    <h4>Password</h4>
                                    <input type="password"  id="password" onChange={this.handlePassword} />
                                    <p style={password_style}>{this.state.check_password}</p>
                                </div>
                                <div>
                                    <h4>Confirm Password</h4>
                                    <input type="password"  id="confPassword" onChange={this.handleConfPassword} />
                                    <p style={confpassword_style}>{this.state.check_confpassword}</p>
                                </div>

                               
            
                            </div>
                            {err?<p style={style}>{err}</p> : null}
                            <input type="submit" value="Edit Profile" />
                        </form>
                    </div>
                </section>
			);
	
		}
    }
    
    const matchDispatchToProps = (dispatch) =>{
        return{
            editProfile : (user)=> dispatch(editProfile(user))
        }
    }
    const matchStateToProps = (state)=>{
		return{
            user:state.auth.user,
            err:state.auth.err
		}
	}
	
export default  connect(matchStateToProps, matchDispatchToProps)(Profile);
	
