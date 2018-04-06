'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import SplitPane from 'adslot-ui/SplitPane';
import TreePickerGrid from 'adslot-ui/TreePicker/Grid';
import TreePickerNav from 'adslot-ui/TreePicker/Nav';
import FlexibleSpacer from 'alexandria/FlexibleSpacer';
import SvgSymbol from 'alexandria/SvgSymbol';
import TreePickerPropTypes from '../../prop-types/TreePickerPropTypes';

require('./styles.scss');

export var removeSelected = function removeSelected(_ref) {
  var subtree = _ref.subtree,
      selectedNodes = _ref.selectedNodes;

  if (!subtree) return subtree;

  return _.reject(subtree, function (_ref2) {
    var id = _ref2.id;
    return _.some(selectedNodes, { id: id });
  });
};

var TreePickerSimplePureComponent = function TreePickerSimplePureComponent(_ref3) {
  var additionalClassNames = _ref3.additionalClassNames,
      breadcrumbNodes = _ref3.breadcrumbNodes,
      breadcrumbOnClick = _ref3.breadcrumbOnClick,
      debounceInterval = _ref3.debounceInterval,
      disabled = _ref3.disabled,
      disableInclude = _ref3.disableInclude,
      emptySvgSymbol = _ref3.emptySvgSymbol,
      emptySelectedListSvgSymbol = _ref3.emptySelectedListSvgSymbol,
      emptyText = _ref3.emptyText,
      emptySelectedListText = _ref3.emptySelectedListText,
      expandNode = _ref3.expandNode,
      groupFormatter = _ref3.groupFormatter,
      hideIcon = _ref3.hideIcon,
      includeNode = _ref3.includeNode,
      initialStateNode = _ref3.initialStateNode,
      initialStateSymbol = _ref3.initialStateSymbol,
      isLoading = _ref3.isLoading,
      itemType = _ref3.itemType,
      nodeRenderer = _ref3.nodeRenderer,
      removeNode = _ref3.removeNode,
      onChange = _ref3.onChange,
      onClear = _ref3.onClear,
      onSearch = _ref3.onSearch,
      searchOnChange = _ref3.searchOnChange,
      searchOnEnterKey = _ref3.searchOnEnterKey,
      searchPlaceholder = _ref3.searchPlaceholder,
      searchValue = _ref3.searchValue,
      selectedNodes = _ref3.selectedNodes,
      subtree = _ref3.subtree,
      svgSymbolCancel = _ref3.svgSymbolCancel,
      svgSymbolSearch = _ref3.svgSymbolSearch,
      displayGroupHeader = _ref3.displayGroupHeader,
      hideSearchOnRoot = _ref3.hideSearchOnRoot;

  var selectableNodes = removeSelected({ subtree: subtree, selectedNodes: selectedNodes });
  var searchTextNode = emptyText || 'No items to select.';
  searchTextNode = initialStateNode && _.isEmpty(searchValue) ? initialStateNode : searchTextNode;
  var emptySymbol = initialStateSymbol && _.isEmpty(searchValue) ? initialStateSymbol : emptySvgSymbol;

  return React.createElement(
    'div',
    { className: 'treepickersimplepure-component ' + (disabled ? 'disabled' : '') },
    React.createElement(
      SplitPane,
      {
        additionalClassNames: additionalClassNames,
        dts: 'treepicker-splitpane-available-' + _.kebabCase(itemType)
      },
      hideSearchOnRoot && _.isEmpty(breadcrumbNodes) ? null : React.createElement(TreePickerNav, {
        breadcrumbNodes: breadcrumbNodes,
        breadcrumbOnClick: breadcrumbOnClick,
        debounceInterval: debounceInterval,
        disabled: disabled,
        isLoading: isLoading,
        onClear: onClear,
        onChange: onChange,
        onSearch: onSearch,
        searchOnChange: searchOnChange,
        searchOnEnterKey: searchOnEnterKey,
        searchPlaceholder: searchPlaceholder,
        searchValue: searchValue,
        svgSymbolCancel: svgSymbolCancel,
        svgSymbolSearch: svgSymbolSearch
      }),
      React.createElement(TreePickerGrid, {
        disabled: disabled || disableInclude,
        emptySvgSymbol: emptySymbol,
        emptyText: searchTextNode,
        expandNode: expandNode,
        groupFormatter: groupFormatter,
        includeNode: includeNode,
        isLoading: isLoading,
        itemType: itemType,
        nodes: selectableNodes,
        nodeRenderer: nodeRenderer,
        selected: false,
        displayGroupHeader: displayGroupHeader
      }),
      React.createElement(FlexibleSpacer, null)
    ),
    React.createElement(
      SplitPane,
      { dts: 'treepicker-splitpane-selected-' + _.kebabCase(itemType) },
      React.createElement(TreePickerGrid, {
        disabled: disabled,
        emptySvgSymbol: emptySelectedListSvgSymbol || emptySvgSymbol,
        emptyText: emptySelectedListText || 'Nothing selected.',
        hideIcon: hideIcon,
        itemType: itemType,
        nodes: selectedNodes,
        nodeRenderer: nodeRenderer,
        removeNode: removeNode,
        selected: true,
        displayGroupHeader: displayGroupHeader
      }),
      React.createElement(FlexibleSpacer, null)
    )
  );
};

TreePickerSimplePureComponent.displayName = 'AdslotUiTreePickerSimplePureComponent';

TreePickerSimplePureComponent.propTypes = {
  additionalClassNames: PropTypes.arrayOf(PropTypes.string),
  breadcrumbNodes: PropTypes.arrayOf(TreePickerPropTypes.breadCrumbNode.isRequired),
  breadcrumbOnClick: PropTypes.func,
  debounceInterval: PropTypes.number,
  disabled: PropTypes.bool,
  disableInclude: PropTypes.bool,
  emptySvgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  emptySelectedListSvgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  emptyText: PropTypes.node,
  emptySelectedListText: PropTypes.node,
  expandNode: PropTypes.func,
  groupFormatter: PropTypes.func,
  hideIcon: PropTypes.bool,
  includeNode: PropTypes.func,
  initialStateNode: PropTypes.node,
  initialStateSymbol: PropTypes.shape(SvgSymbol.propTypes),
  itemType: PropTypes.string,
  isLoading: PropTypes.bool,
  nodeRenderer: PropTypes.func,
  removeNode: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
  searchOnChange: PropTypes.bool,
  searchOnEnterKey: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  searchValue: PropTypes.string,
  selectedNodes: PropTypes.arrayOf(TreePickerPropTypes.node.isRequired).isRequired,
  subtree: PropTypes.arrayOf(TreePickerPropTypes.node.isRequired),
  svgSymbolCancel: PropTypes.shape(SvgSymbol.propTypes),
  svgSymbolSearch: PropTypes.shape(SvgSymbol.propTypes),
  displayGroupHeader: PropTypes.bool,
  hideSearchOnRoot: PropTypes.bool
};

TreePickerSimplePureComponent.defaultProps = {
  itemType: 'node',
  debounceInterval: 0,
  disabled: false,
  displayGroupHeader: true,
  isLoading: false,
  searchOnChange: true,
  searchOnEnterKey: false,
  hideSearchOnRoot: false
};

export default TreePickerSimplePureComponent;