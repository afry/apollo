import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './ModalHeader.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  children: undefined,
  className: undefined,
  tag: 'h3',
};

const contextTypes = {
  onToggle: PropTypes.func,
};

class ModalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    this.context.onToggle(e);
  }

  render() {
    const {
      children,
      className,
      tag: Tag,
      ...other
    } = this.props;

    const { onToggle } = this.context;

    const classes = classNames(
      className,
      styles['modal-header'],
    );

    if (onToggle) {
      return (
        <div {...other} className={classes}>
          <Tag className={classNames(styles['modal-title'])}>
            {children}
          </Tag>
          <button
            area-label="Close"
            className={classNames(styles.close)}
            onClick={this.handleToggle}
            type="button"
          />
        </div>
      );
    }

    return (
      <div {...other} className={classes}>
        <Tag className={classNames(styles['modal-title'])}>
          {children}
        </Tag>
      </div>
    );
  }
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
ModalHeader.contextTypes = contextTypes;

export default ModalHeader;
