'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import GridCell from 'alexandria/Grid/Cell';
import GridRow from 'alexandria/Grid/Row';
import TextEllipsis from 'adslot-ui/TextEllipsis';
import TreePickerNodeExpander from './Expander';
import TreePickerPropTypes from '../../../prop-types/TreePickerPropTypes';

require('./styles.scss');

var baseClass = 'treepickernode-component';

var printPathText = function printPathText(node) {
  return _(node.path).map('label').clone().reverse().join(', ');
};

var printAncestorText = function printAncestorText(node) {
  return _(node.ancestors).map('label').join(', ');
};

var pathPrefix = function pathPrefix(_ref) {
  var type = _ref.type;
  return _.isEmpty(type) ? '' : type + ' in ';
};

var TreePickerNodeComponent = function (_React$Component) {
  _inherits(TreePickerNodeComponent, _React$Component);

  function TreePickerNodeComponent(props) {
    _classCallCheck(this, TreePickerNodeComponent);

    if (_.isUndefined(props.node.path) && _.isUndefined(props.node.ancestors)) {
      throw new Error('AdslotUi TreePickerNode needs property \'path\' or property \'ancestors\' for ' + props.node);
    }

    var _this = _possibleConstructorReturn(this, (TreePickerNodeComponent.__proto__ || Object.getPrototypeOf(TreePickerNodeComponent)).call(this, props));

    _this.state = {
      isLoading: false
    };
    _this.setLoadingAndExpandNode = _this.setLoadingAndExpandNode.bind(_this);
    _this.includeNodeBound = _this.props.includeNode.bind(_this, _this.props.node);
    _this.removeNodeBound = _this.props.removeNode.bind(_this, _this.props.node);
    if (_this.props.expandNode) _this.expandNodeBound = _this.props.expandNode.bind(_this, _this.props.node);
    return _this;
  }

  _createClass(TreePickerNodeComponent, [{
    key: 'setLoadingAndExpandNode',
    value: function setLoadingAndExpandNode() {
      this.setState({ isLoading: true }, this.expandNodeBound);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          itemType = _props.itemType,
          node = _props.node,
          expandNode = _props.expandNode,
          nodeRenderer = _props.nodeRenderer,
          selected = _props.selected,
          valueFormatter = _props.valueFormatter;


      var isChildNode = !(_.isEmpty(node.path) && _.isEmpty(node.ancestors));
      var isExpandable = expandNode && node.isExpandable;

      var pathElement = isChildNode ? React.createElement(
        'span',
        { className: baseClass + '-path' },
        _.isEmpty(node.path) ? printAncestorText(node) : printPathText(node)
      ) : null;

      var labelCellProps = isExpandable && !this.state.isLoading ? { onClick: this.setLoadingAndExpandNode } : {};

      return React.createElement(
        'div',
        { className: isChildNode ? baseClass + ' child-node' : '' + baseClass },
        React.createElement(
          GridRow,
          { dts: _.kebabCase(itemType) + '-' + node.id },
          selected ? React.createElement(
            GridCell,
            { classSuffixes: ['button'], dts: 'button-remove' },
            React.createElement(
              Button,
              {
                block: true,
                bsSize: 'xsmall',
                className: 'btn-inverse',
                onClick: this.removeNodeBound,
                disabled: disabled || node.isSelectable === false
              },
              '\u2212'
            )
          ) : null,
          React.createElement(
            GridCell,
            _extends({ stretch: true }, labelCellProps, { dts: 'label' }),
            React.createElement(
              TextEllipsis,
              null,
              React.createElement(
                'span',
                null,
                nodeRenderer(node)
              ),
              !_.isEmpty(pathElement) ? React.createElement(
                'span',
                { className: baseClass + '-metadata' },
                '(',
                pathPrefix(node),
                pathElement,
                ')'
              ) : null
            )
          ),
          isExpandable ? React.createElement(TreePickerNodeExpander, { isLoading: this.state.isLoading, onClick: this.setLoadingAndExpandNode }) : null,
          _.isNumber(node.value) ? React.createElement(
            GridCell,
            { dts: 'value' },
            valueFormatter(node.value)
          ) : null,
          !selected ? React.createElement(
            GridCell,
            { classSuffixes: ['button'], dts: 'button-add' },
            React.createElement(
              Button,
              {
                block: true,
                bsSize: 'xsmall',
                className: 'btn-inverse',
                onClick: this.includeNodeBound,
                disabled: disabled || node.isSelectable === false || this.state.isLoading
              },
              '+'
            )
          ) : null
        )
      );
    }
  }]);

  return TreePickerNodeComponent;
}(React.Component);

TreePickerNodeComponent.displayName = 'AdslotUiTreePickerNodeComponent';

TreePickerNodeComponent.propTypes = {
  disabled: PropTypes.bool,
  expandNode: PropTypes.func,
  includeNode: PropTypes.func,
  itemType: PropTypes.string.isRequired,
  node: TreePickerPropTypes.node.isRequired,
  nodeRenderer: PropTypes.func,
  removeNode: PropTypes.func,
  selected: PropTypes.bool,
  valueFormatter: PropTypes.func
};

TreePickerNodeComponent.defaultProps = {
  disabled: false,
  includeNode: function includeNode(node) {
    throw new Error('AdslotUi TreePickerNode needs an includeNode handler for ' + node);
  },
  removeNode: function removeNode(node) {
    throw new Error('AdslotUi TreePickerNode needs a removeNode handler for ' + node);
  },
  selected: false,
  valueFormatter: function valueFormatter(value) {
    return value;
  },
  nodeRenderer: function nodeRenderer(node) {
    return node.label;
  }
};

export default TreePickerNodeComponent;