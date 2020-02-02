import React, { Component } from 'react';
import slugify from 'slugify';
import Options from '../Options/Options';

export default class FeatureItems extends Component {
  render() {
    const { feature, items, selected, USCurrencyFormat } = this.props;
    return (
      <div key={slugify(JSON.stringify(items))} className="feature__item">
        <input
          type="radio"
          id={slugify(JSON.stringify(items))}
          className="feature__option"
          name={slugify(feature)}
          checked={items.name === selected[feature].name}
          onChange={e => this.props.updateFeature(feature, items)}
        />
        <label
          htmlFor={slugify(JSON.stringify(items))}
          className="feature__label"
        >
          {items.name} ({USCurrencyFormat.format(items.cost)})
          <Options
            featureHash={this.props.featureHash}
            feature={this.props.feature}
            STORE={this.props.STORE}
            items={this.props.items}
          />
        </label>
      </div>
    );
  }
}
