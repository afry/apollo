import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Alert.css';

const propTypes = {
  className: PropTypes.string,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  tag: PropTypes.oneOfTypes([
    PropTypes.func,
    PropTypes.string,
  ]),
};

const defaultProps = {
  className: undefined,
  onToggle: undefined,
  open: true,
  tag: 'div',
};

class Alert extends React.Component {
  constructor(props) {
    super(props);
    const { open } = this.props;
    this.state = { open };
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    const {
      className,
      onToggle,
      tag: Tag,
      ...other
    } = this.props;

    const { open } = this.state;

    const classes = classNames(
      className,
      styles.alert,
    );

    if (onToggle) {
      return (
        <Tag {...other} className={classes}>
          <div className={styles['alert-icon']}>
          </div>
          <div className={classNames(styles['alert-body'])}>
            {children}
          </div>
          <button
            area-label="Close"
            className={classNames(styles.close)}
            onClick={this.handleToggle}
            type="button"
          />
        </Tag>
      );
    }

    return (
      <div {...other} className={classes}>
        <Tag className={classNames(styles['modal-title'])}>
          {children}
        </Tag>
      </div>
    );    return (
      <Tag {...other} className={classes}>
    );
  }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
