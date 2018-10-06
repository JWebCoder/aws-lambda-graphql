'use strict';

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fakeDB = require("../../fakedb");

var UsersController = {
  index: function index(_ref) {
    var id = _ref.id;
    var users = fakeDB.users;

    if (id) {
      return users.filter(function (user) {
        return user.id === id;
      })[0];
    }

    return users;
  },
  push: function push(args) {
    var newUser = {
      id: Date.now() + '',
      name: args.name
    };
    fakeDB.users.push(newUser);
    return newUser;
  },
  update: function update(_ref2) {
    var id = _ref2.id,
        name = _ref2.name;
    var foundUser = {};
    fakeDB.users = fakeDB.users.map(function (user) {
      if (user.id === id) {
        user.name = name;
        foundUser = _objectSpread({}, user);
      }

      return user;
    });
    return foundUser;
  },
  delete: function _delete(_ref3) {
    var id = _ref3.id;
    var deleted = false;
    fakeDB.users = fakeDB.users.filter(function (user) {
      if (user.id !== id) {
        return true;
      }

      deleted = true;
      return false;
    });
    return deleted;
  }
};
module.exports = UsersController;