import React, { Component } from 'react'
import {NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import AllTransactions from './transactionsAll';
import SoldTransactions from './soldTransactions';
import BoughtTransactions from './boughtTransactions';
import PendingTransactions from './pendingtransactions';
import {connect} from 'react-redux';
import {getTransactions}  from '../../store/actions/transactionActions';

class Transactions extends Component {
  
    constructor(props){
      super(props)
      props.getTransactions(this.state.tlink, this.state);
    }

    
	state={
    tlink:'https://kdbizhubpi.online/api/transactions/getClient.php?page=1',
    client:this.props.user.username,
    key:'1d4228f22fb41420639ca9084bacef85'
    }
		render(){
            const {ready, Err} = this.props;
          const  style={
              padding: "100px 0px",
            }
      if(ready){
			return (
                <BrowserRouter>
                { Err? <section id="transactions"><div className="transactions" style={style}> No Transactions Yet</div></section>
                :
                <section id="transactions">
                    <h2 className="grey">Transactions</h2>
                    <div className="transactions">
                        <NavLink to="/transactions"> All </NavLink>
                        <NavLink to="/transactions/sold"> Sold </NavLink>
                        <NavLink to="/transactions/bought"> Bought </NavLink>
                        <NavLink to="/transactions/pending"> Pending </NavLink>
                        <Switch>
                            <Route exact path="/transactions" component={AllTransactions} />
                            <Route  path="/transactions/sold" component={SoldTransactions} />
                            <Route  path="/transactions/bought" component={BoughtTransactions} />
                            <Route  path="/transactions/pending" component={PendingTransactions} />
                        </Switch>
                    </div>
                </section> }
                </BrowserRouter>
			);
      }else{
        return(
          <section id="transactions">
          <div className="card">
          <div className="loadinContain"> <img src={require("./images/loading.gif")} alt="loading" className="loading" /> </div>
          </div>
          </section>
        )
      }
		}
  }
  
  const matchDispatchToProps = (dispatch) =>{
		return{
		  getTransactions : (link, client)=> dispatch(getTransactions(link, client))
		}
	}
    
    const matchStateToProps = (state)=>{
        return{
          user:state.auth.user,
          transactions:state.transaction.transactions,
          paging:state.transaction.transactions,
          ready: state.transaction.ready, 
          Err:state.transaction.Err
        }
      }
  
      export default connect(matchStateToProps, matchDispatchToProps)(Transactions);
	
