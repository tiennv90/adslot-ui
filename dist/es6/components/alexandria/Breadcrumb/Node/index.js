'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

var BreadcrumbNode = function BreadcrumbNode(_ref) {
  var isLast = _ref.isLast,
      node = _ref.node,
      onClick = _ref.onClick;

  var baseClass = 'breadcrumbnode-component';
  if (isLast) {
    return React.createElement(
      'span',
      { className: baseClass },
      node.label
    );
  }

  var onClickNode = function onClickNode() {
    return onClick(node.id);
  };
  return React.createElement(
    'span',
    { className: baseClass + ' ' + baseClass + '-link', onClick: onClickNode },
    node.label
  );
};

BreadcrumbNode.displayName = 'AlexandriaBreadcrumbNodeComponent';

BreadcrumbNode.propTypes = {
  isLast: PropTypes.bool.isRequired,
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired
};

export default BreadcrumbNode;