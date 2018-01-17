import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Heading.css';

export default class Heading extends React.Component {
    render() {
        const Element = this.props.element;
        return <Element className={styles.heading}>{this.props.children}</Element>;
    };
};

Heading.defaultProps = {
    element: 'h2'
};

Heading.propTypes = {
    element(props, propName, component) {
        const value = props[propName];
        if(!value.match(/^h1|h2|h3|h4|h5|h6|p$/)) {
            return new Error('Invalid input value: {' + value + '} for propName: {' + propName + '}');
        }
    },
    children: PropTypes.string
};
