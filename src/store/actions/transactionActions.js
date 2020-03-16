import axios from 'axios';
export const getTransactions = (link, client) =>{
	return (dispatch, getState)=>{
        axios.post(link, client)
          .then(res=>{
			if(res.data.message){
                dispatch({type:'transaction_Errorr', err:res.data.message});
			}else{
                dispatch({type:'Got_Transactions_Successful', result:res.data});
			}
          }).catch(err=>{
            dispatch({type:'transaction_Errorr', err:"Network Error"});
          })
	}
}


export const sellGiftCard = (details) =>{
	return (dispatch, getState)=>{
        axios.post('https://kdbizhubpi.online/api/transactions/create.php', {
          client:details.client,
          product:details.product,
          amount:details.totalPay,
          key:details.key,
          type:details.type,
          transaction_description:{
            "hundreds":details.hundreds,
            "fiftys":details.fiftys,
            Total:details.totalPay,
            accountName:details.accountName,
            accountNumber:details.accountNumber,
            bankName:details.bankName,
        }
        })
          .then(res=>{
			if(res.data.message === "Transaction Added"){
                dispatch({type:'Transaction_Success', response:res.data.message});
			}else{
                dispatch({type:'Transaction_Error', response:res.data.message});
			}
          }).catch(err=>{
            dispatch({type:'TErrorr', err:"Network Error"});
          })
	}
}



export const sellCrypto = (details) =>{
	return (dispatch, getState)=>{
        axios.post('https://kdbizhubpi.online/api/transactions/create.php', {
          client:details.client,
          product:details.product,
          amount:details.naira,
          key:details.key,
          type:details.type,
          transaction_description:{ 
            dollars:details.dollars,
            naira:details.naira,
            crypto:details.crypto,
            accountName:details.accountName,
            accountNumber:details.accountNumber,
            bankName:details.bankName,
        }

        })
          .then(res=>{
			if(res.data.message === "Transaction Added"){
                dispatch({type:'Transaction_Success_c', response:res.data.message});
			}else{
                dispatch({type:'Transaction_Error_c', response:res.data.message});
			}
          }).catch(err=>{
            dispatch({type:'TErrorr_c', err:"Network Error"});
          })
	}
}


export const buyGiftCard = (details) =>{
	return (dispatch, getState)=>{
        axios.post('https://kdbizhubpi.online/api/transactions/create.php', {
          client:details.client,
          product:details.product,
          amount:details.naira / 100,
          key:details.key,
          type:details.type,
          transaction_description:{
            "hundreds":details.hundreds,
            "fiftys":details.fiftys,
            TotalInDollar:details.totalPay,
            Total:details.naira/ 100,
            payStack:details.email,
        }
        })
          .then(res=>{
			if(res.data.message === "Transaction Added"){
                dispatch({type:'Transaction_Success_bg', response:res.data.message});
                console.log(res.data.message)
			}else{
                dispatch({type:'Transaction_Error_bg', response:res.data.message});
                console.log(res.data.message)
			}
          }).catch(err=>{
            dispatch({type:'TErrorr_bg', err:"Network Error"});
            console.log("res.data.message")
          })
	}
}



export const buyCrypto = (details) =>{
	return (dispatch, getState)=>{
        axios.post('https://kdbizhubpi.online/api/transactions/create.php', {
          client:details.client,
          product:details.product,
          amount:details.naira,
          key:details.key,
          type:details.type,
          transaction_description:{
            "crypto":details.crypto,
            "dollars":details.dollars,
            naira:details.naira,
            payStack:details.email
        }
        })
          .then(res=>{
			if(res.data.message === "Transaction Added"){
                dispatch({type:'Transaction_Success_bc', response:res.data.message});
			}else{
                dispatch({type:'Transaction_Error_bc', response:res.data.message});
			}
          }).catch(err=>{
            dispatch({type:'TErrorr_bc', err:"Network Error"});
          })
	}
}


export const buyBTC = (details) =>{
	return (dispatch, getState)=>{
        axios.post('https://kdbizhubpi.online/api/transactions/create.php', {
          client:details.client,
          product:details.product,
          amount:details.naira,
          key:details.key,
          type:details.type,
          transaction_description:{
            "btc":details.crypto,
            "dollars":details.dollars,
            naira:details.naira,
            payStack:details.email
        }
        })
          .then(res=>{
			if(res.data.message === "Transaction Added"){
                dispatch({type:'Transaction_Success_bc', response:res.data.message});
			}else{
                dispatch({type:'Transaction_Error_bc', response:res.data.message});
			}
          }).catch(err=>{
            dispatch({type:'TErrorr_bc', err:"Network Error"});
          })
	}
}


export const buyPhone = (details) =>{
	return (dispatch, getState)=>{
        axios.post('https://kdbizhubpi.online/api/transactions/create.php', {
          client:details.client,
          product:details.product,
          amount:details.amount,
          key:details.key,
          type:details.type,
          transaction_description:{
            payStack:details.email,
            address:details.address
        }
        })
          .then(res=>{
			if(res.data.message === "Transaction Added"){
                dispatch({type:'Transaction_Success_bp', response:res.data.message});
                console.log(res.data.message)
			}else{
                dispatch({type:'Transaction_Error_bp', response:res.data.message});
                console.log(res.data.message)
			}
          }).catch(err=>{
            dispatch({type:'TErrorr_bp', err:"Network Error"});
            console.log("res.data.message")
          })
	}
}