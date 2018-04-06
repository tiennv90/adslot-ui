'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// TODO: Move to Alexandria.
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { expandDts } from 'lib/utils';

require('./styles.scss');

var SplitPaneComponent = function SplitPaneComponent(_ref) {
  var children = _ref.children,
      dts = _ref.dts,
      additionalClassNames = _ref.additionalClassNames;

  var splitPaneClass = classNames.apply(undefined, ['splitpane-component'].concat(_toConsumableArray(additionalClassNames)));

  return React.createElement(
    'div',
    _extends({ className: splitPaneClass }, expandDts(dts)),
    children
  );
};

SplitPaneComponent.displayName = 'AdslotUiSplitPaneComponent';
SplitPaneComponent.propTypes = {
  additionalClassNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  dts: PropTypes.string
};
SplitPaneComponent.defaultProps = {
  additionalClassNames: []
};
export default SplitPaneComponent;