import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getGiftCards} from '../../store/actions/giftCardsActions';
class GiftCards extends Component {
    state={
        link:'   https://kdbizhubpi.online/api/products/giftcards/getavailable.php?page=1'
    }

    handleClickNext=()=>{
        const {paging} = this.props;
        this.props.getGiftCards(paging.next);
    }

    handleClickFirst=()=>{
        const {paging} = this.props;
        this.props.getGiftCards(paging.first);
    }

    handleClickBack=()=>{
        const {paging} = this.props;
        this.props.getGiftCards(paging.back);
    }

    handleClickLast=()=>{
        const {paging} = this.props;
        this.props.getGiftCards(paging.last);
    }


		render(){
            const {giftCards, ready, paging, gerr} = this.props;
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
                if(gerr){
return(
    <div className="card"> <p>No Gift Card Available at the Moment </p> </div>
)
                }else{
			return (
                <div className="card">
            <div className="product_flexx">
            {
                giftCards && giftCards.map(gift_card =>{
                    return(
                <a href={"/signin"} key={gift_card.card_id} className="product_item_two">
                    <div>
                        <img src={gift_card.picture} alt="gift card" />
                        <p>{gift_card.name}</p>
                    </div>
                    <div>
                        <p>Buy {formatter.format(gift_card.out_price)}</p>
                        <p>Sell {formatter.format(gift_card.in_price)}</p>
                    </div>
                </a>
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
				return <div className="loadinContain"> <img src={require("./images/loading.gif")} alt="loading" className="loading" /> </div>
			}
		}
	}
	
    const matchDispatchToProps = (dispatch) =>{
        return{
          getGiftCards : (link)=> dispatch(getGiftCards(link))
        }
      }
    
    const matchStateToProps = (state)=>{
        return{
          giftCards:state.giftCard.giftCards,
          paging:state.giftCard.paging,
          ready: state.giftCard.ready,
          gerr:state.giftCard.Err
        }
      }
  
      export default connect(matchStateToProps, matchDispatchToProps)(GiftCards);
