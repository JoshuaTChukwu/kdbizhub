import axios from 'axios';
export const getBtcRate = (link) =>{
	return (dispatch, getState)=>{
        axios.get("https://blockchain.info/ticker")
          .then(res=>{
              if(res.status === 200){
                dispatch({type:'BTC_Successful', rate:res.data.USD});
              }else{
                dispatch({type:'BTC_Error', err:"No Network"});
            }

          }).catch(err=>{
            dispatch({type:'BTC_Error', err:"No Network"});
          })
	}
}

