'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbNode from 'alexandria/Breadcrumb/Node';
import './styles.scss';

var Breadcrumb = function Breadcrumb(_ref) {
  var nodes = _ref.nodes,
      onClick = _ref.onClick,
      disabled = _ref.disabled;

  var baseClass = 'breadcrumb-component';
  var className = baseClass + ' ' + (disabled ? 'disabled' : '');
  var onClickFunc = function onClickFunc(newActiveId) {
    return !disabled && onClick(newActiveId);
  };

  if (nodes.length === 0) {
    return React.createElement('div', { className: className });
  }

  return React.createElement(
    'div',
    { className: className },
    React.createElement(BreadcrumbNode, { isLast: false, node: { id: 'all', label: 'All' }, onClick: onClickFunc }),
    _.map(nodes, function (node, index) {
      return React.createElement(
        'span',
        { className: baseClass + '-node', key: node.id },
        React.createElement(
          'span',
          { className: baseClass + '-node-divider' },
          ' > '
        ),
        React.createElement(BreadcrumbNode, { isLast: index === nodes.length - 1, node: node, onClick: onClickFunc })
      );
    })
  );
};

Breadcrumb.displayName = 'AlexandriaBreadcrumbComponent';

Breadcrumb.propTypes = {
  nodes: PropTypes.arrayOf(BreadcrumbNode.propTypes.node),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
Breadcrumb.defaultProps = {
  nodes: [],
  onClick: function onClick(newActiveId) {
    throw new Error('Alexandria Breadcrumb needs an onClick handler to take ' + newActiveId);
  },
  disabled: false
};

export default Breadcrumb;