import React, { Component } from 'react'
import {connect} from 'react-redux';
import CartItem from './CartItem';

class Cart extends Component {
  render() {
      let {cart , total} = this.props;  
      console.log(cart,total); 
    return (
      <div>
        <h1>cart shopping</h1>
        {
            cart.map((item,index)=>
            <CartItem product={item} key={index} />)
        }
        <p>
             <button disabled={cart.length===0}>check out</button>  
        </p>
        <p>total : {total}</p>
      </div>
    )
  }
}

const getProduct = state => {
    return state.cart.addedId.map(id=>({
        ...state.products[id],
         quantity : state.cart.quantityId[id]
    }))   
}

const total = state => {
 
 let tota = state.cart.addedId.reduce((total,id)=>total+=state.products[id].price * (state.cart.quantityId[id]),0);
 return tota
}

const mapStateToProps = state => {   
    return {
        cart : getProduct(state),
        total : total(state)
    }
}

export default  connect(mapStateToProps)(Cart);
