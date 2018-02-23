import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './RadioButton.css';

const propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
};

const defaultProps = {
  checked: false,
  disabled: false,
  id: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: false,
  value: undefined,
};

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.checked, this.props.value);
    }
  }

  render() {
    const {
      checked,
      disabled,
      id,
      name,
      readOnly,
      value,
    } = this.props;

    return (
      <div className={styles.radiobutton}>
        <input
          checked={checked}
          disabled={disabled}
          id={id}
          name={name}
          onChange={this.handleChange}
          readOnly={readOnly}
          type="radio"
          value={value}
        />
        <span className={styles.checkmark} />
      </div>
    );
  }
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;

export default RadioButton;
