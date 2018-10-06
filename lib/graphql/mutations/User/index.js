"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateUser = _interopRequireDefault(require("./CreateUser"));

var _UpdateUser = _interopRequireDefault(require("./UpdateUser"));

var _DeleteUser = _interopRequireDefault(require("./DeleteUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  CreateUser: _CreateUser.default,
  UpdateUser: _UpdateUser.default,
  DeleteUser: _DeleteUser.default
};
exports.default = _default;