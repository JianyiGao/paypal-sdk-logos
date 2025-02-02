import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _LOGO_COLORS;

/** @jsx node */
import { node } from 'jsx-pragmatic/src';
import { SVGLogo, getLogoColors } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
var LOGO_COLORS = (_LOGO_COLORS = {}, _LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: '#000000'
}, _LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: '#ffffff'
}, _LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: '#333030'
}, _LOGO_COLORS);
export function SofortLogo(_ref) {
  var _ref$logoColor = _ref.logoColor,
      logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref$logoColor,
      props = _objectWithoutPropertiesLoose(_ref, ["logoColor"]);

  var _getLogoColors = getLogoColors(LOGO.SOFORT, LOGO_COLORS, logoColor),
      primary = _getLogoColors.primary;

  return node(SVGLogo, _extends({}, props, {
    name: LOGO.SOFORT,
    logoColor: logoColor,
    render: function render() {
      return node("svg", {
        version: "1.1",
        id: "Layer_1",
        width: "100",
        height: "32",
        xmlns: "http://www.w3.org/2000/svg",
        xlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 452.9 101.1",
        style: "enable-background:new 0 0 452.9 101.1;",
        space: "preserve"
      }, node("path", {
        fill: primary,
        d: "M79.7,0H57.4c0,18.3-8.4,35-23,46l-8.8,6.6l34.2,46.6h28.1L56.4,56.3C71.3,41.5,79.7,21.5,79.7,0z"
      }), node("rect", {
        fill: primary,
        width: "22.8",
        height: "99.2"
      }), node("rect", {
        fill: primary,
        x: "94.5",
        width: "21.5",
        height: "99.2"
      }), node("path", {
        fill: primary,
        d: "M304.6,28.7c-8.2,0-16,2.5-21.2,9.6v-7.7H263v68.6h20.7v-36c0-10.4,7-15.5,15.4-15.5c9,0,14.2,5.4,14.2,15.4v36.2h20.5V55.6 C333.8,39.6,321.1,28.7,304.6,28.7z"
      }), node("path", {
        fill: primary,
        d: "M181,30.6V35c-5.8-4-12.8-6.3-20.4-6.3c-20,0-36.2,16.2-36.2,36.2s16.2,36.2,36.2,36.2c7.6,0,14.6-2.3,20.4-6.3v4.4h20.5 V30.6H181z M162.3,82.5c-10.3,0-18.6-7.9-18.6-17.6s8.3-17.6,18.6-17.6c10.3,0,18.6,7.9,18.6,17.6S172.6,82.5,162.3,82.5z"
      }), node("path", {
        fill: primary,
        d: "M233.3,39.5v-8.9h-21v68.6h21.1v-32c0-10.8,11.7-16.6,19.8-16.6c0.1,0,0.2,0,0.2,0v-20C245.1,30.6,237.4,34.2,233.3,39.5z"
      }), node("path", {
        fill: primary,
        d: "M397.6,30.6V35c-5.8-4-12.8-6.3-20.4-6.3c-20,0-36.2,16.2-36.2,36.2s16.2,36.2,36.2,36.2c7.6,0,14.6-2.3,20.4-6.3v4.4h20.5 V30.6H397.6z M378.9,82.5c-10.3,0-18.6-7.9-18.6-17.6s8.3-17.6,18.6-17.6c10.3,0,18.6,7.9,18.6,17.6 C397.6,74.6,389.2,82.5,378.9,82.5z"
      }), node("g", null, node("path", {
        fill: primary,
        d: "M434,32.6c0-1-0.7-1.6-1.8-1.6h-1.9v5.2h0.9v-1.9h1l0.8,1.9h1l-0.9-2.1C433.7,33.8,434,33.3,434,32.6z M432.2,33.4h-1v-1.6 h1c0.6,0,0.9,0.3,0.9,0.8S432.9,33.4,432.2,33.4z"
      }), node("path", {
        fill: primary,
        d: "M431.9,28.8c-2.7,0-4.9,2.2-4.9,4.9c0.1,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9C436.8,31,434.6,28.8,431.9,28.8z M431.9,37.7 c-2.2,0-3.9-1.8-3.9-4c0-2.2,1.8-4,3.9-4c2.2,0,3.9,1.8,3.9,4C435.8,35.9,434,37.7,431.9,37.7z"
      })), node("path", {
        fill: primary,
        d: "M440,74.9c-7.1,0-12.9,5.8-12.9,12.9c0,7.1,5.8,12.9,12.9,12.9c7.1,0,12.9-5.8,12.9-12.9C452.9,80.6,447.1,74.9,440,74.9z"
      }));
    }
  }));
}