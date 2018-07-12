import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import classNames from 'classnames';
import * as animationData from './loader.json';

const sizePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

const propTypes = {
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
  height: sizePropType,
  loop: PropTypes.bool,
  width: sizePropType,
};

const defaultProps = {
  autoPlay: true,
  className: undefined,
  height: 250,
  loop: true,
  width: 250,
};

const Loader = (props) => {
  const {
    autoPlay,
    className,
    height,
    loop,
    width,
  } = props;

  const classes = classNames(className);

  const defaultOptions = {
    animationData,
    autoplay: autoPlay,
    loop,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie
      className={classes}
      height={height}
      options={defaultOptions}
      width={width}
    />
  );
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
