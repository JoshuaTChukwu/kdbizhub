import React, { Component } from 'react'
import {connect} from 'react-redux';
import {buyBTC} from '../../store/actions/transactionActions';
import './css/dashboard.css'
import './css/mobdashboard.css'
import './css/products.css'
import { RaveProvider, RavePaymentButton } from "react-ravepayment";

class BuyBTC extends Component {
    state={
        type:"buy",
        client:this.props.user.username,
        email:this.props.user.email,
        key:'1d4228f22fb41420639ca9084bacef85',
        paystackKey:'pk_test_595844b5401954b08a200b4a78e3e1342a6a63c1',
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
                this.props.buyBTC(this.state)
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
        const {btc, rate} = this.props;
        const naira = dollars * rate ;
        const crypto = dollars /  btc.buy;
        let config = this.state.config;
        config.amount = naira;
		this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
            naira:naira,
            crypto: crypto,
            config:config
        })
    }

    handleNaira=(e)=>{
        const naira = e.target.value ;
        const {btc, rate} = this.props;
        const dollars = naira / rate ;
        const crypto = dollars /  btc.buy;
        let config = this.state.config;
        config.amount = naira;
		this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
            dollars:dollars,
            crypto:crypto,
            config:config
        })
    }

    handleCrypto=(e)=>{
        const crypto = e.target.value;
        const {btc, rate} = this.props;
        const dollars = crypto * btc.buy;
        const naira = dollars *  rate ;
        let config = this.state.config;
        config.amount = naira;
		this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
            dollars:dollars,
            naira:naira,
            config:config
        })
    }

		render(){
            const img = {
                width: "150px"
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
            const {btc, rate, Err} = this.props;

            if(!Err){
        return (
            <div className="flex_card">
                <div className="item_box">
                    <div>
                        <img src={require ("./images/us-bitcoin.png")} style={img} alt="btc" />
                        <p> BTC </p>
                    </div>
                    <p> {formatte.format(btc.buy)} <br /> {formatter.format(btc.buy * rate )}</p>
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
                            <h5>BTC</h5>
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
                buyBTC : (details)=> dispatch(buyBTC(details))
            }
          }
        
        const matchStateToProps = (state, ownProps)=>{
            return{
                user:state.auth.user,
                btc:state.btc.USD,
                rate:state.rate.rate,
                Err:state.btc.Err
            }
          }
      
          export default connect(matchStateToProps, matchDispatchToProps)(BuyBTC);
    