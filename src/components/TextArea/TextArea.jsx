import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './TextArea.css';

export default class TextArea extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label><br />
                <textarea 
                    name={this.props.name}
                    value={this.props.value}
                    defaultValue={this.props.defaultValue}
                    placeholder={this.props.placeholder}
                    maxLength={this.props.maxLength}
                    rows={this.props.rows}
                    cols={this.props.cols}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    readOnly={this.props.readOnly}
                    autoFocus={this.props.autoFocus} />
            </div>
        );
        return null;
    };
};

TextArea.defaultProps = {

};

TextArea.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.string,
    rows: PropTypes.string,
    cols: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
};
