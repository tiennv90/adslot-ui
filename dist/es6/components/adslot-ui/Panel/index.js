'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import SvgSymbol from 'alexandria/SvgSymbol';

require('./styles.scss');

var PanelComponent = function PanelComponent(_ref) {
  var id = _ref.id,
      dts = _ref.dts,
      icon = _ref.icon,
      title = _ref.title,
      isCollapsed = _ref.isCollapsed,
      onClick = _ref.onClick,
      children = _ref.children;

  var baseClass = 'panel-component';
  var classesCombined = isCollapsed ? [baseClass, 'collapsed'].join(' ') : baseClass;
  var onHeaderClick = function onHeaderClick() {
    return onClick(id);
  };

  return React.createElement(
    'div',
    { className: classesCombined, 'data-test-selector': dts },
    React.createElement(
      'div',
      { className: 'panel-component-header clearfix', onClick: onHeaderClick },
      icon ? React.createElement(SvgSymbol, { href: icon.href }) : null,
      title
    ),
    React.createElement(
      'div',
      { className: 'panel-component-content' },
      children
    )
  );
};

PanelComponent.propTypes = {
  id: PropTypes.string.isRequired,
  dts: PropTypes.string,
  icon: PropTypes.shape(SvgSymbol.propTypes),
  title: PropTypes.node.isRequired,
  isCollapsed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

PanelComponent.defaultProps = {
  isCollapsed: false
};

export default PanelComponent;