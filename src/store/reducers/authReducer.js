const initstate = {
	err:null,
	loginVerify:null,
	verify: null,
	user:{
		email:null,
		username:null,
		message:null,
	},
	apiErr:null,
	registering:false
}
const authReducer = (state = initstate, action) =>{
	switch(action.type){
		case 'API_Error' :
			return{
				...state,
				err:action.err,
				verify: null,
				user:{
					email:null,
					message:null,
				},
				apiErr:null
			}
			case 'update_error' :
				return{
					...state,
					err:action.err,
					verify: null,
					user:{
						email:null,
						message:null,
					},
					apiErr:null
				}
			
			case 'logout' :
				return{
					...state,
					err:null,
					verify: null,
					user:{
						email:null,
						message:null,
					},
					apiErr:null
				}
		case 'login_Error':
			return{
				...state,
				err:action.err,
				user:{
					email:null,
					message:null,
				},
			}

			case 'jwt_error':
				return{
					...state,
					err:action.err,
					user:{
						email:null,
						message:null,
					},
				}
		case 'reg_Error':
			return{
				...state,
				err:action.err,
				user:{
					email:null,
					message:null,
				},
				loginVerify:null
			}
			case 'profile_Updated' :
			return{
				...state,
				err:action.user.message,
				verify: true,
				user:action.user,
				apiErr:null
			}
		case 'Successfully_Registered' :
			return{
				...state,
				err:null,
				verify: true,
				user:action.user,
				apiErr:null
			}
		case 'Verify_User' :
			return{
				...state,
				err:null,
				user:action.user,
				loginVerify:'verify user'
			}
		case 'Successful_Login' :

			return{
				...state,
				err:null,
				user:action.user,
				loginVerify:null,
			}

			case 'jwt_success' :
				return{
					...state,
					err:null,
					user:action.user,
					loginVerify:null,
				}


		case 'Verified_Successfully' :
			return{
				...state,
				err:null,
				loginVerify: null,
				user:action.user
			}
		case 'verify_Error' :
			return{
				...state,
				err:action.err ,
				loginVerify: null,
				user:{
					email:null,
					message:null
				}
			}
		default:
			return state;
	}
}

export default authReducer;