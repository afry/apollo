import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Tag.css';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string
  ]),
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  icon: PropTypes.string,
  onClose: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  className: undefined,
  color: 'secondary',
  icon: undefined,
  onClose: undefined,
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    const { onClose } = this.props;
    if (!onClose) {
      return;
    }
    onClose(e);
  }

  render() {
    const {
      children,
      className,
      color,
      icon,
      onClose,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      styles.tag,
      styles[`tag-${color}`],
    );

    return (
      <span {...other} className={classes}>
        {icon && (
          <img
            alt=""
            className={styles['tag-icon']}
            src={icon}
          />
        )}
        <span className={styles['tag-text']}>
          {children}
        </span>
        {onClose && (
          <button
            className={styles.close}
            onClick={this.handleClose}
            type="button"
          />
        )}
      </span>
    );
  }
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
