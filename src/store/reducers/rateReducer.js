const initstate = {
    rate:null,
	msg:null,
	ready:false
}

const rateReducer = (state = initstate, action) =>{

    switch(action.type){
		case 'rate_Error' :
			return{
                ...state,
                rate:null,
                msg:action.err,
                ready:null
            }
        case 'rate_Successful':
            return{
                ...state,
                rate:action.rate.rate,
                msg:action.rate.message,
                ready:true
                }
		default:
			return state;
	}
}

export default rateReducer;