import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
      let {product} = this.props;
    return (
      <div className="box">
        {product.name} - ${product.price} - <button>add card</button>
      </div>
    )
  }
}
