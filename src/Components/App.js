import React, { Component } from 'react'
import shop from '../shop';
import Products from './products';
import '../Styles/index.css';


export default class App extends Component {
  state = {
    products : []
  }
  componentDidMount() {
    shop.getProducts((products)=> {    
      this.setState({products})
    })
  }
  render() {
    return (
      <div>
        <h1>shopping cart</h1>
        <Products products={this.state.products} />       
      </div>
    )
  }
}
