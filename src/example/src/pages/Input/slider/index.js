import React, { useState } from 'react';
import SliderComponent from '../../../componentUI/components/slider';

import './styles.scss';

const SliderPage = (props) => {
  const [slider, setSlider] = useState(4);

  const onChange = (value) => {
    setSlider(value);
  };

  const onFormattertip = value => `${value}%`;

  return (
    <div className="container-slider-page">
      <SliderComponent
        min={0}
        max={100}
        value={slider}
        onChange={onChange}
        step={1}
        tipFormatter={onFormattertip}
      />
    </div>
  );
};

export default SliderPage;
