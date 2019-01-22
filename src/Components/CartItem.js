import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
      let {product} = this.props;
    return (
        <div className="box">
            {product.name} - ${product.price} - count : {product.quantity} 
            
        </div>
    )
  }
}
