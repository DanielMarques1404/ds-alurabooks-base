import React from 'react';
import styled from 'styled-components';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var _templateObject;
var BotaoEstilizado = /*#__PURE__*/styled.button(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    background: #e89b00;\n    padding: 16px 32px;\n    border: 2px solid #e89b00;\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    &:hover {\n        background: #887900;\n        border: 2px solid #887900;\n    }\n"])));
var AbBotao = function AbBotao() {
  return React.createElement(BotaoEstilizado, null, "Clique Aqui!");
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

export { AbBotao, Thing };
//# sourceMappingURL=ds-alurabooks-base-dm.esm.js.map
