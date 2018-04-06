'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import SvgSymbolCircle from 'alexandria/SvgSymbol/Circle';
import './styles.scss';

var Empty = function Empty(_ref) {
  var collection = _ref.collection,
      svgSymbol = _ref.svgSymbol,
      text = _ref.text,
      hideIcon = _ref.hideIcon;

  var classSuffixes = _.isEmpty(svgSymbol.classSuffixes) ? Empty.defaultProps.svgSymbol.classSuffixes : svgSymbol.classSuffixes;

  if (_.isEmpty(collection)) {
    return React.createElement(
      'div',
      { className: 'empty-component' },
      hideIcon ? null : React.createElement(SvgSymbolCircle, { href: svgSymbol.href, classSuffixes: classSuffixes }),
      React.createElement(
        'div',
        { className: 'empty-component-text' },
        text
      )
    );
  }

  return React.createElement('div', null);
};

Empty.displayName = 'AlexandriaEmptyComponent';

Empty.propTypes = {
  collection: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.object]),
  svgSymbol: PropTypes.shape(SvgSymbolCircle.propTypes),
  text: PropTypes.node, // can be string or, if you want rich formatting, a node
  hideIcon: PropTypes.bool
};

Empty.defaultProps = {
  svgSymbol: {
    classSuffixes: ['gray-darker', '70', 'circle']
  },
  text: 'Nothing to show.',
  hideIcon: false
};

export default Empty;