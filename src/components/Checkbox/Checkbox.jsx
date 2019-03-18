import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Checkbox.css';

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  disabled: false,
  id: undefined,
  innerRef: undefined,
  name: undefined,
  onChange: undefined,
  value: undefined,
};

class Checkbox extends React.PureComponent {
  render() {
    const {className, innerRef, ...other} = this.props;

    const classes = classNames(className, styles.checkbox);

    return (
      <div className={classes}>
        <input {...other} ref={innerRef} type="checkbox" />
        <span className={classNames(styles.checkmark)} />
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
