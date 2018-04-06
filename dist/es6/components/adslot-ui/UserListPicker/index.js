'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import ListPicker from 'adslot-ui/ListPicker';
import Avatar from 'alexandria/Avatar';
import SvgSymbol from 'alexandria/SvgSymbol';

require('./styles.scss');

var UserListPickerComponent = function UserListPickerComponent(_ref) {
  var allowEmptySelection = _ref.allowEmptySelection,
      avatarColor = _ref.avatarColor,
      emptyIcon = _ref.emptyIcon,
      emptyMessage = _ref.emptyMessage,
      emptySvgSymbol = _ref.emptySvgSymbol,
      initialSelection = _ref.initialSelection,
      modalApply = _ref.modalApply,
      modalClose = _ref.modalClose,
      modalDescription = _ref.modalDescription,
      modalTitle = _ref.modalTitle,
      show = _ref.show,
      userHeaders = _ref.userHeaders,
      users = _ref.users;

  var labelFormatter = function labelFormatter(user) {
    return React.createElement(
      'div',
      { className: 'userlistpicker-component-user-label' },
      React.createElement(Avatar, { image: user.avatar, color: avatarColor(user), givenName: user.givenName, surname: user.surname }),
      React.createElement(
        'span',
        null,
        user.givenName + ' ' + user.surname
      )
    );
  };

  return React.createElement(ListPicker, {
    allowEmptySelection: allowEmptySelection,
    emptyIcon: emptyIcon,
    emptyMessage: emptyMessage,
    emptySvgSymbol: emptySvgSymbol,
    initialSelection: initialSelection,
    itemHeaders: userHeaders,
    items: users,
    itemType: 'user',
    labelFormatter: labelFormatter,
    modalApply: modalApply,
    modalClassName: 'userlistpicker-component',
    modalClose: modalClose,
    modalDescription: modalDescription,
    modalTitle: modalTitle,
    show: show
  });
};

UserListPickerComponent.displayName = 'AdslotUiListPickerComponent';

var userType = PropTypes.shape({
  avatar: PropTypes.string,
  givenName: PropTypes.string,
  id: PropTypes.number.isRequired,
  surname: PropTypes.string
});

UserListPickerComponent.propTypes = {
  allowEmptySelection: PropTypes.bool,
  avatarColor: PropTypes.func,
  emptyIcon: PropTypes.string,
  emptyMessage: PropTypes.string,
  emptySvgSymbol: PropTypes.shape(SvgSymbol.propTypes),
  initialSelection: PropTypes.arrayOf(userType),
  modalApply: PropTypes.func,
  modalDescription: PropTypes.string,
  modalClose: PropTypes.func,
  modalTitle: PropTypes.string,
  show: PropTypes.bool,
  userHeaders: PropTypes.shape({
    label: PropTypes.string,
    toggle: PropTypes.string
  }),
  users: PropTypes.arrayOf(userType)
};

UserListPickerComponent.defaultProps = {
  allowEmptySelection: false,
  avatarColor: _.noop,
  emptyMessage: 'No users.',
  initialSelection: [],
  modalApply: function modalApply() {
    throw new Error('AdslotUi UserListPicker needs a modalApply handler');
  },

  modalClose: function modalClose() {
    throw new Error('AdslotUi UserListPicker needs a modalClose handler');
  },

  modalDescription: 'Select users.',
  modalTitle: 'Select Users',
  show: false,
  userHeaders: { label: 'Team', toggle: 'Member' },
  users: []
};

export default UserListPickerComponent;