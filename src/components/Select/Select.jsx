import * as React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Select.css';

const propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  children: undefined,
  disabled: false,
  id: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: false,
  required: false,
  value: undefined,
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  render() {
    const {
      children,
      disabled,
      id,
      name,
      readOnly,
      required,
      value,
    } = this.props;

    return (
      <select
        className={styles.select}
        disabled={disabled}
        id={id}
        name={name}
        onChange={this.handleChange}
        readOnly={readOnly}
        required={required}
        value={value}
      >{children}
      </select>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
