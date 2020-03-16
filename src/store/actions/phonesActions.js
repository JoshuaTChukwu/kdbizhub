import axios from 'axios';
export const getPhones = (link) =>{
	return (dispatch, getState)=>{
        axios.post(link, {
            key: '1d4228f22fb41420639ca9084bacef85'
          })
          .then(res=>{
            if(res.data.message === "Successfully Gotten Phones"){
              dispatch({type:'Phone_Successful', products:res.data});
            }else{
              dispatch({type:'Phone_Error', err:res.data.message});
            }
          }).catch(err=>{
            dispatch({type:'Phone_Error', err:err});
          })
	}
}

