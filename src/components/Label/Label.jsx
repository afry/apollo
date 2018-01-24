import * as React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Label.css';

export default class InputField extends React.PureComponent {
  render() {
    return (
      <label htmlFor={this.props.htmlFor} className={styles.Label}>
        {this.props.children}
      </label>
    );
  }
}

InputField.defaultProps = {
  children: undefined,
  htmlFor: undefined,
};

InputField.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

