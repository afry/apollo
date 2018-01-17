import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Button.css';

export default class Button extends React.Component {
    render() {
        return (
            <button 
                onClick={this.props.onClick}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                disabled={this.props.disabled}>
                {this.props.children}</button>
        );
    };
};

Button.defaultProps = {

};

Button.propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
};
