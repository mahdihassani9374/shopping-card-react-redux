import React, { Component } from 'react'

export default class Products extends Component {
  render() {
      let {products} = this.props;
      console.log(products);
    return (
      <ul>
          {
              products.map((item,index)=><li key={index}>{item.name}</li>)
          }
      </ul>
    )
  }
}
