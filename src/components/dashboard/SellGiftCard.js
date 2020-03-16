import React, { Component } from 'react'
import {connect} from 'react-redux';
import {sellGiftCard} from '../../store/actions/transactionActions';

class SellGiftCard extends Component {
    
    state={
        hundreds:0,
        fiftys:0,
        totalPay:0,
        rate:this.props.rate,
        naira:0,
        accountName:'',
        accountNumber:'',
        bankName:'',
        client:this.props.user.username,
        product:this.props.giftCard.name,
        type:'sell',
        key:'1d4228f22fb41420639ca9084bacef85',
        transaction_description:''
    }

    hunhandleClickAdd=()=>{
        const hundreds = this.state.hundreds+1;
        this.setState({
            hundreds:hundreds,
            totalPay:(hundreds * 100) + (this.state.fiftys * 50),
            naira:((hundreds * 100) + (this.state.fiftys * 50))* this.state.rate * 100
        })
    }

    hunhandleClickSub=()=>{
        const hundreds = this.state.hundreds - 1 < 0? 0:this.state.hundreds - 1;
        this.setState({
            hundreds:hundreds,
            totalPay:(hundreds * 100) + (this.state.fiftys * 50),
            naira:((hundreds * 100) + (this.state.fiftys * 50))* this.state.rate * 100
        })
    }

    fifhandleClickAdd=()=>{
        const fiftys = this.state.fiftys+1;
        this.setState({
            fiftys:fiftys,
            totalPay:(this.state.hundreds * 100) + (fiftys * 50),
            naira:((this.state.hundreds * 100) + (fiftys * 50))* this.state.rate * 100
        })
    }

    fifhandleClickSub=()=>{
        const fiftys = this.state.fiftys - 1 < 0? 0:this.state.fiftys - 1;
        this.setState({
            fiftys:fiftys,
            totalPay:(this.state.hundreds * 100) + (fiftys * 50),
            naira:((this.state.hundreds * 100) + (fiftys * 50))* this.state.rate * 100
        })
    }
	handleChange=(e)=>{
		this.setState({
			[e.target.id]: e.target.value
		})
    }
    
    handleSubmit=(e)=>{
		e.preventDefault();
        this.props.sellGiftCard(this.state)
        window.open(
            "https://api.whatsapp.com/send?phone=2348141184662&text=Hello, I am "+ this.state.client + ". I want to sell "+this.state.product+ ". Details : 100s " +this.state.hundreds+ "; 50s "+this.state.fiftys+ "; Amount ₦"+this.state.totalPay +"; account Name "+this.state.accountName+"; account Number "+this.state.accountNumber+"; bank Name "+this.state.bankName + " _From Website_", "_blank"
        )
    }


		render(){
            const {giftCard, sellStatus} = this.props;
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
            <p>You are Selling {this.state.fiftys + " $50s"} and {this.state.hundreds + " $100s"} {giftCard.name}</p>
            <p>You will Receive {formatte.format(this.state.totalPay)} || {formatter.format(this.state.naira  / 100)}</p>
            </div>
        </div>

            <div className="item_box" >
            <form onSubmit={this.handleSubmit}>
                <p>Fill In Details to Make Transaction</p>
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
                    Your request has been sent and we shall get back to you as soon as possible, this could take up to 24 hrs
                </p> : null}
                <input type="submit" value="Sell" />
            </form>
            </div>
        </div>
        )}
            }
        }
        const matchDispatchToProps = (dispatch) =>{
            return{
                sellGiftCard : (details)=> dispatch(sellGiftCard(details))
            }
          }
        
        const matchStateToProps = (state, ownProps)=>{
            const id = ownProps.match.params.id;
            const giftCards = state.giftCard.objects;
            const giftCard = giftCards? giftCards[id] : null
            return{
              giftCard:giftCard,
              user:state.auth.user,
              sellStatus:state.transaction.transactionMessage,
              rate:giftCard.out_price
            }
          }
      
          export default connect(matchStateToProps, matchDispatchToProps)(SellGiftCard);
    