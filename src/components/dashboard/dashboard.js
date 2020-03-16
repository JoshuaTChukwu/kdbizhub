import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import './css/dashboard.css'
import {connect} from 'react-redux';
import {getTransactions}  from '../../store/actions/transactionActions';

class Dashboard extends Component {
	constructor(props){
		super(props)
		props.getTransactions(this.state.tlink, this.state);
	}

	state={
        tlink:'https://kdbizhubpi.online/api/transactions/getClient.php?page=1',
		client:this.props.user.username,
		key:'1d4228f22fb41420639ca9084bacef85'
	}
		render(){
			const {user,terr,gerr,perr, cerr, rready, cryptoCurrencies, giftCards, phones, tready, pready, gready, cready, transactions} = this.props;
			
			if (tready && pready && gready && cready &&rready ){
				var settransactions = [];
				var transactionCheck =false;
				if(!terr){
					transactionCheck =true;
				for(var m = 0; m<5; m++){
					if( m === transactions.length){
						break;
					}else{
						settransactions.push(transactions[m]);
					}
				}
			}
			var setgiftCards = [];
			var giftCheck =false;
			if(!gerr){
				giftCheck =true;
				for(var k = 0; k<3; k++){
					if( k === giftCards.length){
						break;
					}else{
						setgiftCards.push(giftCards[k]);
					}
				}
			}
			var setcryptoCurrencies = [];
			var cryptoCheck = false;
			if(!cerr){
				 cryptoCheck = true;
				for(var i = 0; i<3; i++){
					if( i === cryptoCurrencies.length){
						break;
					}else{
						setcryptoCurrencies.push(cryptoCurrencies[i]);
					}
				}
			}
				var setphones = [];
				var phoneCheck = false;
			if(!perr){
				 phoneCheck = true;
				for(var j = 0; j<3; j++){
					if( j === phones.length){
						break;
					}else{
						setphones.push(phones[j]);
					}
				}
			}
				const green={
					color:"green"
				}
				const red={
					color:"red"
				}
				
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'NGN',
		minimumFractionDigits: 2
	  })
			return (
                <div className="dashboardHold">
                    <section id="dashboard">
                        <section className="dashflex">
                            <div className="dash_home">
                                <div>
                                    <h2>
                                        Welcome {user.username}
                                    </h2>
                                    <p>Have a question?</p>
                                    <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=2348141184662&text=Hello, I visited your website and I have an enquiry" target="_blank"> chat with us</a>
                                </div>
                                <div>
                                    <img src={require("./images/4.png")} alt="home" />
                                </div>
                            </div>
                            <div className="dash_home_two">
                                <h2>Recent Transactions</h2>
								{transactionCheck? 
                                <div className="table">
                                    <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
									{
										 settransactions.map(transaction =>{
												return(
									<tr key={transaction.product + transaction.transaction_id.toString()}>
										<td>{transaction.product}</td>
										<td>{formatter.format(transaction.amount)}</td>
										<td style={transaction.verified === "0"? (red):(green) }>{transaction.verified === "0"? "Pending" : "Cleared"}</td>
										<td>{transaction.transaction_date}</td>
									</tr>
												)
										})
									}
                        </tbody>
					</table>
					<Link to="/transactions">See More</Link>
				</div> : <p>No Transaction Yet</p> }
			</div>
		</section>

		{!giftCheck && !phoneCheck && !cryptoCheck? <section className="grey"><h2>No Product Yet</h2></section> : <section>
			<h2 className="grey">Products</h2>
			 <div className="dashflex_two">
			 {giftCheck?
				<div className="product_item">
					<div>
						<img src={require("./images/Group 341.png")} alt="gift cards" />
						<h4>Gift Cards</h4>
					</div>
					{setgiftCards.map(giftCard =>{
												return(
					<Link key={giftCard.name + giftCard.card_id.toString()} to={"/products/giftcards/"+giftCard.card_id}>{giftCard.name}</Link>
												)
										})
					}			
					<Link to="/products/giftcards">See More</Link>
				</div>  : null}
				{cryptoCheck?
				<div className="product_item">
					<div>
						<img src={require("./images/Group 353.png")} alt="gift cards" />
						<h4>Crypto Currencies</h4>
					</div>
					{
										cryptoCheck && setcryptoCurrencies.map(cryptoCurrencyy =>{
												return(
					<Link key={cryptoCurrencyy.name + cryptoCurrencyy.crypto_id.toString()} to={"/products/cryptoCurrencies/"+cryptoCurrencyy.crypto_id}>{cryptoCurrencyy.name}</Link>
												)
										})
									}
					<Link to="/products/cryptoCurrencies">See More</Link>
				</div> : null}
				{phoneCheck? 
				<div className="product_item">
					<div>
						<img src={require("./images/Group 339.png")} alt="gift cards" />
						<h4>Phones</h4>
					</div>
					{
						 setphones.map(phone =>{
												return(
					<Link key={phone.name + phone.phone_id.toString()} to={"/products/phones/"+phone.phone_id}>{phone.name}</Link>
												)
										})
									}
					<Link to="/products/phones">See More</Link>
				</div> : null}
			</div>
		</section> }
	</section>
                </div>
			);}else{
				const margin={
					marginTop:'100px'
				}
				return(
					<div className="dashboardHold">
					 <div className="loadinContain" style={margin}>
					  <img src={require("./images/loading.gif")} alt="loading" className="loading" /> 
					  </div>
					  </div>
				)
			}
	
		}
	}

	const matchDispatchToProps = (dispatch) =>{
		return{
		  getTransactions : (link, client)=> dispatch(getTransactions(link, client))
		}
	}
    const matchStateToProps = (state)=>{
		return{
			user:state.auth.user,
			cryptoCurrencies:state.cryptoCurrency.cryptoCurrencies,
			giftCards:state.giftCard.giftCards,
			phones:state.phone.phones,
			gready:state.giftCard.ready,
			tready:state.transaction.ready,
			terr:state.transaction.Err,
			cready:state.cryptoCurrency.ready,
			rready:state.rate.ready,
			pready:state.phone.ready,
			transactions:state.transaction.transactions,
			gerr:state.giftCard.Err,
			cerr:state.cryptoCurrency.Err,
			perr:state.phone.Err
		}
	}
	
export default  connect(matchStateToProps, matchDispatchToProps)(Dashboard);