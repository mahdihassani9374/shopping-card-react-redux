import React, { Component } from 'react'
import ProductItem from './ProductItem';
import {connect} from 'react-redux';

class Products extends Component {
  render() {
    
    let {products} = this.props; 
    console.log(products);     
    return (
      <div>
          {
              products.map((item,index)=><ProductItem key={index} product={item} />)
          }
      </div>
    )
  }
}

const getProducts = (products) => Object.keys(products).map(id=>products[id])

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products : getProducts(state.products)
  }
}

export default connect(mapStateToProps)(Products)