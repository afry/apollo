import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Tag.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onRemove: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  onRemove: undefined,
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    if (!this.props.onRemove) {
      return;
    }

    this.props.onRemove(e);
  }

  render() {
    const { children, onRemove } = this.props;
    const outerClasses = classNames(styles.tag);
    const textClasses = classNames(styles.text);
    const removeClasses = classNames(styles['button-remove']);

    if (!onRemove) {
      return (
        <span className={outerClasses}>
          <span className={textClasses}>{children}</span>
        </span>
      );
    }

    return (
      <span className={outerClasses}>
        <span className={textClasses}>
          {children}
        </span>
        <button
          area-label="Remove"
          className={removeClasses}
          onClick={this.handleRemove}
          type="button"
        />
      </span>
    );
  }
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
