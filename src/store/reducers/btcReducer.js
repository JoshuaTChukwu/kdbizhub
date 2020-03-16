const initstate = {
    USD:[],
	Err:null,
	ready:false
}

const btcReducer = (state = initstate, action) =>{

    switch(action.type){
		case 'BTC_Error' :
			return{
                ...state,
                USD:null,
                Err:action.err,
                ready:true
            }
        case 'BTC_Successful':
            return{
                ...state,
				USD:action.rate,
				Err:null,
                ready:true
                }
		default:
			return state;
	}
}

export default btcReducer;