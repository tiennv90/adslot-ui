'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { expandDts } from 'lib/utils';
import './styles.scss';

var Alert = function Alert(_ref) {
  var type = _ref.type,
      children = _ref.children,
      dts = _ref.dts;
  return React.createElement(
    'div',
    _extends({ className: 'alert-component alert-component-' + type }, expandDts(dts)),
    children
  );
};

Alert.displayName = 'AlexandriaAlertComponent';

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  children: PropTypes.node.isRequired,
  dts: PropTypes.string
};

Alert.defaultProps = {
  type: 'info'
};

export default Alert;