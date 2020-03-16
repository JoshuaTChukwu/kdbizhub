import React, { Component } from 'react'
import {connect} from 'react-redux';
import {buyCrypto} from '../../store/actions/transactionActions';
import './css/dashboard.css'
import './css/mobdashboard.css'
import './css/products.css'
import { RaveProvider, RavePaymentButton } from "react-ravepayment";

class BuyCrypto extends Component {
    state={
        type:"buy",
        product:this.props.cryptoCurrency.name,
        client:this.props.user.username,
        email:this.props.user.email,
        key:'1d4228f22fb41420639ca9084bacef85',
        currency:"NGN",
        response:'',
        rate:this.props.rate,
        dollars:0.00,
        naira:0.00,
        crypto:0.0000,
        config: {
            txref: "rave-123456",
            customer_email: this.props.user.email,
            customer_phone: this.props.user.phone_number,
            amount: 0,
            PBFPubKey: "FLWPUBK_TEST-787d90ba8a294766219ecc92e59ef89e-X",
            onSuccess: () => {
                this.props.buyCrypto(this.state)
                this.props.history.push('/products/success')},
            onClose: () =>  {}
          }
    }
 
	handleChange=(e)=>{
		this.setState({
			[e.target.id]: e.target.value
		})
    }

    
	handleDollars=(e)=>{
        const dollars = e.target.value;
        const {cryptoCurrency} = this.props;
        const naira = dollars * this.state.rate ;
        const crypto = dollars /  cryptoCurrency.rate;
        let config = this.state.config;
        config.amount = naira;
		this.setState({
            [e.target.id]: e.target.value,
            naira:naira,
            crypto: crypto,
            config:config
        })
    }

    handleNaira=(e)=>{
        const naira = e.target.value ;
        const {cryptoCurrency} = this.props;
        const dollars = naira / cryptoCurrency.rate ;
        const crypto = dollars /  cryptoCurrency.rate;
        let config = this.state.config;
        config.amount = naira;
		this.setState({
            [e.target.id]: e.target.value,
            dollars:dollars,
            crypto:crypto,
            config:config
        })
    }

    handleCrypto=(e)=>{
        const crypto = e.target.value;
        const {cryptoCurrency} = this.props;
        const dollars = crypto * cryptoCurrency.rate;
        const naira = dollars *  this.state.rate ;
        let config = this.state.config;
        config.amount = naira;
		this.setState({
            [e.target.id]: e.target.value,
            dollars:dollars,
            naira:naira,
            config:config
        })
    }

		render(){
            const {cryptoCurrency} = this.props;

            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'NGN',
                minimumFractionDigits: 2
              })

            if(cryptoCurrency){
        return (
            <div className="flex_card">
                <div className="item_box">
                    <div>
                        <img src={cryptoCurrency.picture} alt="cryptocurrency" />
                        <p>{cryptoCurrency.name}</p>
                    </div>
                    <p>{cryptoCurrency.convertRate} /USD</p>
                    <form>
                        <p>Fill In Details to Make Transaction</p>
                        <div>
                            <h5>USD</h5>
                            <input type="number" id="dollars" value={this.state.dollars}  onChange={this.handleDollars} required />
                        </div>
                        <div>
                            <h5>Naira</h5>
                            <input type="number" id="naira" value={this.state.naira} onChange={this.handleNaira} required/>
                        </div>
                        <div>
                            <h5>{cryptoCurrency.name}</h5>
                            <input type="number" id="crypto" value={this.state.crypto}  onChange={this.handleCrypto} required/>
                        </div>
                    </form>

                    
            <RaveProvider {...this.state.config}>
        <RavePaymentButton>Pay {formatter.format(this.state.naira)}</RavePaymentButton>
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
                buyCrypto : (details)=> dispatch(buyCrypto(details))
            }
          }
        
        const matchStateToProps = (state, ownProps)=>{
            const id = ownProps.match.params.id;
            const cryptoCurrencies = state.cryptoCurrency.objects;
            const cryptoCurrency = cryptoCurrencies? cryptoCurrencies[id] : null
            return{
                user:state.auth.user,
              cryptoCurrency:cryptoCurrency,
              rate:state.rate.rate,
            }
          }
      
          export default connect(matchStateToProps, matchDispatchToProps)(BuyCrypto);
    