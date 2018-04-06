'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */
// disable proptypes check because it doens't take into consideration extended types
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BootstrapButton from 'react-bootstrap/lib/Button';
import BootstrapPopover from 'react-bootstrap/lib/Popover';
import BootstrapOverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Spinner from 'alexandria/Spinner';
import { expandDts } from 'lib/utils';
import './styles.scss';

var adslotButtonPropTypes = {
  inverse: PropTypes.bool,
  reason: PropTypes.string,
  dts: PropTypes.string,
  isLoading: PropTypes.bool
};

var Button = function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'renderSpinner',
    value: function renderSpinner() {
      if (this.props.isLoading) {
        return React.createElement(
          'div',
          { className: 'spinner-container' },
          React.createElement(Spinner, { size: _.includes(['lg', 'large'], this.props.bsSize) ? 'medium' : 'small' })
        );
      }

      return null;
    }
  }, {
    key: 'renderWithReason',
    value: function renderWithReason() {
      var popover = React.createElement(
        BootstrapPopover,
        { id: 'btn-reason', className: 'btn-popover-reason' },
        this.props.reason
      );
      return React.createElement(
        BootstrapOverlayTrigger,
        { trigger: ['focus', 'hover'], placement: 'bottom', overlay: popover },
        this.renderButton()
      );
    }
  }, {
    key: 'renderButton',
    value: function renderButton() {
      var _props = this.props,
          inverse = _props.inverse,
          children = _props.children,
          dts = _props.dts,
          className = _props.className,
          isLoading = _props.isLoading,
          disabled = _props.disabled;

      var classes = classNames('button-component', className, {
        'btn-inverse': inverse && !/btn-inverse/.test(className)
      });

      return React.createElement(
        BootstrapButton,
        _extends({}, _.omit(this.props, _.keys(adslotButtonPropTypes)), {
          disabled: isLoading || disabled,
          className: classes
        }, expandDts(dts)),
        this.renderSpinner(),
        React.createElement(
          'div',
          { className: isLoading ? 'button-component-children-container' : null },
          children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          disabled = _props2.disabled,
          reason = _props2.reason;

      return disabled && reason ? this.renderWithReason() : this.renderButton();
    }
  }]);

  return Button;
}(React.PureComponent);

Button.propTypes = _.assign({}, adslotButtonPropTypes, BootstrapButton.propTypes);

Button.defaultProps = {
  inverse: false,
  isLoading: false
};

export default Button;