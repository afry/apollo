import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Tag.css';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  onClose: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  className: undefined,
  onClose: undefined,
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    if (!this.props.onClose) {
      return;
    }

    this.props.onClose(e);
  }

  render() {
    const {
      children,
      className,
      onClose
    } = this.props;

    const classes = classNames(
      className,
      styles.tag
    );

    let closeButton = null;
    if (onClose) {
      closeButton = (
        <button
          area-label="Close"
          className={classNames(styles.close)}
          onClick={this.handleClose}
          type="button"
        />
      );
    }

    return (
      <span className={classes}>
        <span className={classNames(styles.text)}>
          {children}
        </span>
        {closeButton}
      </span>
    );
  }
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
