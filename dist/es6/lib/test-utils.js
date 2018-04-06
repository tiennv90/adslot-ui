'use strict';

import { shallow } from 'enzyme';

exports.runComponentDidMount = function (_ref) {
  var shallowRenderer = _ref.shallowRenderer;

  shallowRenderer.instance().componentDidMount();
  shallowRenderer.update();
};

exports.runComponentWillReceiveProps = function (_ref2) {
  var shallowRenderer = _ref2.shallowRenderer,
      nextProps = _ref2.nextProps;

  shallowRenderer.instance().componentWillReceiveProps(nextProps);
  shallowRenderer.update();
};

exports.createAndMountComponent = function (component) {
  var shallowRenderer = shallow(component);
  exports.runComponentDidMount({ shallowRenderer: shallowRenderer });
  return shallowRenderer;
};