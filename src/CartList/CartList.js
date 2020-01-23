import React, { Component } from "react";

export default class CartList extends Component {
  render() {
    const {
      featureHash,
      feature,
      selectedOption,
      USCurrencyFormat
    } = this.props;
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
}
