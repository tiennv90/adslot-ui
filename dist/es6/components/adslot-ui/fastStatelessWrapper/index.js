'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React from 'react';

/**
 * fastStatelessWrapper - Limit re-render of a component to changeable props.
 *                        Use when you have a performance problem, do not prematurely optimise.
 *
 * @param  {Node}  ComposedComponent The React component to render.
 * @param  {Array} propsToCheck     An Array of properties causing re-render eg. `['foo.bar', 'baz']`.
 * @return {Node}  A Component that wraps the provided React Component.
 */

var fastStatelessWrapper = function fastStatelessWrapper(ComposedComponent, propsToCheck) {
  return function (_React$Component) {
    _inherits(FastStatelessWrapperComponent, _React$Component);

    function FastStatelessWrapperComponent() {
      _classCallCheck(this, FastStatelessWrapperComponent);

      return _possibleConstructorReturn(this, (FastStatelessWrapperComponent.__proto__ || Object.getPrototypeOf(FastStatelessWrapperComponent)).apply(this, arguments));
    }

    _createClass(FastStatelessWrapperComponent, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        var _this2 = this;

        var isEqualProps = function isEqualProps(toGet) {
          var getFromProps = function getFromProps(props) {
            return _.get(props, toGet);
          };

          return getFromProps(nextProps) === getFromProps(_this2.props);
        };

        return !_.every(propsToCheck, isEqualProps);
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(ComposedComponent, this.props);
      }
    }]);

    return FastStatelessWrapperComponent;
  }(React.Component);
};

export default fastStatelessWrapper;