'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import fastStatelessWrapper from 'adslot-ui/fastStatelessWrapper';
import TreePickerNode from 'adslot-ui/TreePicker/Node';
import Empty from 'alexandria/Empty';
import Grid from 'alexandria/Grid';
import GridRow from 'alexandria/Grid/Row';
import SvgSymbol from 'alexandria/SvgSymbol';
import Spinner from 'alexandria/Spinner';
import TreePickerPropTypes from '../../../prop-types/TreePickerPropTypes';

require('./styles.scss');

export var TreePickerNodeFast = fastStatelessWrapper(TreePickerNode, ['node.id', 'disabled', 'selected']);

var TreePickerGridComponent = function TreePickerGridComponent(_ref) {
  var disabled = _ref.disabled,
      emptySvgSymbol = _ref.emptySvgSymbol,
      expandNode = _ref.expandNode,
      groupFormatter = _ref.groupFormatter,
      hideIcon = _ref.hideIcon,
      includeNode = _ref.includeNode,
      itemType = _ref.itemType,
      isLoading = _ref.isLoading,
      nodes = _ref.nodes,
      nodeRenderer = _ref.nodeRenderer,
      removeNode = _ref.removeNode,
      selected = _ref.selected,
      valueFormatter = _ref.valueFormatter,
      emptyText = _ref.emptyText,
      displayGroupHeader = _ref.displayGroupHeader;

  var nodesByGroupLabel = _.groupBy(nodes, groupFormatter);
  return React.createElement(
    Grid,
    null,
    isLoading ? React.createElement(
      'div',
      { className: 'loading-nodes-container' },
      React.createElement(Spinner, null),
      React.createElement(
        'p',
        null,
        'Loading\u2026'
      )
    ) : _.map(nodesByGroupLabel, function (groupedNodes, label) {
      return React.createElement(
        'div',
        { className: 'treepickergrid-component-group', key: _.kebabCase(label) },
        displayGroupHeader ? React.createElement(
          'div',
          { className: 'treepickergrid-component-group-label' },
          React.createElement(
            GridRow,
            { dts: 'group-label-' + _.kebabCase(label) },
            label
          )
        ) : null,
        _.map(groupedNodes, function (node) {
          return React.createElement(TreePickerNodeFast, _extends({
            key: node.id
          }, {
            disabled: disabled,
            expandNode: expandNode,
            includeNode: includeNode,
            itemType: itemType,
            node: node,
            nodeRenderer: nodeRenderer,
            removeNode: removeNode,
            selected: selected,
            valueFormatter: valueFormatter
          }));
        })
      );
    }),
    nodes && !isLoading ? React.createElement(Empty, { collection: nodes, hideIcon: hideIcon, svgSymbol: emptySvgSymbol, text: emptyText }) : null
  );
};

TreePickerGridComponent.displayName = 'AdslotUiTreePickerGridComponent';

TreePickerGridComponent.propTypes = {
  disabled: PropTypes.bool,
  emptySvgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  emptyText: PropTypes.node.isRequired,
  expandNode: PropTypes.func,
  groupFormatter: PropTypes.func,
  hideIcon: PropTypes.bool,
  includeNode: PropTypes.func,
  itemType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  nodes: PropTypes.arrayOf(TreePickerPropTypes.node),
  nodeRenderer: PropTypes.func,
  removeNode: PropTypes.func,
  selected: PropTypes.bool.isRequired,
  valueFormatter: PropTypes.func,
  displayGroupHeader: PropTypes.bool
};

TreePickerGridComponent.defaultProps = {
  disabled: false,
  displayGroupHeader: true,
  groupFormatter: function groupFormatter() {
    return 'Default Group';
  },
  hideIcon: false,
  isLoading: false
};

export default TreePickerGridComponent;