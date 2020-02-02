import React, { Component } from 'react';
import FeatureItems from '../FeatureItems/FeatureItems';
import './Features.css';

export default class Features extends Component {
  render() {
    return (
      <div>
        <h2>Customize your laptop</h2>
        {Object.keys(this.props.STORE).map((feature, idx) => {
          return (
            <fieldset className="feature" key={feature + '-' + idx}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              <FeatureItems
                feature={feature}
                selected={this.props.selected}
                items={this.props.STORE[feature]}
                updateFeature={this.props.updateFeature}
                featureHash={feature + '-' + idx}
                USCurrencyFormat={this.props.USCurrencyFormat}
                STORE={this.props.STORE}
              />
            </fieldset>
          );
        })}
      </div>
    );
  }
}
