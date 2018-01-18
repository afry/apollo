import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Form.css';

export default class Form extends React.Component {
    render() {
          return <form className={styles.Form}>{this.props.children}</form>;
    };
};

Form.defaultProps = {

};

Form.propTypes = {
    children: PropTypes.node
};
