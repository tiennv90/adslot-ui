'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { expandDts } from 'lib/utils';

import './styles.scss';

var NavigationComponent = function (_React$PureComponent) {
  _inherits(NavigationComponent, _React$PureComponent);

  function NavigationComponent() {
    _classCallCheck(this, NavigationComponent);

    return _possibleConstructorReturn(this, (NavigationComponent.__proto__ || Object.getPrototypeOf(NavigationComponent)).apply(this, arguments));
  }

  _createClass(NavigationComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          barPosition = _props.barPosition,
          children = _props.children,
          dts = _props.dts;


      var classes = barPosition + '-bar';
      var navProps = _.omit(this.props, ['barPosition']);

      return React.createElement(
        Nav,
        _extends({}, navProps, expandDts(dts), { bsClass: 'nav-borderless', className: classes }),
        children
      );
    }
  }]);

  return NavigationComponent;
}(React.PureComponent);

NavigationComponent.propTypes = _.assign({}, Nav.propTypes, {
  barPosition: PropTypes.oneOf(['top', 'bottom']),
  dts: PropTypes.string
});

NavigationComponent.defaultProps = {
  barPosition: 'bottom'
};

export default NavigationComponent;