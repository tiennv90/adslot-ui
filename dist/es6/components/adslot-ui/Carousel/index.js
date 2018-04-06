'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Carousel from 'nuka-carousel';

require('./styles.scss');

var baseClass = 'carousel-component';
var navigationDelay = 600;
var decoratorStyles = {
  bottom: 0,
  width: '30px'
};

export var getPrevDecorator = function getPrevDecorator() {
  var previousSlideThrottled = void 0;
  var component = function component(_ref) {
    var previousSlide = _ref.previousSlide;

    if (!previousSlideThrottled) {
      previousSlideThrottled = _.throttle(previousSlide, navigationDelay);
    }
    return React.createElement('button', { className: baseClass + '-prev', onClick: previousSlideThrottled });
  };
  component.propTypes = { previousSlide: PropTypes.func.isRequired };

  return {
    component: component,
    position: 'TopLeft',
    style: decoratorStyles
  };
};

export var getNextDecorator = function getNextDecorator() {
  var nextSlideThrottled = void 0;
  var component = function component(_ref2) {
    var nextSlide = _ref2.nextSlide;

    if (!nextSlideThrottled) {
      nextSlideThrottled = _.throttle(nextSlide, navigationDelay);
    }
    return React.createElement('button', { className: baseClass + '-next', onClick: nextSlideThrottled });
  };
  component.propTypes = { nextSlide: PropTypes.func.isRequired };

  return {
    component: component,
    position: 'TopRight',
    style: decoratorStyles
  };
};

var CarouselComponent = function CarouselComponent(props) {
  var className = props.className,
      children = props.children;

  var decorators = [getPrevDecorator(), getNextDecorator()];

  return React.createElement(
    Carousel,
    _extends({ decorators: decorators }, props, { className: classNames(baseClass, className) }),
    children
  );
};

CarouselComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

// See Nuka Carousel docs for other options:
// https://github.com/FormidableLabs/nuka-carousel
CarouselComponent.defaultProps = {
  autoplay: true,
  autoplayInterval: 10000,
  cellAlign: 'center',
  cellSpacing: 15,
  slidesToShow: 2,
  slideWidth: '447.5px', // 440px (image width) + 15px (spacing) / 2
  wrapAround: true
};

export default CarouselComponent;