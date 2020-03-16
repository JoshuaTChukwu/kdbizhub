import React, { Component } from 'react'
import { NavLink, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import BuyCrypto from './BuyCrypto';
import SellCrypto from './sellCrypto';
import './css/giftcard.css'
class CryptoCurrency extends Component {
    render(){
        const {cryptoCurrency} = this.props;
        if(cryptoCurrency){
    return (
                <section id="giftcard">
                <div className="card">
                        <NavLink to={"/products/cryptoCurrencies/"+cryptoCurrency.crypto_id}>Buy</NavLink>
                        <NavLink to={"/products/cryptoCurrencies/"+cryptoCurrency.crypto_id+"/sell"}>Sell</NavLink>
                   <Switch>
                       <Route component={BuyCrypto} exact path={"/products/cryptoCurrencies/:id"} />
                       <Route component={SellCrypto} exact path={"/products/cryptoCurrencies/:id/sell"} />
                   </Switch>
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
      const matchStateToProps = (state, ownProps)=>{
            const id = ownProps.match.params.id;
            const cryptoCurrencies = state.cryptoCurrency.objects;
            const cryptoCurrency = cryptoCurrencies? cryptoCurrencies[id] : null
            return{
              cryptoCurrency:cryptoCurrency
            }
          }
  
      export default connect(matchStateToProps)(CryptoCurrency);
    