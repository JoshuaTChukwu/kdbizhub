import React, { Component } from 'react'
import {connect} from 'react-redux';
import {buyGiftCard} from '../../store/actions/transactionActions';
import './css/dashboard.css'
import './css/mobdashboard.css'
import './css/products.css'
import { RaveProvider, RavePaymentButton } from "react-ravepayment";

class BuyGiftCard extends Component {
    
    state={
        hundreds:0,
        fiftys:0,
        totalPay:0,
        naira:0,
        type:"buy",
        product:this.props.giftCard.name,
        client:this.props.user.username,
        email:this.props.user.email,
        key:'1d4228f22fb41420639ca9084bacef85',
        currency:"NGN",
        response:'',
        rate:this.props.rate,
        config: {
            txref: "rave-123456",
            customer_email: this.props.user.email,
            customer_phone: this.props.user.phone_number,
            amount: 0,
            PBFPubKey: "FLWPUBK_TEST-787d90ba8a294766219ecc92e59ef89e-X",
            onSuccess: () => {
                this.props.buyGiftCard(this.state)
                this.props.history.push('/products/success')},
            onClose: () => {}
          }
    }

    hunhandleClickAdd=()=>{
        const hundreds = this.state.hundreds+1;
        let config = this.state.config;
        config.amount = ((hundreds * 100) + (this.state.fiftys * 50))* this.state.rate;
        this.setState({
            hundreds:hundreds,
            totalPay:(hundreds * 100) + (this.state.fiftys * 50),
            naira:((hundreds * 100) + (this.state.fiftys * 50))* this.state.rate * 100,
            config:config
        })
    }

    hunhandleClickSub=()=>{
        const hundreds = this.state.hundreds - 1 < 0? 0:this.state.hundreds - 1;
        let config = this.state.config;
        config.amount = ((hundreds * 100) + (this.state.fiftys * 50))* this.state.rate;
        this.setState({
            hundreds:hundreds,
            totalPay:(hundreds * 100) + (this.state.fiftys * 50),
            naira:((hundreds * 100) + (this.state.fiftys * 50))* this.state.rate * 100,
            config:config
        })
    }

    fifhandleClickAdd=()=>{
        const fiftys = this.state.fiftys+1;
        let config = this.state.config;
        config.amount = ((this.state.hundreds * 100) + (fiftys * 50))* this.state.rate;
        this.setState({
            fiftys:fiftys,
            totalPay:(this.state.hundreds * 100) + (fiftys * 50),
            naira:((this.state.hundreds * 100) + (fiftys * 50))* this.state.rate * 100,
            config:config
        })
    }

    fifhandleClickSub=()=>{
        const fiftys = this.state.fiftys - 1 < 0? 0:this.state.fiftys - 1;
        let config = this.state.config;
        config.amount = ((this.state.hundreds * 100) + (fiftys * 50))* this.state.rate;
        this.setState({
            fiftys:fiftys,
            totalPay:(this.state.hundreds * 100) + (fiftys * 50),
            naira:((this.state.hundreds * 100) + (fiftys * 50))* this.state.rate * 100,
            config:config
        })
    }


	handleChange=(e)=>{
		this.setState({
			[e.target.id]: e.target.value
		})
    }

		render(){
            const {giftCard} = this.props;
            const block = {
                display:"block"
            }
            const none = {
                display:"none"
            }

            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'NGN',
                minimumFractionDigits: 2
              })

              const formatte = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2
                })
            if(giftCard){
        return (
            <div className="flex_card">
            <div className="item_box">
                <div className="flex_card">
                    <div className="card gift_card">
                        <img src={giftCard.picture} alt="amazon" />
                        <p>50</p>
                        <div className="flex_card">
                            <b onClick={this.fifhandleClickSub}>-</b> {this.state.fiftys} <b onClick={this.fifhandleClickAdd}>+</b>
                        </div>
                    </div>
                    <div className="card gift_card">
                        <img src={giftCard.picture} alt="amazon" />
                        <p>100</p>
                        <div className="flex_card">
                            <b onClick={this.hunhandleClickSub}>-</b> {this.state.hundreds} <b onClick={this.hunhandleClickAdd}>+</b>
                        </div>
                    </div>
                </div>
                <div  className="card" id="summary"  style={this.state.totalPay === 0? none:block}>
                <p>You are Buyin {this.state.fiftys + " $50s"} and {this.state.hundreds + " $100s"} {giftCard.name}</p>
                <p>You will pay {formatte.format(this.state.totalPay)} {formatter.format(this.state.naira  / 100)}</p>
                </div>
                
            <RaveProvider {...this.state.config}>
        <RavePaymentButton>Pay {formatter.format(this.state.naira/100)}</RavePaymentButton>
      </RaveProvider>
            </div>
            
        </div>
        )}else{
            
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
                buyGiftCard : (details)=> dispatch(buyGiftCard(details))
            }
          }
        
        const matchStateToProps = (state, ownProps)=>{
            const id = ownProps.match.params.id;
            const giftCards = state.giftCard.objects;
            const giftCard = giftCards? giftCards[id] : null
            return{
              giftCard:giftCard,
              user:state.auth.user,
              rate:giftCard.in_price,
            }
          }
      
          export default connect(matchStateToProps, matchDispatchToProps)(BuyGiftCard);
    