'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './styles.scss';

var PopoverLinkItemComponent = function (_React$PureComponent) {
  _inherits(PopoverLinkItemComponent, _React$PureComponent);

  function PopoverLinkItemComponent() {
    _classCallCheck(this, PopoverLinkItemComponent);

    return _possibleConstructorReturn(this, (PopoverLinkItemComponent.__proto__ || Object.getPrototypeOf(PopoverLinkItemComponent)).apply(this, arguments));
  }

  _createClass(PopoverLinkItemComponent, [{
    key: 'render',
    value: function render() {
      // eslint-disable-next-line react/prop-types
      var _props = this.props,
          target = _props.target,
          title = _props.title,
          url = _props.url,
          isEnabled = _props.isEnabled,
          onClick = _props.onClick;


      var buttonProps = {
        disabled: !isEnabled,
        onClick: onClick,
        bsStyle: 'link'
      };

      if (target !== '_modal') {
        _.assign(buttonProps, { href: url });
      }

      if (target === '_blank') {
        _.assign(buttonProps, { rel: 'noopener noreferrer' });
      }

      return React.createElement(
        'li',
        { className: 'popover-link-item' },
        React.createElement(
          Button,
          buttonProps,
          title
        )
      );
    }
  }]);

  return PopoverLinkItemComponent;
}(React.PureComponent);

export var LINK_PROPS = {
  target: PropTypes.oneOf(['_blank', '_self', '_modal']),
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  isEnabled: PropTypes.bool
};

PopoverLinkItemComponent.propTypes = _.assign({ onClick: PropTypes.func }, LINK_PROPS);

PopoverLinkItemComponent.defaultProps = {
  target: '_self',
  isEnabled: true,
  onClick: _.noop
};

export default PopoverLinkItemComponent;