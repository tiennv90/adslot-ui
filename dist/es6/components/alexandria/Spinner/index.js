'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

var Spinner = function Spinner(_ref) {
  var size = _ref.size,
      colourStyle = _ref.colourStyle;
  return React.createElement(
    'div',
    { className: 'spinner-component' },
    React.createElement('div', { className: 'spinner spinner-' + size + ' spinner-colour-style-' + colourStyle })
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  colourStyle: PropTypes.string
};

Spinner.defaultProps = {
  size: 'large',
  colourStyle: 'default'
};

export default Spinner;