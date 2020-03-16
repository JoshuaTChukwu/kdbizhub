import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPhones} from '../../store/actions/phonesActions';
class Phones extends Component {
    state={
        link:'https://kdbizhubpi.online/api/products/phones/getavailable.php?page=1'
    }
    handleClickNext=()=>{
        const {paging} = this.props;
        
        this.props.getPhones(paging.next);
    }

    handleClickFirst=()=>{
        const {paging} = this.props;
        
        this.props.getPhones(paging.first);
    }

    handleClickBack=()=>{
        const {paging} = this.props;
        
        this.props.getPhones(paging.back);
    }

    handleClickLast=()=>{
        const {paging} = this.props;
        
        this.props.getPhones(paging.last);
    }


		render(){
            const {phones, ready, paging, perr} = this.props;
            var style1 = paging.first==="#"|| !paging.first? ({
                display: "none"
            }):({
                display: "inline-block"
            })
            var style2 = paging.back==="#"|| !paging.first? ({
                display: "none"
            }):({
                display: "inline-block"
            })
            var style3 = paging.next==="#"|| !paging.first? ({
                display: "none"
            }):({
                display: "inline-block"
            })
            var style4 = paging.last==="#"|| !paging.first? ({
                display: "none"
            }):({
                display: "inline-block"
            })
            const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'NGN',
				minimumFractionDigits: 2
				})
            if(ready){
                if(perr){
                    return(
                        
                        <div className="card"> <p>No Phone Available at the Moment </p> </div>
                    )
                }
			return (
                <div className="card">
            <div className="product_flex">
            {
                phones && phones.map(phone =>{
                    return(
                <Link to={"/products/phones/"+phone.phone_id} key={phone.phone_id} className="product_item_two">
                    <div>
                        <img src={phone.picture} alt="phone" />
                        <p>{phone.name} <br /> <i>{phone.description}</i></p>
                    </div>
                    <div>
                        <p>{formatter.format(phone.price)}</p>
                    </div>
                </Link>
                    )
                })
            }
            </div>
            <div className="center">
                <button  style={style1} onClick={this.handleClickFirst}>First</button>
                <button style={style2} onClick={this.handleClickBack}>Back</button>
                <button style={style3} onClick={this.handleClickNext}>Next</button>
                <button style={style4} onClick={this.handleClickLast}>Last</button>
            </div>
        </div>
			);
            }else{
                return (
                    <div className="card">
                    <div className="loadinContain"> <img src={require("./images/loading.gif")} alt="loading" className="loading" /> </div>
                    </div>
            );
            }
		}
	}
	
    const matchDispatchToProps = (dispatch) =>{
        return{
          getPhones : (link)=> dispatch(getPhones(link))
        }
      }
    
    const matchStateToProps = (state, ownProps)=>{
        return{
          phones:state.phone.phones,
          paging:state.phone.paging,
          ready: state.phone.ready,
          perr:state.phone.Err
        }
      }
  
      export default connect(matchStateToProps, matchDispatchToProps)(Phones);
