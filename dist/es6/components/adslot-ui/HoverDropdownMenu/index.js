'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Popover } from 'react-bootstrap';
import PopoverLinkItem from './PopoverLinkItem';
import './styles.scss';

// if change this, change the width in styles.scss too
var POPOVER_WIDTH = 160;

/* eslint-disable react/prop-types */
export var renderPopoverComponent = function renderPopoverComponent(arrowPosition) {
  return function (props) {
    // default offset is 50%, therefore to adjust to align with the arrow, we need to move back/forth 30%
    var popoverOffset = POPOVER_WIDTH * 0.3;
    var popoverProps = _.assign({}, props, {
      arrowOffsetLeft: arrowPosition === 'left' ? '20%' : '80%',
      style: {
        left: arrowPosition === 'left' ? props.style.left + popoverOffset : props.style.left - popoverOffset
      }
    });

    return React.createElement(Popover, popoverProps);
  };
};
/* eslint-enable react/prop-types */

export var HoverDropdownMenuComponent = function (_React$Component) {
  _inherits(HoverDropdownMenuComponent, _React$Component);

  function HoverDropdownMenuComponent(props) {
    _classCallCheck(this, HoverDropdownMenuComponent);

    var _this = _possibleConstructorReturn(this, (HoverDropdownMenuComponent.__proto__ || Object.getPrototypeOf(HoverDropdownMenuComponent)).call(this, props));

    _this.state = {
      isOpen: false,
      target: null,
      mouseInPopover: false
    };

    _this.closeMenu = _.debounce(function () {
      if (!_this.state.mouseInPopover) {
        _this.setState({
          isOpen: false
        });
      }
    }, 100);

    _this.openMenu = _this.openMenu.bind(_this);
    _this.popoverEnterHandler = _this.popoverEnterHandler.bind(_this);
    _this.popoverLeaveHandler = _this.popoverLeaveHandler.bind(_this);
    return _this;
  }

  _createClass(HoverDropdownMenuComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // prevent default title popup if exists, assuming the first child is the hoverComponent
      this.element.childNodes[0].removeAttribute('title');
    }
  }, {
    key: 'openMenu',
    value: function openMenu(event) {
      this.setState({
        isOpen: true,
        target: event.target,
        mouseInPopover: false
      });
    }
  }, {
    key: 'popoverEnterHandler',
    value: function popoverEnterHandler() {
      this.setState({ mouseInPopover: true });
    }
  }, {
    key: 'popoverLeaveHandler',
    value: function popoverLeaveHandler() {
      this.setState({ mouseInPopover: false });
      this.closeMenu();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          arrowPosition = _props.arrowPosition,
          headerText = _props.headerText,
          hoverComponent = _props.hoverComponent,
          children = _props.children;


      var HoverPopover = renderPopoverComponent(arrowPosition);

      return React.createElement(
        'div',
        {
          className: 'hover-dropdown',
          ref: function ref(element) {
            _this2.element = element;
          },
          onMouseEnter: this.openMenu,
          onMouseLeave: this.closeMenu
        },
        hoverComponent,
        children && children.length > 0 ? React.createElement(
          Overlay,
          { show: this.state.isOpen, target: this.state.target, placement: 'bottom' },
          React.createElement(
            HoverPopover,
            {
              id: 'hover-dropdown-popover',
              className: 'hover-dropdown-popover',
              onMouseEnter: this.popoverEnterHandler,
              onMouseLeave: this.popoverLeaveHandler,
              title: headerText
            },
            React.createElement(
              'ul',
              { className: 'list-unstyled' },
              children
            )
          )
        ) : null
      );
    }
  }]);

  return HoverDropdownMenuComponent;
}(React.Component);

HoverDropdownMenuComponent.propTypes = {
  arrowPosition: PropTypes.oneOf(['left', 'right']),
  headerText: PropTypes.string,
  hoverComponent: PropTypes.element.isRequired,
  children: PropTypes.node
};

HoverDropdownMenuComponent.defaultProps = {
  arrowPosition: 'left',
  headerText: ''
};

HoverDropdownMenuComponent.Item = PopoverLinkItem;

export default HoverDropdownMenuComponent;