'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

var BorderedWell = function BorderedWell(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    { className: 'borderedwell-component' },
    children
  );
};

BorderedWell.displayName = 'AlexandriaBorderedWellComponent';

BorderedWell.propTypes = {
  children: PropTypes.node
};

export default BorderedWell;