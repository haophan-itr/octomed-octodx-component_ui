import React from 'react';
import PropTypes from 'prop-types';
import RadioInputBlock from '../../Block/RadioInputBlock';
import './styles.scss';

const HorizontalRadioInputGroup = props => (
  <div className="horizontal-radio-container">
    <div className="title">{props.title}</div>
    <div className="input-container">
      <RadioInputBlock
        data={props.data1}
        name={props.name1}
        checked={props.checked1}
        onChange={props.onChange1}
        id={props.id1}
        className="vertical-radio-input-1"
        type={props.type1}
        isLarge={props.isLarge}
      />

      <RadioInputBlock
        data={props.data2}
        name={props.name2}
        checked={props.checked2}
        onChange={props.onChange2}
        id={props.id2}
        className="vertical-radio-input-2"
        type={props.type2}
        isLarge={props.isLarge}
      />

    </div>
  </div>
);

HorizontalRadioInputGroup.defaultProps = {
  name1: '',
  name2: '',
  type1: 'radio',
  type2: 'radio',
  checked1: false,
  checked2: false,
  onChange1: () => { },
  onChange2: () => { },
};

HorizontalRadioInputGroup.propTypes = {
  title: PropTypes.string.isRequired,
  id1: PropTypes.string.isRequired,
  id2: PropTypes.string.isRequired,
  name1: PropTypes.string,
  name2: PropTypes.string,
  type1: PropTypes.string,
  type2: PropTypes.string,
  data1: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  data2: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  checked1: PropTypes.bool,
  checked2: PropTypes.bool,
  onChange1: PropTypes.func,
  onChange2: PropTypes.func,
};

export default HorizontalRadioInputGroup;
