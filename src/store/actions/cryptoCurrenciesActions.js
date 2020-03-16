import axios from 'axios';
export const getCryptoCurrencies = (link) =>{
	return (dispatch, getState)=>{
        axios.post(link, {
            key: '1d4228f22fb41420639ca9084bacef85'
          })
          .then(res=>{
            if(res.data.message === "Successfully Gotten Crypto Currencies"){
              dispatch({type:'Crypto_Successful', products:res.data});
            }else{
              dispatch({type:'Crypto_Error', err:res.data.message});
            }
          }).catch(err=>{
            dispatch({type:'Crypto_Error', err:"No Network"});
          })
	}
}

