import axios from 'axios';
export const getGiftCards = (link) =>{
	return (dispatch, getState)=>{
        axios.post(link, {
            key: '1d4228f22fb41420639ca9084bacef85'
          })
          .then(res=>{
            if(res.data.message === "Successfully Gotten Gift Cards"){
              dispatch({type:'gift_Successful', products:res.data});
            }else{
              dispatch({type:'gift_Error', err:res.data.message});
            }
          }).catch(err=>{
            dispatch({type:'gift_Error', err:"Network Error"});
          })
	}
}




