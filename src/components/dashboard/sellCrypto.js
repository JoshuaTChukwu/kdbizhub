import React, { Component } from 'react'
import {connect} from 'react-redux';
import './css/dashboard.css'
import './css/mobdashboard.css'
import './css/products.css'
import {sellCrypto} from '../../store/actions/transactionActions';

class SellCrypto extends Component {

    state={
        dollars:0.00,
        naira:0.00,
        crypto:0.0000,
        accountName:'',
        accountNumber:'',
        bankName:'',
        client:this.props.user.username,
        product:this.props.cryptoCurrency.name,
        type:'sell',
        key:'1d4228f22fb41420639ca9084bacef85',
        transaction_description:'',
        rate:this.props.rate
    }


	handleChange=(e)=>{
		this.setState({
			[e.target.id]: e.target.value
		})
    }

    
	handleDollars=(e)=>{
        const dollars = e.target.value;
        const {cryptoCurrency} = this.props;
        const naira = dollars * this.state.rate;
        const crypto = dollars /  cryptoCurrency.convertRate;
		this.setState({
            [e.target.id]: e.target.value,
            naira:naira,
            crypto: crypto
        })
    }

    handleNaira=(e)=>{
        const naira = e.target.value;
        const {cryptoCurrency} = this.props;
        const dollars = naira / this.state.rate;
        const crypto = dollars /  cryptoCurrency.convertRate;
		this.setState({
            [e.target.id]: e.target.value,
            dollars:dollars,
            crypto:crypto
        })
    }

    handleCrypto=(e)=>{
        const crypto = e.target.value;
        const {cryptoCurrency} = this.props;
        const dollars = crypto * cryptoCurrency.convertRate;
        const naira = dollars *  this.state.rate;
		this.setState({
            [e.target.id]: e.target.value,
            dollars:dollars,
            naira:naira
        })
    }
    
    handleSubmit=(e)=>{
		e.preventDefault();
        this.props.sellCrypto(this.state)
        window.open(
            "https://api.whatsapp.com/send?phone=2348141184662&text=Hello, I am "+ this.state.client + ". I want to sell "+this.state.product+ ". Details : naira ₦" +this.state.naira+ "; crypto "+this.state.crypto+ "; dollars "+this.state.dollars +"; account Name "+this.state.accountName+"; account Number "+this.state.accountNumber+"; bank Name "+this.state.bankName + " _From Website_", "_blank"
        )
    }

		render(){
            const {cryptoCurrency, sellStatus} = this.props;
            const block = {
                display:"block"
            }
            const none = {
                display:"none"
            }
            const stylered = {
                color:'red'
            }
            const stylegreen = {
                color:'green'
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
                </div>
                <div className="item_box" >
                    <div  className="card" id="summary"  style={this.state.dollars === "0"? none:block}>
                        <p>You will send {this.state.crypto + " "+ cryptoCurrency.name}</p>
                        <p>You will receive {formatte.format(this.state.dollars)}  | {formatter.format(this.state.naira) }</p>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <p>Fill In Bank Details to Make Transaction</p>
                        <div>
                            <h5>Bank Account Name</h5>
                            <input type="text" id="accountName" onChange={this.handleChange} required />
                        </div>
                        <div>
                            <h5>Bank</h5>
                            <input type="text" id="bankName" onChange={this.handleChange} required/>
                        </div>
                        <div>
                            <h5>Bank Account Number</h5>
                            <input type="number" id="accountNumber" onChange={this.handleChange} required/>
                        </div>
                {sellStatus ?<p style={sellStatus  === "Transaction Added" ? stylegreen : stylered}>
                {sellStatus} <br />
                    Your request has been sent and we shall get back to you as soon as possible, this could take up to 48 hrs
                </p> : null}
                        
                        <input type="submit" value="Sell" />
                    </form>
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
                sellCrypto : (details)=> dispatch(sellCrypto(details))
            }
          }
        
        const matchStateToProps = (state, ownProps)=>{
            const id = ownProps.match.params.id;
            const cryptoCurrencies = state.cryptoCurrency.objects;
            const cryptoCurrency = cryptoCurrencies? cryptoCurrencies[id] : null
            return{
              cryptoCurrency:cryptoCurrency,
              user:state.auth.user,
              sellStatus:state.transaction.transactionMessagec,
              rate:state.rate.rate
            }
          }
      
          export default connect(matchStateToProps, matchDispatchToProps)(SellCrypto);
    