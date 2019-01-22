import {combineReducers} from 'redux';
import products from './products';
import cart from './addToCart';
export default combineReducers({
    products,
    cart
})