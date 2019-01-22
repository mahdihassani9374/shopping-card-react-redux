import React, { Component } from 'react'
import ProductItem from './ProductItem';
import {connect} from 'react-redux';
import {addToCart} from '../Actions';

class Products extends Component {
  render() {
    
    let {products,dispatch} = this.props;       
    return (
      <div>
          {
              products.map((item,index)=><ProductItem onClicked={()=>dispatch(addToCart(item.id))} key={index} product={item} />)
          }
      </div>
    )
  }
}

const getProducts = (products) => Object.keys(products).map(id=>products[id])

const mapStateToProps = (state) => { 
  return {
    products : getProducts(state.products)
  }
}

export default connect(mapStateToProps)(Products)