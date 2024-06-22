'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3;
var BotaoEstilizado = /*#__PURE__*/styled__default.button(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    background: ", ";\n    padding: 16px 32px;\n    border: 2px solid #eb9b00;\n    color: #fff;\n    color: ", ";\n    font-size: 20px;\n    cursor: pointer;\n    ", ";\n\n"])), function (props) {
  return props.tipo === 'primario' ? '#eb9b00' : '#fff';
}, function (props) {
  return props.tipo === 'primario' ? '#fff' : '#eb9b00';
}, function (props) {
  return props.tipo === 'primario' ? styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n            &:hover {\n                background: #B87900;\n                border: 2px solid #B87900;\n            }\n        "]))) : styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n            &:hover {\n                background: #fff;\n                border: 2px solid #b87900;\n                color: #b87900;\n            }\n    "])));
});
var AbBotao = function AbBotao(_ref) {
  var texto = _ref.texto,
    onClick = _ref.onClick,
    _ref$tipo = _ref.tipo,
    tipo = _ref$tipo === void 0 ? 'primario' : _ref$tipo;
  return React.createElement(BotaoEstilizado, {
    onClick: onClick,
    tipo: tipo
  }, texto);
};

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, children || "the snozzberries taste like snozzberries");
};

exports.AbBotao = AbBotao;
exports.Thing = Thing;
//# sourceMappingURL=ds-alurabooks-base-dm.cjs.development.js.map
