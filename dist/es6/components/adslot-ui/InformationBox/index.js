'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import SvgSymbol from 'alexandria/SvgSymbol';

require('./styles.scss');

var InformationBox = function InformationBox(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      title = _ref.title;
  return React.createElement(
    'div',
    { className: 'information-box' },
    React.createElement(
      'div',
      { className: 'information-box-icon' },
      icon ? React.createElement(SvgSymbol, { classSuffixes: ['70'], href: icon }) : null
    ),
    React.createElement(
      'div',
      { className: 'information-box-text' },
      title ? React.createElement(
        'label',
        { className: 'information-box-title' },
        title
      ) : null,
      React.createElement(
        'div',
        { className: 'information-box-node' },
        children
      )
    )
  );
};

InformationBox.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  icon: PropTypes.string
};

export default InformationBox;