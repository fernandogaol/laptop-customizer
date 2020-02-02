import React from 'react';
import './Options.css';

export default function FeatureList(props) {
  const { feature, featureHash } = props;
  return (
    <div>
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
      </fieldset>
    </div>
  );
}
