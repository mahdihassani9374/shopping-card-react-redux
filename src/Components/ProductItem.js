import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {product , onClicked} = this.props;
    return (
      <div className="box">
        {product.name} - ${product.price} - count : {product.count} -
        <button disabled={product.count===0 ? 'disabled' : ''} onClick={onClicked}>add card</button>
      </div>
    )
  }
}
