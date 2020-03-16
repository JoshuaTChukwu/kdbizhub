import React, {Component} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage'
import Button from './components/homepage/button'
import DashboardRoute from './components/dashboard/dashboardRoute'
import {getJWT} from './store/actions/jwtActions';
import {connect} from 'react-redux';

class App extends Component {
	constructor(props){
		super(props)
		const jwtt = {
			jwt: localStorage.getItem('kdbizhubjwt')? localStorage.getItem('kdbizhubjwt'):false
		}
		props.getJWT(jwtt.jwt);
	}
  render(){
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/dashboard" component={DashboardRoute} />
					<Route exact path="/products" component={DashboardRoute} />
					<Route exact path="/products/giftcards" component={DashboardRoute} />
					<Route exact path="/transactions" component={DashboardRoute} />
					<Route exact path="/profile" component={DashboardRoute} />
					<Route path="/signin" component={Homepage} />
					<Route path="/signup" component={Homepage} />
					<Route path="/verify/:email" component={Homepage} />
					<Route path="/forgotpassword" component={Homepage} />
					<Route path="/resetpassword" component={Homepage} />
					<Route path="/terms" component={Homepage} />
					<Route path="/logout" component={DashboardRoute} />
                    <Route component={DashboardRoute} path={"/products/giftcards/:id/sell"} />
					<Route  path="/products/giftcards/:id" component={DashboardRoute} />
                    <Route exact path="/products/phones" component={DashboardRoute} />
                    <Route  path="/products/phones/:id" component={DashboardRoute} />
                    <Route exact path="/products/cryptocurrencies" component={DashboardRoute} />
                    <Route  path="/products/cryptocurrencies/:id" component={DashboardRoute} />
                    <Route  path="/products/success" component={DashboardRoute} />
					<Route  path="/transactions" component={DashboardRoute} />
					<Route  path="/transactions/sold" component={DashboardRoute} />
					<Route  path="/transactions/bought" component={DashboardRoute} />
					<Route  path="/transactions/pending" component={DashboardRoute} />
                        <Route exact path="/homepage/products" component={Homepage} />
                        <Route exact path="/homepage/products/phones" component={Homepage} />
                        <Route exact path="/homepage/products/crypto" component={Homepage} />
					<Route exact path="/products/btc" component={DashboardRoute} />
					<Route exact path="/products/phones" component={DashboardRoute} />
					<Route component={Homepage} />
				</Switch>
				<Button />
			</div>
		</BrowserRouter>
	);

  }
}
const matchDispatchToProps = (dispatch) =>{
	return{
	  getJWT: (jwt) => dispatch(getJWT(jwt))
	}
	
  }
export default connect(null, matchDispatchToProps)(App);
