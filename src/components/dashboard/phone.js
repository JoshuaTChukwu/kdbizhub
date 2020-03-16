import React, { Component } from 'react'
import {connect} from 'react-redux';
import './css/giftcard.css'
import { RaveProvider, RavePaymentButton } from "react-ravepayment";
import {buyPhone} from '../../store/actions/transactionActions';
class Phone extends Component {
    state={
        amount:this.props.phone.price,
        type:"buy",
        product:this.props.phone.name,
        client:this.props.user.username,
        email:this.props.user.email,
        key:'1d4228f22fb41420639ca9084bacef85',
        currency:"NGN",
        response:'',
        rate:this.props.rate,
        address:'',
        config: {
            txref: "rave-123456",
            customer_email: this.props.user.email,
            customer_phone: this.props.user.phone_number,
            amount: this.props.phone.price,
            PBFPubKey: "FLWPUBK_TEST-787d90ba8a294766219ecc92e59ef89e-X",
            onSuccess: () => {
                this.props.buyPhone(this.state)
                this.props.history.push('/products/success')},
            onClose: () => {}
          }
    }
    handleChange=(e)=>{
		this.setState({
			[e.target.id]: e.target.value
		})
    }
    render(){
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2
          })
        const {phone} = this.props;
        if(phone){
    return (
                <section id="giftcard">
                <div className="card flex_card">
                    <div className="item_box">
                        <img src={phone.picture} alt="amazon" />
                        <br />
                        <p>
                            {phone.name}
                            <br />
                            <i>{phone.description}</i>
                            <br />
                            {formatter.format(phone.price)}
                        </p>
                        <form>
                            <input type="text" placeholder="Address" id="address" onChange={this.handleChange} />
                        </form>
                        
            <RaveProvider {...this.state.config}>
        <RavePaymentButton>Pay {formatter.format(this.state.amount)}</RavePaymentButton>
      </RaveProvider>
                    </div>

        
                </div>
            </section>
			);
		}else{
            
					return (
						<div className="card">
						<div className="loadinContain"> <img src={require("./images/loading.gif")} alt="loading" className="loading" /> </div>
						</div>
				);
        }
    }}
    
    
    const matchDispatchToProps = (dispatch) =>{
        return{
            buyPhone : (details)=> dispatch(buyPhone(details))
        }
      }
      const matchStateToProps = (state, ownProps)=>{
            const id = ownProps.match.params.id;
            const phones = state.phone.objects;
            const phone = phones? phones[id] : null
            return{
              phone:phone,
              user:state.auth.user,
              rate:state.rate.rate
            }
          }
  
      export default connect(matchStateToProps, matchDispatchToProps)(Phone);
    