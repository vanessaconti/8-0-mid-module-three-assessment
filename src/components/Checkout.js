import React from "react";
import formatPrice from "../helpers/formatPrice";

export class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      card: "",
      zip: "",
    };
  }

  submitInfo = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, card, zip } = this.state;

    if (!first_name || !last_name || !email || !card || !zip) {
      window.alert("Input is not valid");
    } else if (zip.length !== 5) {
      window.alert("Zip code is not valid");
    } else if (card.length !== 16) {
      window.alert("Credit card number is not valid");
    } else {
      window.alert(
        `Purchase complete. You will be charged ${formatPrice(
          this.props.total
        )}`
      );
    }
  };

  userInput = (e) => {
    let key = e.target.id;
    let value = e.target.value;

    this.setState({
      [key]: value,
    });
  };

  render() {
    const userInput = this.userInput;

    return (
      <form onSubmit={this.submitInfo}>
        <h1>Checkout</h1>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={userInput}></input>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={userInput}></input>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={userInput}></input>
        <label htmlFor="creditCard">Credit Card</label>
        <input type="text" id="creditCard" onChange={userInput}></input>
        <label htmlFor="zipCode">Zip Code</label>
        <input type="text" id="zipCode" onChange={userInput}></input>
        <button type="submit">Buy Now</button>
      </form>
    );
  }
}

export default Checkout;
