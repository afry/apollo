import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import * as animationData from './loader.json'; // eslint-disable-line import/no-unresolved

const sizePropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const propTypes = {
  autoPlay: PropTypes.bool,
  height: sizePropType,
  loop: PropTypes.bool,
  width: sizePropType,
};

const defaultProps = {
  autoPlay: true,
  height: 250,
  loop: true,
  width: 250,
};

const Loader = ({ autoPlay, height, loop, width }) => {
  const defaultOptions = {
    animationData: animationData.default,
    autoplay: autoPlay,
    loop,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie height={height} options={defaultOptions} width={width} />;
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
