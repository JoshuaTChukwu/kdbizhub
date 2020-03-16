import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getTransactions}  from '../../store/actions/transactionActions';

class  PendingTransactions extends Component {

    state={
        link:'https://kdbizhubpi.online/api/transactions/getClient.php?page=1',
        key: '1d4228f22fb41420639ca9084bacef85',
        client:this.props.user.username
    }

    handleClickNext=()=>{
        const {paging} = this.props;
        this.setState({
            link:paging.next
        })
        this.props.getTransactions(this.state.link, this.state);
    }

    handleClickFirst=()=>{
        const {paging} = this.props;
        this.setState({
            link:paging.first
        })
        this.props.getTransactions(this.state.link, this.state);
    }

    handleClickBack=()=>{
        const {paging} = this.props;
        this.setState({
            link:paging.back
        })
        this.props.getTransactions(this.state.link, this.state);
    }

    handleClickLast=()=>{
        const {paging} = this.props;
        this.setState({
            link:paging.last
        })
        this.props.getTransactions(this.state.link, this.state);
    }

	render(){
	const {transactions, paging} = this.props;
	const green={
		color:"green"
	}
	const red={
		color:"red"
	}
	var style1 = paging.first==="#" || !paging.first ? ({
		display: "none"
	}):({
		display: "inline-block"
	})
	var style2 = paging.back==="#" || !paging.first ? ({
		display: "none"
	}):({
		display: "inline-block"
	})
	var style3 = paging.next==="#" || !paging.first ? ({
		display: "none"
	}):({
		display: "inline-block"
	})
	var style4 = paging.last==="#" || !paging.first ? ({
		display: "none"
	}):({
		display: "inline-block"
	})
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'NGN',
		minimumFractionDigits: 2
	  })
	return (     
	<div className="Ttable">
	<table>
	<thead>
		<tr>
			<th>Product</th>
			<th>Amount</th>
			<th>Status</th>
			<th>Date</th>
			<th>Type</th>
		</tr>
		</thead>
		<tbody>
		{
			transactions && transactions.map(transaction =>{
                if(transaction.verified==="0"){
                    return(
		<tr key={transaction.transaction_id}>
			<td>{transaction.product}</td>
			<td>{formatter.format(transaction.amount)}</td>
			<td style={transaction.verified === "0"? (red):(green) }>{transaction.verified === "0"? "Pending" : "Cleared"}</td>
			<td>{transaction.transaction_date}</td>
			<td>{transaction.type}</td>
		</tr>
					)}else{
						return null
					}
			})
		}
		</tbody>
	</table>
            <div className="center">
                <button  style={style1} onClick={this.handleClickFirst}>First</button>
                <button style={style2} onClick={this.handleClickBack}>Back</button>
                <button style={style3} onClick={this.handleClickNext}>Next</button>
                <button style={style4} onClick={this.handleClickLast}>Last</button>
            </div>
</div>
	);
}
}

const matchDispatchToProps = (dispatch) =>{
	return{
	  getTransactions : (link, client)=> dispatch(getTransactions(link, client))
	}
  }

const matchStateToProps = (state)=>{
	return{
	  transactions:state.transaction.transactions,
	  paging:state.transaction.paging,
	  ready: state.transaction.ready,
	  user:state.auth.user
	}
  }

export default connect(matchStateToProps, matchDispatchToProps)(PendingTransactions);
