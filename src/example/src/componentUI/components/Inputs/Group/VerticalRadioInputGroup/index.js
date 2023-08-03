import React from 'react';
import PropTypes from 'prop-types';
import RadioInputBlock from '../../Block/RadioInputBlock';
import './styles.scss';

const VerticalRadioInputGroup = props => (
  <div className="vertical-radio-container">
    <div className="title">{props.title}</div>
    <RadioInputBlock
      data={props.data1}
      name={props.name1}
      checked={props.checked1}
      defaultChecked={props.defaultChecked1}
      onChange={props.onChange1}
      id={props.id1}
      className="radio-input-1"
      type={props.type1}
      isLarge={props.isLarge}
    />

    <RadioInputBlock
      data={props.data2}
      name={props.name2}
      checked={props.checked2}
      defaultChecked={props.defaultChecked2}
      onChange={props.onChange2}
      id={props.id2}
      className="radio-input-2"
      type={props.type2}
      isLarge={props.isLarge}
    />
  </div>
);

VerticalRadioInputGroup.defaultProps = {
  name1: '',
  name2: '',
  type1: 'radio',
  type2: 'radio',
  checked1: false,
  checked2: false,
  onChange1: () => { },
  onChange2: () => { },
  isLarge: false,
  defaultChecked1: '',
  defaultChecked2: '',
};

VerticalRadioInputGroup.propTypes = {
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
  isLarge: PropTypes.bool,
  defaultChecked1: PropTypes.string,
  defaultChecked2: PropTypes.string,
};

export default VerticalRadioInputGroup;
