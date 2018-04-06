'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import { expandDts } from 'lib/utils';

require('./styles.scss');

var HelpIconPopover = function HelpIconPopover(_ref) {
  var children = _ref.children,
      id = _ref.id,
      placement = _ref.placement;

  var popover = React.createElement(
    Popover,
    { id: 'popover-' + id },
    children
  );

  return React.createElement(
    'div',
    _extends({}, expandDts(id), { className: 'help-icon-popover-component' }),
    React.createElement(
      OverlayTrigger,
      { trigger: ['focus', 'hover'], placement: placement, overlay: popover },
      React.createElement('div', { className: 'help-icon-popover-component-trigger' })
    )
  );
};

HelpIconPopover.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

HelpIconPopover.defaultProps = {
  placement: 'right'
};

export default HelpIconPopover;