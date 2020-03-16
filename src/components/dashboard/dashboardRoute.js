import React, { Component } from 'react'
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import WebNavbar from './webNavbar'
import MobileNavbar from './mobileNavbar'
import Dashboard from './dashboard'
import Transactions from './transactions'
import Products from './products'
import Profile from './profile';
import Logout from './logout';
import './css/app.css'
import {connect} from 'react-redux';
import {getGiftCards} from '../../store/actions/giftCardsActions';
import {getBtcRate} from '../../store/actions/btcActions';
import {getRate} from '../../store/actions/rateActions';
import {getPhones} from '../../store/actions/phonesActions';
import {getCryptoCurrencies} from '../../store/actions/cryptoCurrenciesActions';
import {getJWT} from '../../store/actions/jwtActions';

class DashboardRoute extends Component {
	constructor(props){
		super(props)
		props.getCryptoCurrencies(this.state.clink);
		props.getPhones(this.state.plink);
		props.getGiftCards(this.state.glink);
		props.getRate(this.state.rlink);
		const jwtt = {
			jwt: localStorage.getItem('kdbizhubjwt')? localStorage.getItem('kdbizhubjwt'):false
		}
		props.getJWT(jwtt.jwt);
		props.getBtcRate();
	}

	state={
        tlink:'https://kdbizhubpi.online/api/transactions/getClient.php?page=1',
        key: '1d4228f22fb41420639ca9084bacef85',
		client:this.props.user.username,
        clink:'https://kdbizhubpi.online/api/products/currency/getavailable.php?page=1',
        glink:'   https://kdbizhubpi.online/api/products/giftcards/getavailable.php?page=1',
		plink:'https://kdbizhubpi.online/api/products/phones/getavailable.php?page=1',
		rlink:'https://kdbizhubpi.online/api/config/getRate.php'
	}
	
	
		render(){
			const {user} = this.props;
			const center={
				textAlign:"center"
			}
			const jwtt = {
				jwt: localStorage.getItem('kdbizhubjwt')? localStorage.getItem('kdbizhubjwt'):false
			}
			if(!user.jwt && !jwtt.jwt ){
				return <Redirect to='/signin' />
			}else{
				if(user.jwt){
			return (
					<BrowserRouter>
						<div className="dashboardApp">
							<WebNavbar />
							<MobileNavbar />
							<Switch>
								<Route exact path="/dashboard" component={Dashboard} />
								<Route path="/transactions" component={Transactions} />
								<Route path="/products" component={Products} />
								<Route path="/profile" component={Profile} />
								<Route path="/logout" component={Logout} />
                    			<Route component={Products} path={"/products/giftcards/:id/sell"} />
								<Route  path="/products/giftcards/:id" component={Products} />
								<Route exact path="/products/cryptocurrencies" component={Products} />
								<Route  path="/products/cryptocurrencies/:id" component={Products} />
                       			<Route exact path="/products/phones" component={Products} />
                       			<Route exact path="/products/btc" component={Products} />
								<Route render={()=>{return<h1 style={center}>Page Not Found</h1>}} />
								<Route exact path="/transactions" component={Transactions} />
								<Route  path="/transactions/sold" component={Transactions} />
								<Route  path="/transactions/bought" component={Transactions} />
								<Route  path="/transactions/pending" component={Transactions} />
							</Switch>
						</div>
					</BrowserRouter>
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
}


const matchDispatchToProps = (dispatch) =>{
	return{
	  getCryptoCurrencies : (link)=> dispatch(getCryptoCurrencies(link)),
	  getGiftCards : (link)=> dispatch(getGiftCards(link)),
	  getPhones : (link)=> dispatch(getPhones(link)),
	  getRate: (link)=> dispatch(getRate(link)),
	  getJWT: (jwt) => dispatch(getJWT(jwt)),
	  getBtcRate: () =>dispatch(getBtcRate())
	}
	
  }
	const matchStateToProps = (state, props)=>{
		return{
			user:state.auth.user,
			transactions:state.transaction.transactions,
			cryptoCurrencies:state.cryptoCurrency.cryptoCurrencies,
			giftCards:state.giftCard.giftCards,
			phones:state.phone.phones,
			gready:state.giftCard.ready,
			tready:state.transaction.ready,
			cready:state.cryptoCurrency.ready,
			pready:state.phone.ready,
			rate:state.rate.rate
		}
	}
	
export default  connect(matchStateToProps, matchDispatchToProps)(DashboardRoute);
	

