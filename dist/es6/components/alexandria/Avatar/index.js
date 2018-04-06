'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

var baseClass = 'avatar-component';
var Avatar = function Avatar(_ref) {
  var color = _ref.color,
      givenName = _ref.givenName,
      tooltip = _ref.tooltip,
      image = _ref.image,
      surname = _ref.surname;
  return React.createElement(
    'div',
    {
      className: color ? baseClass + ' ' + baseClass + '-' + color : baseClass,
      title: tooltip !== undefined ? tooltip : (givenName || '') + ' ' + (surname || '')
    },
    image ? React.createElement('img', { className: baseClass + '-image', src: image, role: 'presentation' }) : null,
    React.createElement(
      'div',
      { className: 'avatar-component-initials' },
      '' + (_.head(givenName) || '') + (_.head(surname) || '')
    )
  );
};

Avatar.displayName = 'AlexandriaAvatarComponent';

Avatar.propTypes = {
  color: PropTypes.string,
  givenName: PropTypes.string,
  tooltip: PropTypes.string,
  image: PropTypes.string,
  surname: PropTypes.string
};

export default Avatar;