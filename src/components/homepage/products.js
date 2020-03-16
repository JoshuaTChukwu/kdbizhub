import React, {Component} from 'react';
import {connect} from 'react-redux';
import './css/homeproducts.css'
import { Link } from 'react-router-dom';

class Product extends Component {
	render(){
		  const {giftCards, ready, gerr} = this.props;
		  var setgiftCards = [];
		  if(!gerr){
			  for(var k = 0; k<4; k++){
				  if( k === giftCards.length){
					  break;
				  }else{
					  setgiftCards.push(giftCards[k]);
				  }
			  }
		  }
	  	if(ready){
			return (
				<section id="products">
				{gerr? null : <h1>Products</h1> }	
					<div className="products_one">
						{
							setgiftCards && setgiftCards.map(gift_card =>{
								return(
							<div  key={gift_card.card_id}>
									<Link to="/homepage/products">
									<img src={gift_card.picture} alt="gift card" />
									<h3>{gift_card.name}</h3>
									<p>Current Sales</p>
									<h5>&#8358; {gift_card.out_price}</h5>
								</Link>
								</div>
								)
							})
						}
					</div>
					{gerr? <h1>Products</h1>  : <h1>More Products</h1> }	
	
					<div className="products_two">
						<div>
						<Link to={"/homepage/products"}>
							<h3>Gift Cards</h3>
							<p>Current Sales</p>
							</Link>
						</div>
						<div>
						<Link to={"/homepage/products/crypto"}>
							<h3>Crypto Currencies</h3>
							<p>Current Sales</p>
							</Link>
						</div>
						<div>
						<Link to={"/homepage/products/phones"}>
							<h3>Phones</h3>
							<p>Current Sales</p>
							</Link>
						</div>
					</div>
				</section>                                 		
			);
		}else{
			return (
			<section id="products">
				<h1>Products</h1> <div className="loadinContain"> <img src={require("./images/loading.gif")} alt="loading" className="loading" /> </div>
			</section>    
			)
		}
	}
}

	const matchStateToProps = (state)=>{
		return{
		  giftCards:state.giftCard.giftCards,
		  ready:state.giftCard.ready,
		  gerr:state.giftCard.Err
		}
	  }
	  export default  connect(matchStateToProps)(Product);
	