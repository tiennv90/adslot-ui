'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { expandDts } from 'lib/utils';
import './styles.scss';

var Grid = function Grid(_ref) {
  var children = _ref.children,
      dts = _ref.dts;
  return React.createElement(
    'div',
    _extends({ className: 'grid-component' }, expandDts(dts)),
    children
  );
};

Grid.displayName = 'AlexandriaGridComponent';
Grid.propTypes = {
  children: PropTypes.node,
  dts: PropTypes.string
};

export default Grid;