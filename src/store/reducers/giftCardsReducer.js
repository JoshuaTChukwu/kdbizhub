const initstate = {
    giftCards:[],
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

const giftCardReducer = (state = initstate, action) =>{

    switch(action.type){
		case 'gift_Error' :
			return{
                ...state,
                giftCards:null,
                paging:{
                    first:null,
                    next:null,
                    back:null,
                    last:null
                },
                Err:action.err,
                ready:true
            }
        case 'gift_Successful':
            return{
                ...state,
				giftCards:action.products.records,
                paging:action.products.paging,
                objects:action.products.objects,
				Err:null,
                ready:true
                }
		default:
			return state;
	}
}

export default giftCardReducer;