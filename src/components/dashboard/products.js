import React, { Component } from 'react'
import {NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import GiftCards from './giftcards'
import Phones from './phones'
import GiftCard from './giftCard'
import Phone from './phone'
import Btc from './btc'
import CryptoCurrencies from './cryptocurrencies'
import CryptoCurrency from './cryptocurrency'
import Success from './success'
import './css/dashboard.css'
import './css/products.css'
import {connect} from 'react-redux';
class Products extends Component {
		render(){
            const {gerr, perr, cerr} = this.props;
            const  style={
                padding: "100px 0px",
                textAlign:"center"
              }
			return (
                <BrowserRouter>
                {gerr && perr && cerr? <section id="products"><div className="card" style={style}><p>No Product Available at the Moment</p></div></section> 
               :
                <section id="products">
                    
                    <NavLink to="/products"> Bitcoins </NavLink>
                    <NavLink to="/products/giftcards"> Gift Cards </NavLink>
                    <NavLink to="/products/cryptocurrencies"> Crypto Currencies </NavLink>
                    <NavLink to="/products/phones"> Phones </NavLink>
                    <Switch>
                        <Route exact path="/products" component={Btc} />
                        <Route exact path="/products/btc" component={Btc} />
                        <Route exact path="/products/giftcards" component={GiftCards} />
						<Route  path="/products/giftcards/:id" component={GiftCard} />
                        <Route exact path="/products/phones" component={Phones} />
                        <Route  path="/products/phones/:id" component={Phone} />
                        <Route exact path="/products/cryptocurrencies" component={CryptoCurrencies} />
                        <Route  path="/products/cryptocurrencies/:id" component={CryptoCurrency} />
                        <Route  path="/products/success" component={Success} />
                    </Switch>
                
                </section> }
                </BrowserRouter>
			);
		}
	}
    
    
    
    const matchStateToProps = (state)=>{
		return{
			gerr:state.giftCard.Err,
			cerr:state.cryptoCurrency.Err,
			perr:state.phone.Err
		}
	}
  
      export default connect(matchStateToProps)(Products);
