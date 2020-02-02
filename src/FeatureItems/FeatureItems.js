import React, { Component } from 'react';
import slugify from 'slugify';
import Options from '../Options/Options';
import './FeatureItems.css';

export default class FeatureItems extends Component {
  render() {
    const { feature, items, selected, USCurrencyFormat } = this.props;
    return (
      <div className="feature__item">
        {items.map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash}>
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === selected[feature].name}
                onChange={e => this.props.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
                <Options
                  featureHash={this.props.featureHash}
                  feature={this.props.feature}
                  STORE={this.props.STORE}
                  items={this.props.items}
                />
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
