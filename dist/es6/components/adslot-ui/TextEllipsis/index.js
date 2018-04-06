'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Popover } from 'react-bootstrap';

require('./styles.scss');

var TextEllipsisComponent = function (_Component) {
  _inherits(TextEllipsisComponent, _Component);

  function TextEllipsisComponent(props) {
    _classCallCheck(this, TextEllipsisComponent);

    var _this = _possibleConstructorReturn(this, (TextEllipsisComponent.__proto__ || Object.getPrototypeOf(TextEllipsisComponent)).call(this, props));

    _this.state = {
      truncated: false
    };
    return _this;
  }

  _createClass(TextEllipsisComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTruncate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setTruncate();
    }
  }, {
    key: 'setTruncate',
    value: function setTruncate() {
      var nextTruncateState = this.container.scrollWidth > this.container.clientWidth;
      if (this.state.truncated !== nextTruncateState) {
        this.setState({
          truncated: nextTruncateState
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          popoverProps = _props.popoverProps,
          overlayTriggerProps = _props.overlayTriggerProps;
      var truncated = this.state.truncated;


      if (truncated) {
        var tooltip = React.createElement(
          Popover,
          popoverProps,
          this.props.children
        );

        return React.createElement(
          OverlayTrigger,
          _extends({}, overlayTriggerProps, { overlay: tooltip }),
          React.createElement(
            'div',
            {
              className: 'text-ellipsis-component',
              ref: function ref(_ref) {
                _this2.container = _ref;
              }
            },
            this.props.children
          )
        );
      }

      return React.createElement(
        'div',
        {
          className: 'text-ellipsis-component',
          ref: function ref(_ref2) {
            _this2.container = _ref2;
          }
        },
        this.props.children
      );
    }
  }]);

  return TextEllipsisComponent;
}(Component);

TextEllipsisComponent.propTypes = {
  children: PropTypes.node.isRequired,
  overlayTriggerProps: PropTypes.shape(_.omit(OverlayTrigger.propTypes, ['overlay'])),
  popoverProps: PropTypes.shape(Popover.propTypes)
};

TextEllipsisComponent.defaultProps = {
  overlayTriggerProps: {
    trigger: ['focus', 'hover'],
    placement: 'top'
  },
  popoverProps: {
    id: 'popover',
    placement: 'top'
  }
};

export default TextEllipsisComponent;