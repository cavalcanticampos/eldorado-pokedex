"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = exports.Col = exports.Paragraph = exports.Text = exports.HeroImg = exports.HeroImgFull = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

require("../../colorstyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 23px;\n  line-height: 27px;\n  color: #212121;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 127px;\n  margin-left: 157px;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n\n  button {\n    background: #73d677;\n    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);\n    border-radius: 11px;\n    height: 66px;\n    width: 231px;\n    font-size: 23px;\n    border: 1px solid #73d677;\n    cursor: pointer;\n    :hover {\n      background: #19d521;\n      color: #ffff;\n    }\n\n    @media (max-width: 425px) {\n      margin-bottom: 28px;\n    }\n  }\n\n  /*  dispositivo tablete  */\n\n  @media (max-width: 1427px) {\n    margin-left: 130px;\n  }\n  @media (max-width: 768px) {\n    margin: 0;\n    width: 80%;\n    align-items: center;\n    text-align: center;\n    margin: 0 auto;\n  }\n\n  /*  dispositivo mobile  */\n\n  @media (max-width: 425px) {\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 32px;\n  line-height: 37px;\n  color: #000000;\n  margin-bottom: 64px;\n  font-weight: 400;\n\n  @media (max-width: 1427px) {\n    font-size: 29px;\n    line-height: 35px;\n    margin-bottom: 30px;\n  }\n  @media (max-width: 768px) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n  @media (max-width: 425px) {\n    line-height: 28px;\n    font-size: 24px;\n    text-align: center;\n    margin-bottom: 41.59px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 72px;\n  line-height: 84px;\n  color: #000000;\n  margin-bottom: 64px;\n\n  @media (max-width: 1427px) {\n    font-size: 45px;\n    line-height: 55px;\n    margin-bottom: 30px;\n  }\n  @media (max-width: 768px) {\n    margin-bottom: 6px;\n    font-size: 45px;\n    line-height: 55px;\n  }\n  @media (max-width: 425px) {\n    margin-top: 8px;\n    margin-bottom: 5.48px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 0;\n  top: 17%;\n\n  @media (max-width: 1427px) {\n    width: 50%;\n    top: 20%;\n  }\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 18px;\n  @media (min-width: 769px) {\n    display: none;\n  }\n\n  @media (max-width: 768px) {\n    margin-top: 0;\n  }\n\n  @media (max-width: 425px) {\n    margin-top: 7px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n\n  background:", ";  \n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n\n  & > footer {\n    margin: 0;\n    margin-top: 61.95px;\n    margin-bottom: 20.05px;\n    justify-content: space-around;\n  }\n  @media (max-width: 425px) {\n    height: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), colors.background);

exports.Container = Container;

var HeroImgFull = _styledComponents.default.img(_templateObject2());

exports.HeroImgFull = HeroImgFull;

var HeroImg = _styledComponents.default.img(_templateObject3());

exports.HeroImg = HeroImg;

var Text = _styledComponents.default.p(_templateObject4());

exports.Text = Text;

var Paragraph = _styledComponents.default.p(_templateObject5());

exports.Paragraph = Paragraph;

var Col = _styledComponents.default.div(_templateObject6());

exports.Col = Col;
var StyledLink = (0, _styledComponents.default)(_reactRouterDom.Link)(_templateObject7());
exports.StyledLink = StyledLink;