const initstate = {
    phones:[],
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

const phonesReducer = (state = initstate, action) =>{

    switch(action.type){
		case 'Phone_Error' :
			return{
                ...state,
                phones:null,
                paging:{
                    first:null,
                    next:null,
                    back:null,
                    last:null
                },
                Err:action.err,
                ready:true
            }
        case 'Phone_Successful':
            return{
                ...state,
				phones:action.products.records,
                paging:action.products.paging,
                objects:action.products.objects,
				Err:null,
				ready:true
                }
		default:
			return state;
	}
}

export default phonesReducer;