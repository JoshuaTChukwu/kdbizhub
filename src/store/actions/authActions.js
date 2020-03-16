import axios from 'axios';
export const loginUser = (user) =>{
		return (dispatch, getState)=>{
				axios.post('https://kdbizhubpi.online/api/users/login.php', user)
		.then(res=>{
			if(res.data.message ==="Wrong Username and Password Combination"){
						dispatch({type:'login_Error', err:res.data.message});
			}else if(res.data.message ==="You Sent a Bad Request"){
						dispatch({type:'login_Error', err:res.data.message});
					}else{
						if(res.data.message ==="Successful login"){
							localStorage.setItem('kdbizhubjwt', res.data.jwt)
								dispatch({type:'Successful_Login', user:res.data});
						}else{
								dispatch({type:'Verify_User', user:res.data});
						}
					}
		}).catch(err=>{
				dispatch({type:'login_Error', err:"Connection Error"});
			})
	}
}


export const verifyUser = (user) =>{
	return (dispatch, getState)=>{
		axios.post('https://kdbizhubpi.online/api/users/verification.php', user)
			.then(res=>{
				if(res.data.message ==="Verified Successfully"){
					dispatch({type:'Verified_Successfully', user:res.data})
				}else{
					dispatch({type:'verify_Error', err:res.data.message})
				}
			}).catch(err=>{
				dispatch({type:'Error', err:"Api Error"});
			})
	}
}





export const regUser = (user) =>{
	return (dispatch, getState)=>{
		axios.post('https://kdbizhubpi.online/api/users/register.php', user)
		.then(res=>{
			if(res.data.message ==="Successfully Registered"){
				dispatch({type:'Successfully_Registered', user:user})
			}else{
				dispatch({type:'reg_Error', err:user.data.message});
			}
		}).catch(err=>{
				dispatch({type:'API_Error', err:"Network Error"});
			})
	}
}


export const logOut = (user) =>{
	return (dispatch, getState)=>{
		localStorage.clear()
		dispatch({type:'logout', err:"User Out"});
	}
}

export const editProfile = (user) =>{
	return (dispatch, getState)=>{
		axios.post('https://kdbizhubpi.online/api/users/update.php', user)
		.then(res=>{
			if(res.data.message ==="Profile Updated"){
				localStorage.setItem('kdbizhubjwt', res.data.jwt)
					dispatch({type:'profile_Updated', user:res.data});
			}else{
				dispatch({type:'update_error', err:user.data.message});
			}
		}).catch(err=>{
				dispatch({type:'API_Error', err:"Network Error"});
			})
	}
}


