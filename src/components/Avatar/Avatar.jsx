import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Avatar.css';

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf([
    'x-small',
    'small',
    'medium',
    'large',
    'x-large',
  ]),
  src: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  className: undefined,
  name: undefined,
  size: 'medium',
  src: undefined,
  tag: 'img',
};

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.handleError = this.handleError.bind(this);
    this.getInitials = this.getInitials.bind(this);
    this.state = { error: false };
  }

  // eslint-disable-next-line no-unused-vars
  componentWillReceiveProps(nextProps) {
    this.setState({ error: false });
  }

  getInitials() {
    const { name } = this.props;
    const parts = name.split(' ');
    let result = '';
    for (let i = 0; i < parts.length; i++) {
      result += parts[i].substr(0, 1).toUpperCase();
    }

    return result.slice(0, 2);
  }

  handleError() {
    this.setState({ error: true });
  }

  render() {
    const {
      className,
      name,
      size,
      tag: Tag,
      ...other
    } = this.props;

    const classes = classNames(
      className,
      styles.avatar,
      styles[`avatar-${size}`],
    );

    if (this.state.error) {
      return (
        <div className={classes}>
          <span>{this.getInitials()}</span>
        </div>
      );
    }

    return (
      <Tag
        {...other}
        alt={name}
        className={classes}
        onError={this.handleError}
      />
    );
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
