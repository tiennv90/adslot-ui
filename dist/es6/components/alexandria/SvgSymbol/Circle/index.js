'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import SvgSymbol from 'alexandria/SvgSymbol';
import { classSuffixHelper } from 'lib/utils';
import './styles.scss';

var SvgSymbolCircle = function SvgSymbolCircle(props) {
  var componentClass = 'svgsymbolcircle-component';
  var classesList = classSuffixHelper({
    classSuffixes: props.classSuffixes,
    componentClass: componentClass
  });
  return React.createElement(
    'div',
    { className: '' + componentClass + classesList },
    React.createElement(SvgSymbol, _extends({ classSuffixes: props.classSuffixes, href: props.href }, props))
  );
};

SvgSymbolCircle.displayName = 'AlexandriaSvgSymbolCircleComponent';

SvgSymbolCircle.propTypes = {
  classSuffixes: SvgSymbol.propTypes.classSuffixes, // eslint-disable-line react/no-typos
  href: PropTypes.string
};

export default SvgSymbolCircle;