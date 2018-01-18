import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Button.css';

export default class Button extends React.Component {
    render() {
        return (
            <button 
                className={styles.Button}
                type={this.props.type}
                onClick={this.props.onClick}
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}
                disabled={this.props.disabled}>
                {this.props.children}</button>
        );
    };
};

Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
    type(props, propName, component) {
        const value = props[propName];
        if(!value.match(/^button|submit|reset$/)) {
            return new Error('Invalid type: {' + value + '}');
        }
    },
    children: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};
