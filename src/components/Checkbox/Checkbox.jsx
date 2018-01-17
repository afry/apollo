import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Checkbox.css';

export default class Checkbox extends React.Component {
    render() {
        return (
            <label>
                <input 
                    type="checkbox"
                    role="checkbox"
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.checked}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur} />
                {this.props.label}
            </label>
        );
    };
};

Checkbox.defaultProps = {

};

Checkbox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};
