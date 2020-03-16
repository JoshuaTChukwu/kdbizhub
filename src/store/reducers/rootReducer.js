import {combineReducers} from 'redux';
import authReducer from './authReducer';
import giftCardReducer from './giftCardsReducer'
import rateReducer from './rateReducer'
import phonesReducer from './phonesReducer'
import cryptoCurrenciesReducer from './cryptoCurrenciesReducer'
import TransactionReducer from './transactionReducer'
import btcReducer from './btcReducer'

const rootReducer= combineReducers({
    auth:authReducer,
    giftCard:giftCardReducer,
    phone:phonesReducer,
    cryptoCurrency:cryptoCurrenciesReducer,
    transaction:TransactionReducer,
    rate:rateReducer,
    btc:btcReducer
})

export default rootReducer;