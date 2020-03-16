const initstate = {
    transactions:[],
    paging:{
        first:null,
        next:null,
        back:null,
        last:null
    },
	Err:null,
	ready:false,
    transactionMessage:null,
    transactionMessagec:null,
    transactionMessage_bg:null,
    transactionMessage_bp:null,
    transactionMessage_bc:null
}

const TransactionReducer = (state = initstate, action) =>{

    switch(action.type){
		case 'transaction_Errorr' :
			return{
                ...state,
                transactions:null,
                paging:{
                    first:null,
                    next:null,
                    back:null,
                    last:null
                },
                Err:action.err,
                ready:true
            }
            
        case 'Got_Transactions_Successful':
            return{
                ...state,
				ready:true,
				transactions:action.result.records,
                paging:action.result.paging,
				Err:null,
                }

//dfefefrf


                
case 'Transaction_Success_bg':
    return{
        ...state,
        transactionMessage_bg:action.response
        }

case 'Transaction_Error_bg':
            return{
                ...state,
                transactionMessage_bg:action.response
                }

case 'TErrorr_bg':
                    return{
                        ...state,
                        transactionMessage_bg:action.err
                        }

                        //mkjhkjhljlik

                
                        case 'Transaction_Success_bp':
                            return{
                                ...state,
                                transactionMessage_bp:action.response
                                }
                        
                        case 'Transaction_Error_bp':
                                    return{
                                        ...state,
                                        transactionMessage_bp:action.response
                                        }
                        
                        case 'TErrorr_bp':
                                            return{
                                                ...state,
                                                transactionMessage_bp:action.err
                                                }

 //kjkhkjkn
 
 
                
case 'Transaction_Success_bc':
    return{
        ...state,
        transactionMessage_bc:action.response
        }

case 'Transaction_Error_bc':
            return{
                ...state,
                transactionMessage_bc:action.response
                }

case 'TErrorr_bc':
                    return{
                        ...state,
                        transactionMessage_bc:action.err
                        }
        case 'Transaction_Success':
            return{
                ...state,
				transactionMessage:action.response
                }

        case 'Transaction_Error':
                    return{
                        ...state,
                        transactionMessage:action.response
                        }

                case 'TErrorr':
                            return{
                                ...state,
                                transactionMessage:action.err
                                }



              
        case 'Transaction_Success_c':
            return{
                ...state,
				transactionMessagec:action.response,
                transactionMessage:null
                }

                case 'Transaction_Error_c':
                    return{
                        ...state,
                        transactionMessagec:action.response,
                        transactionMessage:null
                        }

                        case 'TErrorr_c':
                            return{
                                ...state,
                                transactionMessagec:action.err,
                                transactionMessage:null
                                }


                                
             
		default:
			return state;
	}
}

export default TransactionReducer;