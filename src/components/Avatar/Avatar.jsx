import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Avatar.css';

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  src: PropTypes.string,
};

const defaultProps = {
  alt: undefined,
  className: undefined,
  size: 'small',
  src: undefined,
};

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.handleError = this.handleError.bind(this);
    this.state = { error: false };
  }

  handleError() {
    this.setState({ error: true });
  }

  render() {
    const {
      alt,
      className,
      size,
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
          <span>{alt}</span>
        </div>
      );
    }

    return (
      <img
        {...other}
        alt={alt}
        className={classes}
        onError={this.handleError}
      />
    );
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
