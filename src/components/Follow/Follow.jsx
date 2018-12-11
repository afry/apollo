import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Follow.css';

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.string
  ]),
  className: PropTypes.string,
  icon: PropTypes.string,
  onToggle: PropTypes.func,
};

const defaultProps = {
  active: true,
  children: undefined,
  className: undefined,
  icon: undefined,
  onToggle: undefined,
};

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    const { onToggle } = this.props;
    if (!onToggle) {
      return;
    }
    onToggle(e);
  }

  render() {
    const {
      active,
      children,
      className,
      icon,
      onToggle,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      styles.follow,
      active ? styles.active : 'undefined',
    );

    return (
      <span {...other} className={classes}>
        {icon && <img alt="" className={styles['follow-icon']} src={icon} />}
        <span className={styles['follow-text']}>
          {children}
        </span>
        {onToggle && (
          <button
            area-label="Control"
            className={classNames(styles.close)}
            data-content={active ? '×' : '+'}
            onClick={this.handleToggle}
            type="button"
          />
        )}
      </span>
    );
  }
}

Follow.propTypes = propTypes;
Follow.defaultProps = defaultProps;

export default Follow;
