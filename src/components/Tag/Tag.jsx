import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Tag.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClose: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  onClose: undefined,
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleRemove(e) {
    if (!this.props.onClose) {
      return;
    }

    this.props.onClose(e);
  }

  render() {
    const { children, onClose } = this.props;
    const outerClasses = classNames(styles.tag);
    const textClasses = classNames(styles.text);
    const closeClasses = classNames(styles.close);

    if (!onClose) {
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
          area-label="Close"
          className={closeClasses}
          onClick={this.handleClose}
          type="button"
        />
      </span>
    );
  }
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
