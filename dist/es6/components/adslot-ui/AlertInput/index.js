'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Overlay from 'react-bootstrap/lib/Overlay';
import Popover from 'react-bootstrap/lib/Popover';
import './styles.scss';

export var baseClass = 'alert-input-component';

var AlertInput = function (_Component) {
  _inherits(AlertInput, _Component);

  function AlertInput(props) {
    _classCallCheck(this, AlertInput);

    var _this = _possibleConstructorReturn(this, (AlertInput.__proto__ || Object.getPrototypeOf(AlertInput)).call(this, props));

    _this.state = {
      isFocused: false,
      isPopoverVisible: false
    };
    _this.getRef = _this.getRef.bind(_this);
    _this.setRef = _this.setRef.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleInputFocus = _this.handleInputFocus.bind(_this);
    _this.handleInputBlur = _this.handleInputBlur.bind(_this);
    return _this;
  }

  _createClass(AlertInput, [{
    key: 'getRef',
    value: function getRef() {
      return this.root;
    }
  }, {
    key: 'setRef',
    value: function setRef(root) {
      this.root = root;
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      if (this.props.alertMessage) {
        this.setState({ isPopoverVisible: true });
      }
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState({ isPopoverVisible: false });
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(event) {
      event.target.select();
      this.setState({
        isFocused: true,
        isPopoverVisible: Boolean(this.props.alertMessage)
      });

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(event) {
      this.setState({
        isFocused: false,
        isPopoverVisible: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          defaultValue = _props.defaultValue,
          value = _props.value,
          type = _props.type,
          min = _props.min,
          placeholder = _props.placeholder,
          prefixAddon = _props.prefixAddon,
          suffixAddon = _props.suffixAddon,
          alertStatus = _props.alertStatus,
          alertMessage = _props.alertMessage,
          onValueChange = _props.onValueChange;


      var className = classnames(baseClass, (_classnames = {}, _defineProperty(_classnames, alertStatus, alertStatus), _defineProperty(_classnames, 'is-focused', this.state.isFocused), _classnames));

      var popoverClassName = classnames(baseClass + '-popover', _defineProperty({}, alertStatus, alertStatus));

      return React.createElement(
        'div',
        {
          className: className,
          ref: this.setRef,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        },
        prefixAddon ? React.createElement(
          'span',
          { className: baseClass + '-addon' },
          prefixAddon
        ) : null,
        React.createElement(
          'span',
          { className: baseClass + '-flex-wrapper' },
          React.createElement('input', {
            className: baseClass + '-input',
            type: type,
            defaultValue: defaultValue,
            value: value,
            min: min,
            placeholder: placeholder,
            onChange: onValueChange,
            onFocus: this.handleInputFocus,
            onBlur: this.handleInputBlur
          })
        ),
        suffixAddon ? React.createElement(
          'span',
          { className: baseClass + '-addon' },
          suffixAddon
        ) : null,
        React.createElement(
          Overlay,
          { show: this.state.isPopoverVisible, target: this.getRef, placement: 'bottom' },
          React.createElement(
            Popover,
            { className: popoverClassName, id: 'alert-input-popover' },
            React.createElement(
              'strong',
              null,
              alertMessage
            )
          )
        )
      );
    }
  }]);

  return AlertInput;
}(Component);

export default AlertInput;


AlertInput.propTypes = {
  defaultValue: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['text', 'number']),
  min: PropTypes.number,
  placeholder: PropTypes.string,
  prefixAddon: PropTypes.node,
  suffixAddon: PropTypes.node,
  alertStatus: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  alertMessage: PropTypes.string,
  onValueChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};

AlertInput.defaultProps = {
  type: 'text'
};