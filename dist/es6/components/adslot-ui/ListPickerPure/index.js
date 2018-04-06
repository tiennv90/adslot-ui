'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'react-icheck/lib/Checkbox';
import Radio from 'react-icheck/lib/Radio';
import Empty from 'alexandria/Empty';
import Grid from 'alexandria/Grid';
import GridRow from 'alexandria/Grid/Row';
import GridCell from 'alexandria/Grid/Cell';
import SvgSymbol from 'alexandria/SvgSymbol';

require('./styles.scss');

var isItemSelected = function isItemSelected(_ref) {
  var item = _ref.item,
      selectedItems = _ref.selectedItems;
  return _.some(selectedItems, { id: item.id });
};

var ListPickerPureComponent = function ListPickerPureComponent(_ref2) {
  var allowMultiSelection = _ref2.allowMultiSelection,
      deselectItem = _ref2.deselectItem,
      emptyIcon = _ref2.emptyIcon,
      emptyMessage = _ref2.emptyMessage,
      emptySvgSymbol = _ref2.emptySvgSymbol,
      items = _ref2.items,
      labelFormatter = _ref2.labelFormatter,
      addonFormatter = _ref2.addonFormatter,
      itemHeaders = _ref2.itemHeaders,
      itemType = _ref2.itemType,
      selectItem = _ref2.selectItem,
      selectedItems = _ref2.selectedItems;

  var handleChange = function handleChange(item) {
    return function (event, checked) {
      if (checked) {
        selectItem(item, allowMultiSelection);
      } else {
        deselectItem(item, allowMultiSelection);
      }
    };
  };

  var ToggleComponent = allowMultiSelection ? Checkbox : Radio;

  return React.createElement(
    'div',
    { className: 'listpickerpure-component', 'data-test-selector': 'listpickerpure-component-' + _.kebabCase(itemType) },
    itemHeaders ? React.createElement(
      Grid,
      null,
      React.createElement(
        GridRow,
        { type: 'header' },
        React.createElement(
          GridCell,
          { stretch: true },
          itemHeaders.label
        ),
        React.createElement(
          GridCell,
          { classSuffixes: ['header-toggle'] },
          itemHeaders.toggle
        ),
        addonFormatter ? React.createElement(
          GridCell,
          { classSuffixes: ['header-addon'] },
          itemHeaders.addon
        ) : null
      )
    ) : null,
    React.createElement(
      'div',
      { className: 'listpickerpure-component-items' },
      React.createElement(
        Grid,
        null,
        _.map(items, function (item) {
          return React.createElement(
            GridRow,
            { key: item.id, dts: _.kebabCase(itemType) + '-' + item.id },
            React.createElement(
              GridCell,
              { stretch: true, dts: 'label' },
              labelFormatter(item)
            ),
            React.createElement(
              GridCell,
              { classSuffixes: ['toggle'], dts: 'toggle' },
              React.createElement(ToggleComponent, { checked: isItemSelected({ item: item, selectedItems: selectedItems }), onChange: handleChange(item) })
            ),
            addonFormatter ? React.createElement(
              GridCell,
              { classSuffixes: ['addon'], dts: 'addon' },
              addonFormatter(item)
            ) : null
          );
        }),
        React.createElement(Empty, { collection: items, icon: emptyIcon, svgSymbol: emptySvgSymbol, text: emptyMessage })
      )
    )
  );
};

ListPickerPureComponent.displayName = 'AdslotUiListPickerPureComponent';

var itemProps = PropTypes.shape({
  id: PropTypes.any.isRequired // id can be numeric or uuid string
});

ListPickerPureComponent.propTypes = {
  allowMultiSelection: PropTypes.bool,
  deselectItem: PropTypes.func,
  emptyIcon: PropTypes.string,
  emptyMessage: PropTypes.string,
  emptySvgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  labelFormatter: PropTypes.func,
  addonFormatter: PropTypes.func,
  itemHeaders: PropTypes.shape({
    label: PropTypes.node,
    toggle: PropTypes.string
  }),
  items: PropTypes.arrayOf(itemProps),
  itemType: PropTypes.string,
  selectItem: PropTypes.func,
  selectedItems: PropTypes.arrayOf(itemProps)
};

ListPickerPureComponent.defaultProps = {
  allowMultiSelection: true,
  deselectItem: function deselectItem() {
    throw new Error('AdslotUi ListPickerPure needs a deselectItem handler');
  },
  emptyMessage: 'No items to select.',
  labelFormatter: function labelFormatter(item) {
    return item.label;
  },
  items: [],
  itemType: 'item',
  selectItem: function selectItem() {
    throw new Error('AdslotUi ListPickerPure needs a selectItem handler');
  },
  selectedItems: []
};

export default ListPickerPureComponent;