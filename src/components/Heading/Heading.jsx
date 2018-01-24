import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Heading.css';

export default class Heading extends React.PureComponent {
  render() {
    if (this.props.h1) {
      return <h1 className={styles.Heading}>{this.props.children}</h1>;
    } else if (this.props.h2) {
      return <h2 className={styles.Heading}>{this.props.children}</h2>;
    } else if (this.props.h3) {
      return <h3 className={styles.Heading}>{this.props.children}</h3>;
    } else if (this.props.h4) {
      return <h4 className={styles.Heading}>{this.props.children}</h4>;
    } else if (this.props.h5) {
      return <h5 className={styles.Heading}>{this.props.children}</h5>;
    } else if (this.props.h6) {
      return <h6 className={styles.Heading}>{this.props.children}</h6>;
    }
    return null;
  }
}

Heading.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  children: undefined,
};

Heading.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  children: PropTypes.string,
};
