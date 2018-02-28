import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Heading.css';

const propTypes = {
  children: PropTypes.string,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
};

const Heading = (props) => {
  const {
    children,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
  } = props;

  if (h1) {
    return <h1 className={styles.Heading}>{children}</h1>;
  } else if (h2) {
    return <h2 className={styles.Heading}>{children}</h2>;
  } else if (h3) {
    return <h3 className={styles.Heading}>{children}</h3>;
  } else if (h4) {
    return <h4 className={styles.Heading}>{children}</h4>;
  } else if (h5) {
    return <h5 className={styles.Heading}>{children}</h5>;
  } else if (h6) {
    return <h6 className={styles.Heading}>{children}</h6>;
  }
  return null;
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
