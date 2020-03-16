import React, { Component } from 'react'
import { NavLink, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import BuyGiftCard from './BuyGiftCard';
import SellGiftCard from './SellGiftCard';
import './css/giftcard.css'
class GiftCard extends Component {
    render(){
        const {giftCard} = this.props;
        if(giftCard){
    return (
                <section id="giftcard">
                <div className="card">
                        <NavLink to={"/products/giftcards/"+giftCard.card_id}>Buy</NavLink>
                        <NavLink to={"/products/giftcards/"+giftCard.card_id+"/sell"}>Sell</NavLink>
                        <p>Select Denomination and Pcs</p>
                   <Switch>
                       <Route component={BuyGiftCard} exact path={"/products/giftcards/:id"} />
                       <Route component={SellGiftCard} path={"/products/giftcards/:id/sell"} />
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
            const giftCards = state.giftCard.objects;
            const giftCard = giftCards? giftCards[id] : null
            return{
              giftCard:giftCard
            }
          }
  
      export default connect(matchStateToProps)(GiftCard);
    