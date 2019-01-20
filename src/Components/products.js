import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class Products extends Component {
  render() {
    let {products} = this.props;      
    return (
      <div>
          {
              products.map((item,index)=><ProductItem key={index} product={item} />)
          }
      </div>
    )
  }
}
