import "./App.css";
import React from "react";
import productData from "./data/productData";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
//

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      purchase: [],
    };

    this.data = productData;
  }
  addToCart = (product) => {
    let purchase = this.state.purchase;
    this.setState({ purchase: purchase.concat(product) });
  };

  render() {
    const { purchase } = this.state;
    const subtotal = purchase.reduce((a, b) => a + b.price, 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    return (
      <div className="App">
        <div>
          <h2>My Garage Sale</h2>
          <Products products={this.data} addToCart={this.addToCart} />
        </div>

        <div className="cart">
          <Cart
            purchase={purchase}
            subtotal={subtotal}
            tax={tax}
            total={total}
          />
        </div>

        <div className="#checkout">
          <Checkout total={total} />
        </div>
      </div>
    );
  }
}
export default App;
