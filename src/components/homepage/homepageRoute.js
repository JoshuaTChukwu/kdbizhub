import React, {Component} from 'react';
import Header from './header'
import About from './about'
import Product from './products'
import Rate from './rates'
import Contact from './contact'
import {connect} from 'react-redux';
import {getGiftCards} from '../../store/actions/giftCardsActions';

class HomepageRoute extends Component{
	constructor(props){
		super(props)
		props.getGiftCards(this.state.glink);
	}

	state={
        key: '1d4228f22fb41420639ca9084bacef85',
        glink:'https://kdbizhubpi.online/api/products/giftcards/getavailable.php?page=1'
	}
	render(){
		return (
			<div className="App">
				<Header />
				<About />
				<Product/>
				<Rate />
				<Contact />
			</div>
			)
	}

}

const matchDispatchToProps = (dispatch) =>{
	return{
	  getGiftCards : (link)=> dispatch(getGiftCards(link))
	}
}

  export default  connect(null, matchDispatchToProps)(HomepageRoute);