'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { classSuffixHelper } from 'lib/utils';
import './styles.scss';

var SvgSymbol = function SvgSymbol(props) {
  var classSuffixes = props.classSuffixes,
      href = props.href,
      onClick = props.onClick;

  var componentClass = 'svg-symbol-component';
  var suffixOptions = { clickable: props.onClick };
  var classesList = classSuffixHelper({
    classSuffixes: classSuffixes,
    suffixOptions: suffixOptions,
    componentClass: componentClass
  });

  return React.createElement(
    'svg',
    { className: '' + componentClass + classesList, onClick: onClick },
    React.createElement('use', { href: href, xlinkHref: href })
  );
};

SvgSymbol.displayName = 'AlexandriaSvgSymbolComponent';

SvgSymbol.propTypes = {
  classSuffixes: PropTypes.arrayOf(PropTypes.string.isRequired),
  href: PropTypes.string,
  onClick: PropTypes.func
};

SvgSymbol.defaultProps = {
  classSuffixes: []
};

export default SvgSymbol;