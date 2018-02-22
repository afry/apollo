import * as React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Label.css';

export default class Label extends React.PureComponent {
  render() {
    const classNames = (options) => {
      const result = options.join(' ').replace('false', '').trim();
      return result;
    };

    const className = classNames([
      styles.label,
      this.props.small && styles.small,
      this.props.large && styles.large,
    ]);

    return (
      <label className={className} htmlFor={this.props.htmlFor}>
        {this.props.children}
      </label>
    );
  }
}

Label.defaultProps = {
  children: undefined,
  htmlFor: undefined,
  large: true,
  small: false,
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
};
