const initstate = {
    cryptoCurrencies:[],
    paging:{
        first:null,
        next:null,
        back:null,
        last:null
    },
    objects:null,
	Err:null,
	ready:false
}

const cryptoCurrenciesReducer = (state = initstate, action) =>{

    switch(action.type){
		case 'Crypto_Error' :
			return{
                ...state,
                cryptoCurrencies:null,
                paging:{
                    first:null,
                    next:null,
                    back:null,
                    last:null
                },
                Err:action.err,
                ready:true
            }
        case 'Crypto_Successful':
            return{
                ...state,
				cryptoCurrencies:action.products.records,
                paging:action.products.paging,
                objects:action.products.objects,
				Err:null,
				ready:true
                }
		default:
			return state;
	}
}

export default cryptoCurrenciesReducer;