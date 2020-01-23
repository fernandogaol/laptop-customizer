import React, { Component } from "react";
import "./Cart.css";
import CartList from "../CartList/CartList";
import CartTotal from "../CartTotal/CartTotal";

export default class Cart extends Component {
  render() {
    const { selected, USCurrencyFormat, total } = this.props;

    const summary = Object.keys(selected).map((feature, idx) => (
      <CartList
        featureHash={feature + "-" + idx}
        feature={feature}
        selectedOption={selected[feature]}
        USCurrencyFormat={USCurrencyFormat}
      />
    ));
    // {
    //   const featureHash = feature + "-" + idx;
    //   const selectedOption = selected[feature];
    // });
    return (
      <div>
        <h2>Your cart</h2>
        {summary}
        <CartTotal total={total} USCurrencyFormat={USCurrencyFormat} />
      </div>
    );
  }
}
