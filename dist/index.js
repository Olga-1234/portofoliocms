/* eslint-disable no-undef */

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var sum = function sum(number1, number2) {
  return number1 + number2;
};

console.log(sum(4, 5));
console.log(_uuid.default.v4);
