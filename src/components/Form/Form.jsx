import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Form.css';

export default class Form extends React.PureComponent {
  render() {
    return <form className={styles.Form}>{this.props.children}</form>;
  }
}

Form.defaultProps = {
  children: undefined,
};

Form.propTypes = {
  children: PropTypes.node,
};
