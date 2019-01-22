import React, { Component } from 'react'
import shop from '../shop';
import Products from './products';
import {connect} from 'react-redux';
import '../Styles/index.css';
import {reciveProduct} from '../Actions/index'; 
import Cart from './Cart';


class App extends Component {
  componentDidMount() {
    shop.getProducts((products)=> {           
      this.props.dispatch(reciveProduct(products))
    })
  }
  render() {
    return (
      <div>
        <h1>products</h1>
        <hr />
        <Products />   
        <hr />
        <Cart />    
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    // reciveProducts : products => dispatch(reciveProduct(products))
  }
}

export default connect(mapDispatchToProps)(App);
