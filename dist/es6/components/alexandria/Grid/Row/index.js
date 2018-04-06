'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { classSuffixHelper, expandDts } from 'lib/utils';
import './styles.scss';

var GridRow = function GridRow(_ref) {
  var horizontalBorder = _ref.horizontalBorder,
      short = _ref.short,
      type = _ref.type,
      verticalCellBorder = _ref.verticalCellBorder,
      children = _ref.children,
      dts = _ref.dts;

  var componentClass = 'grid-component-row';
  var classesList = classSuffixHelper({
    classSuffixes: [type],
    suffixOptions: { horizontalBorder: horizontalBorder, short: short, verticalCellBorder: verticalCellBorder },
    componentClass: componentClass
  });

  return React.createElement(
    'div',
    _extends({ className: '' + componentClass + classesList }, expandDts(dts)),
    children
  );
};

GridRow.displayName = 'AlexandriaGridRowComponent';

GridRow.propTypes = {
  children: PropTypes.node,
  horizontalBorder: PropTypes.bool,
  short: PropTypes.bool,
  type: PropTypes.oneOf(['body', 'header', 'subfooter', 'footer']),
  verticalCellBorder: PropTypes.bool,
  dts: PropTypes.string
};

GridRow.defaultProps = {
  horizontalBorder: true,
  short: false,
  type: 'body',
  verticalCellBorder: false
};

export default GridRow;