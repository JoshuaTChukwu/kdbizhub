import axios from 'axios';
export const getJWT = (jwt) =>{
    const jwtt = {
        jwt: localStorage.getItem('kdbizhubjwt')? localStorage.getItem('kdbizhubjwt'):false
	}
	return (dispatch, getState)=>{
		if(jwtt.jwt){
		axios.post('https://kdbizhubpi.online/api/validate_token.php', jwtt)
				.then(res=>{
					if(res.data.message ==="Access granted."){
						dispatch({type:'jwt_success', user:res.data.data});
					}else{
						dispatch({type:'jwt_error', err:res.data.message});
					}
				}).catch(err=>{
					dispatch({type:'jwt_error', err:"Auto Login Failed"});
				})
	}else{
		dispatch({type:'jwt_error', err:""});
	}
}
}