'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var Textarea = function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.state = {
      charCountRemaining: _this.props.maxLength
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Textarea, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        charCountRemaining: this.props.maxLength - event.target.value.length
      });

      if (this.props.onChange) {
        this.props.onChange(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          maxLength = _props.maxLength,
          statusClass = _props.statusClass;

      var restProps = _.omit(this.props, ['statusClass']);
      var classNames = classnames('form-control', restProps.className);

      return _.isNil(maxLength) ? React.createElement('textarea', _extends({}, restProps, { className: classNames })) : React.createElement(
        'div',
        null,
        React.createElement('textarea', _extends({}, restProps, { className: classNames, onChange: this.handleChange })),
        React.createElement(
          'span',
          { className: statusClass },
          this.state.charCountRemaining,
          ' characters remaining'
        )
      );
    }
  }]);

  return Textarea;
}(React.Component);

Textarea.propTypes = {
  maxLength: PropTypes.number,
  statusClass: PropTypes.string,
  onChange: PropTypes.func
};

Textarea.defaultProps = {
  statusClass: ''
};

export default Textarea;