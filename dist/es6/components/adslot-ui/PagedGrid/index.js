'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/lib/Pagination';
import Empty from 'alexandria/Empty';
import Grid from 'alexandria/Grid';
import GridRow from 'alexandria/Grid/Row';
import GridCell from 'alexandria/Grid/Cell';
import SvgSymbol from 'alexandria/SvgSymbol';

require('./styles.scss');

var PagedGridComponent = function (_React$Component) {
  _inherits(PagedGridComponent, _React$Component);

  function PagedGridComponent() {
    _classCallCheck(this, PagedGridComponent);

    var _this = _possibleConstructorReturn(this, (PagedGridComponent.__proto__ || Object.getPrototypeOf(PagedGridComponent)).call(this));

    _this.state = { activePage: 1 };
    return _this;
  }

  _createClass(PagedGridComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      var totalPages = Math.ceil(this.props.items.length / this.props.perPage);
      if (this.state.activePage > totalPages) this.setState({ activePage: totalPages });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activePage = this.state.activePage;
      var _props = this.props,
          columns = _props.columns,
          emptyIcon = _props.emptyIcon,
          emptyMessage = _props.emptyMessage,
          emptySvgSymbol = _props.emptySvgSymbol,
          items = _props.items,
          perPage = _props.perPage,
          verticalCellBorder = _props.verticalCellBorder;

      var pageItems = _(items).clone().splice((this.state.activePage - 1) * perPage, perPage);
      var totalPages = Math.ceil(items.length / perPage);

      return React.createElement(
        'div',
        { className: 'pagedgrid-component' },
        React.createElement(
          Grid,
          null,
          React.createElement(
            GridRow,
            { type: 'header', verticalCellBorder: verticalCellBorder },
            _.map(columns, function (column) {
              return React.createElement(
                GridCell,
                { key: column.key, classSuffixes: [_.kebabCase(column.key)], stretch: column.stretch },
                column.label
              );
            })
          ),
          _.map(pageItems, function (item) {
            return React.createElement(
              GridRow,
              { key: item.id, verticalCellBorder: verticalCellBorder },
              _.map(columns, function (column) {
                return React.createElement(
                  GridCell,
                  {
                    key: item.id + '-' + column.key,
                    classSuffixes: [_.kebabCase(column.key)],
                    stretch: column.stretch
                  },
                  _.get(item, column.key)
                );
              })
            );
          }),
          React.createElement(Empty, { collection: items, icon: emptyIcon, svgSymbol: emptySvgSymbol, text: emptyMessage })
        ),
        totalPages > 1 ? React.createElement(
          'div',
          { className: 'pagedgrid-component-pagination' },
          React.createElement(
            'span',
            { className: 'pagedgrid-component-pagination-info' },
            (activePage - 1) * perPage + 1,
            '\u2013',
            Math.min(activePage * perPage, items.length),
            ' of ',
            items.length
          ),
          React.createElement(Pagination, {
            activePage: activePage,
            items: totalPages,
            next: true,
            onSelect: function onSelect(selectedPage) {
              return _this2.setState({ activePage: selectedPage });
            },
            prev: true
          })
        ) : null
      );
    }
  }]);

  return PagedGridComponent;
}(React.Component);

var itemProps = PropTypes.shape({
  id: PropTypes.any.isRequired
});

var columnProps = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.any,
  stretch: PropTypes.bool
});

PagedGridComponent.propTypes = {
  columns: PropTypes.arrayOf(columnProps).isRequired,
  emptyIcon: PropTypes.string,
  emptyMessage: PropTypes.string,
  emptySvgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  items: PropTypes.arrayOf(itemProps).isRequired,
  perPage: PropTypes.number.isRequired,
  verticalCellBorder: PropTypes.bool
};

export default PagedGridComponent;