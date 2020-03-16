import React, {Component} from 'react';
import {Switch, Route } from 'react-router-dom';
import HomepageRoute from './homepageRoute'
import WebNavbar from './webNavbar'
import MobileNavbar from './mobileNavbar'
import Footer from './footer'
import './css/homepage.css'
import Terms from './terms'
import ForgotPassword from '../auth/forgot_password'
import UpdatePassword from '../auth/update_password'
import SignIn from '../auth/signIn'
import SignUp from '../auth/signUp'
import Verify from '../auth/verify'
import HomepageProducts from './homepageProducts'

class Homepage extends Component {
  render(){
	  const center={
		  textAlign:"center"
	  }
	return (
			<div className="homepageApp">
				<WebNavbar />
				<MobileNavbar />
				<Switch>
					<Route exact path="/" component={HomepageRoute} />
					<Route path="/terms" component={Terms} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/verify/:email" component={Verify} />
					<Route path="/forgotpassword" component={ForgotPassword} />
					<Route path="/resetpassword" component={UpdatePassword} />
					<Route path="/homepage/products" component={HomepageProducts} />
					<Route path="/terms" component={Terms} />
                    <Route  path="/homepage/products/phones" component={HomepageProducts} />
                	<Route  path="/homepage/products/crypto" component={HomepageProducts} />
					<Route render={()=>{return<h1 style={center}>Page Not Found</h1>}} />
				</Switch>
				<Footer />
			</div>
	);

  }
}

export default Homepage;
