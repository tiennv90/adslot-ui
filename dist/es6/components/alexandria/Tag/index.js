'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import SvgSymbol from 'alexandria/SvgSymbol';
import { classSuffixHelper } from 'lib/utils';
import './styles.scss';

var componentClass = 'tag-component';

export var ActionButton = function ActionButton(_ref) {
  var onAction = _ref.onAction,
      id = _ref.id,
      actionIconSvgHref = _ref.actionIconSvgHref;
  return React.createElement(
    'span',
    { className: 'action-button', onClick: function onClick() {
        return onAction(id);
      } },
    React.createElement(SvgSymbol, { href: actionIconSvgHref })
  );
};

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  actionIconSvgHref: PropTypes.string.isRequired
};

var Tag = function Tag(_ref2) {
  var children = _ref2.children,
      inverse = _ref2.inverse,
      id = _ref2.id,
      onAction = _ref2.onAction,
      accent = _ref2.accent,
      actionIconSvgHref = _ref2.actionIconSvgHref;

  var classSuffixes = [];
  if (inverse) {
    classSuffixes.push('inverse');
  }

  if (accent) {
    classSuffixes.push('accent accent-' + accent);
  }

  if (onAction) {
    classSuffixes.push('actionable');
  }

  var classes = classSuffixHelper({ classSuffixes: classSuffixes, componentClass: componentClass });

  return React.createElement(
    'span',
    { className: '' + componentClass + classes, 'data-test-selector': 'tag-' + id },
    children,
    onAction ? React.createElement(ActionButton, { onAction: onAction, id: id, actionIconSvgHref: actionIconSvgHref }) : null
  );
};

Tag.displayName = 'AlexandriaTagComponent';

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  accent: PropTypes.string,
  inverse: PropTypes.bool,
  onAction: PropTypes.func,
  actionIconSvgHref: PropTypes.string
};

Tag.defaultProps = {
  id: 'default'
};

export default Tag;