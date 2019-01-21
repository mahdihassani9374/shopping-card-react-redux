import React, { Component } from 'react'
import shop from '../shop';
import Products from './products';
import {connect} from 'react-redux';
import '../Styles/index.css';
import {reciveProduct} from '../Actions/index'; 


class App extends Component {
  componentDidMount() {
    shop.getProducts((products)=> {           
      this.props.dispatch(reciveProduct(products))
    })
  }
  render() {
    return (
      <div>
        <h1>shopping cart</h1>
        <hr />
        <Products />       
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
