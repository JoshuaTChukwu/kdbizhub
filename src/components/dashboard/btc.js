import React, { Component } from 'react'
import { NavLink, Switch, Route} from 'react-router-dom';
import BuyBTC from './buyBtc';
import SellBTC from './sellBtc';
import {connect} from 'react-redux'
import './css/giftcard.css'
class Btc extends Component {
    render(){
        const {ready}= this.props;
        if(ready){
    return (
                <section id="giftcard">
                <div className="card">
                        <NavLink to={"/products"}>Buy</NavLink>
                        <NavLink to={"/products/btc/sell"}>Sell</NavLink>
                   <Switch>
                       <Route component={BuyBTC} exact path={"/products"} />
                       <Route component={SellBTC} exact path={"/products/btc/sell"} />
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
    }
}
    
    const matchStateToProps = (state, ownProps)=>{
        return{
            user:state.auth.user,
            btc:state.btc.USD,
            ready:state.btc.ready,
            rate:state.rate.rate,
        }
      }
  
      export default connect(matchStateToProps)(Btc);
    