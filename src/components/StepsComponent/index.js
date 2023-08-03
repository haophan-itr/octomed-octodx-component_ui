import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import checkIcon from '../../static/images/check-icon.svg';
import './styles.scss';

const StepsComponent = props => (
  <div className="steps-component">
    {
      _.map(props.titles, item => (
        <div
          key={item.id}
          className={classnames(props.isLargeStep ? 'step-child-large' : 'step-child-small',
            item.id + 1 < props.step ? 'complete' : item.id + 1 === props.step ? 'active' : undefined)}
        >
          {
              item.id + 1 < props.step
                ? (
                  <React.Fragment>
                    <div className={classnames(props.isLargeStep ? 'step-child-large__icon' : 'step-child-small__icon')}>
                      <img
                        src={checkIcon}
                        alt="Check complete icon"
                      />
                    </div>

                    <div className={classnames(props.isLargeStep ? 'step-child-large__name' : 'step-child-small__name')}>{item.name}</div>
                  </React.Fragment>
                )
                : (
                  <React.Fragment>
                    <div className={classnames(props.isLargeStep ? 'step-child-large__number' : 'step-child-small__number')}>{item.id + 1}</div>

                    <div className={classnames(props.isLargeStep ? 'step-child-large__name' : 'step-child-small__name')}>{item.name}</div>
                  </React.Fragment>
                )
            }
        </div>
      ))
    }
  </div>
);
StepsComponent.defaultProps = {
  isLargeStep: false,
};

StepsComponent.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.object).isRequired,
  step: PropTypes.number.isRequired,
  isLargeStep: PropTypes.bool,
};

export default StepsComponent;
