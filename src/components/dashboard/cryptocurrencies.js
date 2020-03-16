import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCryptoCurrencies} from '../../store/actions/cryptoCurrenciesActions';
class CryptoCurrencies extends Component {
    state={
        link:'https://kdbizhubpi.online/api/products/currency/getavailable.php?page=1'
    }

    handleClickNext=()=>{
        const {paging} = this.props;
        this.props.getCryptoCurrencies(paging.next);
    }

    handleClickFirst=()=>{
        const {paging} = this.props;
        this.props.getCryptoCurrencies(paging.first);
    } 
    handleClickBack=()=>{
        const {paging} = this.props;
        
        this.props.getCryptoCurrencies(paging.back);
    }

    handleClickLast=()=>{
        const {paging} = this.props;
        
        this.props.getCryptoCurrencies(paging.last);
    }



		render(){
            const {cryptoCurrencies, ready, paging, cerr} = this.props;
            var style1 = paging.first==="#"|| !paging.first? ({
                display: "none"
            }):({
                display: "inline-block"
            })
            var style2 = paging.back==="#"|| !paging.first? ({
                display: "none"
            }):({
                display: "inline-block"
            })
            var style3 = paging.next==="#"|| !paging.first? ({
                display: "none"
            }):({
                display: "inline-block"
            })
            var style4 = paging.last==="#"|| !paging.first? ({
                display: "none"
            }):({
                display: "inline-block"
            })
            const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'NGN',
				minimumFractionDigits: 2
				})
            if(ready){
                if(cerr){
                    return(
                        <div className="card"> <p>No Crypto Currency Available at the Moment </p> </div>
                    )
                }else{
			return (
                <div className="card">
            <div className="product_flex">
            {
                cryptoCurrencies && cryptoCurrencies.map(cryptoCurrency =>{
                    return(
                <Link to={"/products/cryptocurrencies/"+cryptoCurrency.crypto_id} key={cryptoCurrency.crypto_id} className="product_item_two">
                    <div>
                        <img src={cryptoCurrency.picture} alt="gift card" />
                        <p>{cryptoCurrency.name}</p>
                    </div>
                    <div>
                        <p>Buy {formatter.format(cryptoCurrency.convertRate)}</p>
                        <p>Sell {formatter.format(cryptoCurrency.rate)}</p>
                    </div>
                </Link>
                    )
                })
            }
            </div>
            <div className="center">
                <button  style={style1} onClick={this.handleClickFirst}>First</button>
                <button style={style2} onClick={this.handleClickBack}>Back</button>
                <button style={style3} onClick={this.handleClickNext}>Next</button>
                <button style={style4} onClick={this.handleClickLast}>Last</button>
            </div>
        </div>
			);
            }
        }else{
                return (
                    <div className="card">
                    <div className="loadinContain"> <img src={require("./images/loading.gif")} alt="loading" className="loading" /> </div>
                    </div>
            );
            }
		}
	}
	
    const matchDispatchToProps = (dispatch) =>{
        return{
            getCryptoCurrencies : (link)=> dispatch(getCryptoCurrencies(link))
        }
      }
    
    const matchStateToProps = (state)=>{
        return{
          cryptoCurrencies:state.cryptoCurrency.cryptoCurrencies,
          paging:state.cryptoCurrency.paging,
          ready: state.cryptoCurrency.ready,
          cerr: state.cryptoCurrency.Err
        }
      }
  
      export default connect(matchStateToProps, matchDispatchToProps)(CryptoCurrencies);
