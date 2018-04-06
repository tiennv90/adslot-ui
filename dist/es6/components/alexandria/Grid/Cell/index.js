'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import PropTypes from 'prop-types';
import { expandDts, classSuffixHelper } from 'lib/utils';
import './styles.scss';

var GridCell = function GridCell(_ref) {
  var children = _ref.children,
      classSuffixes = _ref.classSuffixes,
      onClick = _ref.onClick,
      stretch = _ref.stretch,
      dts = _ref.dts,
      addonClassNames = _ref.addonClassNames;

  var componentClass = 'grid-component-cell';
  var classesList = classSuffixHelper({
    classSuffixes: classSuffixes,
    suffixOptions: {
      stretch: stretch,
      clickable: onClick
    },
    componentClass: componentClass
  });
  var baseClassNames = '' + componentClass + classesList;
  var className = addonClassNames ? [baseClassNames].concat(_toConsumableArray(addonClassNames)).join(' ') : baseClassNames;
  var extraProps = onClick ? { onClick: onClick } : {};

  return React.createElement(
    'div',
    _extends({ className: className }, extraProps, expandDts(dts)),
    children
  );
};

GridCell.displayName = 'AlexandriaGridCellComponent';

GridCell.propTypes = {
  addonClassNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  classSuffixes: PropTypes.arrayOf(PropTypes.string),
  dts: PropTypes.string,
  onClick: PropTypes.func,
  stretch: PropTypes.bool
};

GridCell.defaultProps = {
  classSuffixes: [],
  stretch: false
};

export default GridCell;