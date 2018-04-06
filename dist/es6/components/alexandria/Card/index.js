'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { expandDts } from 'lib/utils';
import './styles.scss';

var CardContent = function CardContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stretch = _ref.stretch,
      fill = _ref.fill,
      append = _ref.append,
      dts = _ref.dts;

  var baseClass = 'card-component-content';
  var contentClassNames = [baseClass];

  if (stretch) contentClassNames.push('stretch');
  if (fill) contentClassNames.push('fill');
  if (append) contentClassNames.push('append');
  if (className) contentClassNames.push(className);

  return React.createElement(
    'div',
    _extends({ className: contentClassNames.join(' ') }, expandDts(dts)),
    children
  );
};

CardContent.displayName = 'AlexandriaCardContentComponent';

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fill: PropTypes.bool,
  stretch: PropTypes.bool,
  append: PropTypes.bool,
  dts: PropTypes.string
};

CardContent.defaultProps = {
  fill: false,
  stretch: false,
  append: false
};

var Card = function Card(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      accent = _ref2.accent,
      dts = _ref2.dts;

  var baseClass = 'card-component';
  var containerClassNames = [baseClass];
  if (accent) containerClassNames.push('accent accent-' + accent);
  if (className) containerClassNames.push(className);

  var nestedChildren = React.Children.map(children, function (child // eslint-disable-line lodash/prefer-lodash-method
  ) {
    return !_.get(child, 'props.append') ? child : null;
  });
  var appendedChildren = React.Children.map(children, function (child // eslint-disable-line lodash/prefer-lodash-method
  ) {
    return _.get(child, 'props.append') ? child : null;
  });

  return React.createElement(
    'div',
    _extends({ className: containerClassNames.join(' ') }, expandDts(dts)),
    React.createElement(
      'div',
      { className: baseClass + '-content-container' },
      nestedChildren
    ),
    appendedChildren
  );
};

Card.displayName = 'AlexandriaCardComponent';

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  accent: PropTypes.string,
  dts: PropTypes.string
};

export default {
  Container: Card,
  Content: CardContent
};