'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import { ListPickerPure, SplitPane } from 'adslot-ui';
import FlexibleSpacer from 'alexandria/FlexibleSpacer';
import Grid from 'alexandria/Grid';
import GridRow from 'alexandria/Grid/Row';
import GridCell from 'alexandria/Grid/Cell';
import SvgSymbol from 'alexandria/SvgSymbol';

require('./styles.scss');

var isSubset = function isSubset(array, subArray) {
  return _(subArray).difference(array).isEmpty();
};

var ListPickerComponent = function (_React$Component) {
  _inherits(ListPickerComponent, _React$Component);

  function ListPickerComponent(props) {
    _classCallCheck(this, ListPickerComponent);

    var _this = _possibleConstructorReturn(this, (ListPickerComponent.__proto__ || Object.getPrototypeOf(ListPickerComponent)).call(this, props));

    ['applyAction', 'cancelAction', 'deselectItem', 'getApplyButtonState', 'loadData', 'selectItem'].forEach(function (methodName) {
      _this[methodName] = _this[methodName].bind(_this);
    });

    _this.state = {};
    return _this;
  }

  _createClass(ListPickerComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'getApplyButtonState',
    value: function getApplyButtonState(selectedItems) {
      if (this.props.allowEmptySelection) return false;

      return _.isEmpty(selectedItems);
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var selectedItems = _.clone(this.props.initialSelection);
      this.setState({
        selectedItems: selectedItems,
        disableApplyButton: this.getApplyButtonState(selectedItems)
      });
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item) {
      var selectedItems = this.state.selectedItems;

      if (!this.props.allowMultiSelection) selectedItems.length = 0;

      selectedItems.push(item);
      this.setState({
        selectedItems: selectedItems,
        disableApplyButton: this.getApplyButtonState(selectedItems)
      });
    }
  }, {
    key: 'deselectItem',
    value: function deselectItem(item) {
      var selectedItems = this.state.selectedItems;

      _.remove(selectedItems, { id: item.id });
      this.setState({
        selectedItems: selectedItems,
        disableApplyButton: this.getApplyButtonState(selectedItems)
      });
    }
  }, {
    key: 'cancelAction',
    value: function cancelAction() {
      this.props.modalClose();
      this.loadData();
    }
  }, {
    key: 'applyAction',
    value: function applyAction() {
      this.props.modalApply(this.state.selectedItems);
      this.props.modalClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          selectedItems = _state.selectedItems,
          disableApplyButton = _state.disableApplyButton;
      var _props = this.props,
          allowMultiSelection = _props.allowMultiSelection,
          emptyIcon = _props.emptyIcon,
          emptyMessage = _props.emptyMessage,
          emptySvgSymbol = _props.emptySvgSymbol,
          labelFormatter = _props.labelFormatter,
          addonFormatter = _props.addonFormatter,
          itemHeaders = _props.itemHeaders,
          items = _props.items,
          itemType = _props.itemType,
          itemInfo = _props.itemInfo,
          show = _props.show,
          modalClassName = _props.modalClassName,
          modalTitle = _props.modalTitle,
          modalDescription = _props.modalDescription,
          modalFootnote = _props.modalFootnote,
          linkButtons = _props.linkButtons;


      var listPickerPureElement = React.createElement(ListPickerPure, {
        allowMultiSelection: allowMultiSelection,
        emptyIcon: emptyIcon,
        emptyMessage: emptyMessage,
        emptySvgSymbol: emptySvgSymbol,
        deselectItem: this.deselectItem,
        labelFormatter: labelFormatter,
        addonFormatter: addonFormatter,
        itemHeaders: itemHeaders,
        items: items,
        itemType: itemType,
        selectItem: this.selectItem,
        selectedItems: selectedItems
      });

      return React.createElement(
        Modal,
        { className: modalClassName, show: show, bsSize: 'large', keyboard: false },
        React.createElement(
          Modal.Header,
          null,
          React.createElement(
            Modal.Title,
            null,
            modalTitle
          )
        ),
        React.createElement(
          Modal.Body,
          null,
          modalDescription ? React.createElement(
            'p',
            null,
            modalDescription
          ) : null,
          _.isEmpty(itemInfo) ? React.createElement(
            'div',
            { className: 'listpicker-component-body' },
            listPickerPureElement
          ) : React.createElement(
            'div',
            { className: 'listpicker-component-body-split' },
            React.createElement(
              SplitPane,
              { dts: _.kebabCase(itemInfo.label) },
              React.createElement(
                Grid,
                null,
                React.createElement(
                  GridRow,
                  { type: 'header' },
                  React.createElement(
                    GridCell,
                    null,
                    itemInfo.label
                  )
                ),
                _.map(itemInfo.properties, function (property) {
                  return React.createElement(
                    GridRow,
                    { key: property.label, horizontalBorder: false },
                    React.createElement(
                      GridCell,
                      { classSuffixes: ['label'] },
                      property.label
                    ),
                    React.createElement(
                      GridCell,
                      { classSuffixes: ['value'], dts: _.kebabCase(property.label), stretch: true },
                      property.value
                    )
                  );
                })
              ),
              React.createElement(FlexibleSpacer, null)
            ),
            React.createElement(
              SplitPane,
              null,
              listPickerPureElement,
              React.createElement(FlexibleSpacer, null)
            )
          ),
          modalFootnote ? React.createElement(
            'div',
            { className: 'listpicker-component-footnote' },
            modalFootnote
          ) : null
        ),
        React.createElement(
          Modal.Footer,
          null,
          _.isEmpty(linkButtons) ? null : React.createElement(
            'div',
            { className: 'pull-left' },
            _.map(linkButtons, function (linkButton, key) {
              return _.isObject(linkButton) && isSubset(_.keys(linkButton), ['label', 'href']) ? React.createElement(
                Button,
                { key: linkButton.label, className: 'btn-inverse', href: linkButton.href },
                linkButton.label
              ) : React.cloneElement(linkButton, { key: key });
            })
          ),
          React.createElement(
            Button,
            { className: 'btn-inverse', onClick: this.cancelAction, 'data-test-selector': 'listpicker-cancel-button' },
            'Cancel'
          ),
          React.createElement(
            Button,
            {
              bsStyle: 'primary',
              onClick: this.applyAction,
              disabled: disableApplyButton,
              'data-test-selector': 'listpicker-apply-button'
            },
            'Apply'
          )
        )
      );
    }
  }]);

  return ListPickerComponent;
}(React.Component);

ListPickerComponent.displayName = 'AdslotUiListPickerComponent';

var itemProps = PropTypes.shape({
  id: PropTypes.number.isRequired
});

var linkButtonsProps = PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}), PropTypes.node]));

ListPickerComponent.propTypes = {
  allowEmptySelection: PropTypes.bool,
  allowMultiSelection: PropTypes.bool,
  emptyIcon: PropTypes.string,
  emptyMessage: PropTypes.string,
  emptySvgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  initialSelection: PropTypes.arrayOf(itemProps),
  itemHeaders: PropTypes.shape({
    label: PropTypes.string,
    toggle: PropTypes.string,
    addon: PropTypes.string
  }),
  itemInfo: PropTypes.shape({
    label: PropTypes.string.isRequired,
    properties: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string
    })).isRequired
  }),
  items: PropTypes.arrayOf(itemProps),
  itemType: PropTypes.string,
  labelFormatter: PropTypes.func,
  addonFormatter: PropTypes.func,
  linkButtons: linkButtonsProps,
  modalApply: PropTypes.func,
  modalDescription: PropTypes.string,
  modalClassName: PropTypes.string,
  modalClose: PropTypes.func,
  modalFootnote: PropTypes.string,
  modalTitle: PropTypes.string,
  show: PropTypes.bool
};

ListPickerComponent.defaultProps = {
  allowEmptySelection: true,
  allowMultiSelection: true,
  initialSelection: [],
  items: [],
  itemType: 'item',
  linkButtons: [],
  modalApply: function modalApply() {
    throw new Error('AdslotUi ListPicker needs a modalApply handler');
  },
  modalClassName: 'listpicker-component',
  modalClose: function modalClose() {
    throw new Error('AdslotUi ListPicker needs a modalClose handler');
  },
  modalTitle: 'Select Items',
  show: false
};

export default ListPickerComponent;