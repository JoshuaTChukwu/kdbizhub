import axios from 'axios';
export const getRate = (link) =>{
	return (dispatch, getState)=>{
        axios.post(link, {
            key: '1d4228f22fb41420639ca9084bacef85'
          })
          .then(res=>{
            dispatch({type:'rate_Successful', rate:res.data});
          }).catch(err=>{
            dispatch({type:'rate_Error', err:err});
          })
	}
}