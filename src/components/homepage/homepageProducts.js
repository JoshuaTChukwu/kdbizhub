import React, { Component } from 'react'
import {NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';
import GiftCards from './giftcards'
import Phones from './phones'
import CryptoCurrencies from './cryptoCurrencies'
import {connect} from 'react-redux';

import {getGiftCards} from '../../store/actions/giftCardsActions';
import {getPhones} from '../../store/actions/phonesActions';
import {getCryptoCurrencies} from '../../store/actions/cryptoCurrenciesActions';
class HomePageProducts extends Component {
    constructor(props){
		super(props)
		props.getCryptoCurrencies(this.state.clink);
		props.getPhones(this.state.plink);
		props.getGiftCards(this.state.glink);
	}

	state={
        key: '1d4228f22fb41420639ca9084bacef85',
        clink:'https://kdbizhubpi.online/api/products/currency/getavailable.php?page=1',
        glink:'https://kdbizhubpi.online/api/products/giftcards/getavailable.php?page=1',
		plink:'https://kdbizhubpi.online/api/products/phones/getavailable.php?page=1'
	}
		render(){
            const {gerr, perr, cerr} =  this.props;
            console.log(perr)
            const  style={
                padding: "100px 0px",
                textAlign:"center"
              }
			return (
                 <BrowserRouter>
                 {gerr && perr && cerr? <section id="products"><div className="card" style={style}><p>No Product Available at the Moment</p></div></section> 
               :
                <section id="products">
               
                    <NavLink to="/homepage/products"> Gift Cards </NavLink>
                    <NavLink to="/homepage/products/crypto"> Crypto Currencies </NavLink>
                    <NavLink to="/homepage/products/phones"> Phones </NavLink>
                    <Switch>
                        <Route exact path="/homepage/products" component={GiftCards} />
                        <Route exact path="/homepage/products/phones" component={Phones} />
                        <Route exact path="/homepage/products/crypto" component={CryptoCurrencies} />
                    </Switch> 
                </section>
                 }
                 </BrowserRouter>
			);
		}
    }
    
    const matchDispatchToProps = (dispatch) =>{
        return{
          getCryptoCurrencies : (link)=> dispatch(getCryptoCurrencies(link)),
          getGiftCards : (link)=> dispatch(getGiftCards(link)),
          getPhones : (link)=> dispatch(getPhones(link))
        }
    }
	
    const matchStateToProps = (state)=>{
		return{
			gerr:state.giftCard.Err,
			cerr:state.cryptoCurrency.Err,
			perr:state.phone.Err
		}
	}
  
      export default connect(matchStateToProps, matchDispatchToProps)(HomePageProducts);

