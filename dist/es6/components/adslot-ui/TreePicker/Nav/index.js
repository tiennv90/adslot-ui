'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Search from 'adslot-ui/Search';
import Breadcrumb from 'alexandria/Breadcrumb';
import SvgSymbol from 'alexandria/SvgSymbol';
import TreePickerPropTypes from '../../../prop-types/TreePickerPropTypes';

require('./styles.scss');

var TreePickerNavComponent = function TreePickerNavComponent(_ref) {
  var breadcrumbNodes = _ref.breadcrumbNodes,
      breadcrumbOnClick = _ref.breadcrumbOnClick,
      debounceInterval = _ref.debounceInterval,
      disabled = _ref.disabled,
      isLoading = _ref.isLoading,
      onClear = _ref.onClear,
      onChange = _ref.onChange,
      onSearch = _ref.onSearch,
      searchOnChange = _ref.searchOnChange,
      searchOnEnterKey = _ref.searchOnEnterKey,
      searchValue = _ref.searchValue,
      svgSymbolCancel = _ref.svgSymbolCancel,
      svgSymbolSearch = _ref.svgSymbolSearch;
  return React.createElement(
    'div',
    { className: 'treepickernav-component ' + (disabled ? 'disabled' : ''), 'data-test-selector': 'treepicker-nav-search' },
    React.createElement(Search, {
      disabled: disabled,
      debounceInterval: debounceInterval,
      isLoading: isLoading,
      onClear: onClear,
      onChange: onChange,
      onSearch: onSearch,
      searchOnChange: searchOnChange,
      searchOnEnterKey: searchOnEnterKey,
      svgSymbolCancel: svgSymbolCancel,
      svgSymbolSearch: svgSymbolSearch,
      value: searchValue
    }),
    React.createElement(Breadcrumb, { disabled: disabled, nodes: breadcrumbNodes, onClick: breadcrumbOnClick })
  );
};

TreePickerNavComponent.displayName = 'AdslotUiTreePickerNavComponent';
TreePickerNavComponent.propTypes = {
  breadcrumbNodes: PropTypes.arrayOf(TreePickerPropTypes.breadCrumbNode),
  breadcrumbOnClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onSearch: PropTypes.func,
  debounceInterval: PropTypes.number,
  searchOnChange: PropTypes.bool,
  searchOnEnterKey: PropTypes.bool,
  searchValue: PropTypes.string,
  svgSymbolCancel: PropTypes.shape(SvgSymbol.propTypes),
  svgSymbolSearch: PropTypes.shape(SvgSymbol.propTypes)
};

TreePickerNavComponent.defaultProps = {
  debounceInterval: 0,
  disabled: false,
  isLoading: false,
  searchOnChange: true,
  searchOnEnterKey: false
};

export default TreePickerNavComponent;