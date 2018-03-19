import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Avatar.css';

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
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
    const Tag = 'img';

    const {
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
          <span>{this.props.alt}</span>
        </div>
      );
    }

    return (
      <Tag {...other} className={classes} onError={this.handleError} />
    );
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
