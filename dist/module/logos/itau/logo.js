import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _LOGO_COLORS;

/** @jsx node */
import { node } from 'jsx-pragmatic/src';
import { SVGLogo, getLogoColors } from '../../lib';
import { LOGO_COLOR, LOGO } from '../../constants';
var LOGO_COLORS = (_LOGO_COLORS = {}, _LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: '#003087'
}, _LOGO_COLORS[LOGO_COLOR.BLUE] = {
  primary: '#003087'
}, _LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: '#ffffff'
}, _LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: '#333030'
}, _LOGO_COLORS);
export function ItauLogo(_ref) {
  var _ref$logoColor = _ref.logoColor,
      logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.DEFAULT : _ref$logoColor,
      props = _objectWithoutPropertiesLoose(_ref, ["logoColor"]);

  var _getLogoColors = getLogoColors(LOGO.SOFORT, LOGO_COLORS, logoColor),
      primary = _getLogoColors.primary;

  return node(SVGLogo, _extends({}, props, {
    name: LOGO.ITAU,
    logoColor: logoColor,
    render: function render() {
      return node("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 750 105"
      }, node("rect", {
        fill: "#ff7900",
        x: "452.24",
        y: "19.99",
        width: "55",
        height: "54.14",
        rx: "8.98",
        transform: "translate(2.52 115.09) rotate(-13.72)"
      }), node("rect", {
        fill: "#004995",
        x: "467.2",
        y: "26.15",
        width: "33.66",
        height: "34.11",
        rx: "5.84"
      }), node("path", {
        fill: primary,
        d: "M394.93,60.57a9.34,9.34,0,0,0-2.36-5.72,12.06,12.06,0,0,0-9.52-4.1c-3.32.08-8.05.62-11,2.78l1.8,5.38s2.69-2.24,8.07-2.24c2.33,0,4.49,1.34,4.94,2.69v.45c-2.87,0-11.88.58-15.26,5.84-4,6.28,2.25,12.11,6.28,12.11,3.2,0,6.57.2,9.43-2.69l.45,2.25h7.18V62.07a3.52,3.52,0,0,1,0-.46Zm-16.16,8.67c.34-3.74,5.56-4.13,8.08-4.11v4.51C384.22,73.24,378.44,72.89,378.77,69.24Z"
      }), node("path", {
        fill: primary,
        d: "M368,52.63s-15.77-4.29-20.65,6.28c-2.69,5.84-1.35,11.94,1.8,15.26a12.77,12.77,0,0,0,5.38,3.15c4,1.34,11.23.89,13.47-.45L367.1,71s-7.18,2.25-10.77-1.35c-4.72-4.71-.45-12.11,4.49-12.11s6.28.89,6.28.89Z"
      }), node("rect", {
        fill: primary,
        x: "258.48",
        y: "43.2",
        width: "8.08",
        height: "34.11"
      }), node("path", {
        fill: primary,
        d: "M286.31,58V51.73h-4.49V43.2h-8.08v8.53h-4V58h4V71A6.29,6.29,0,0,0,280,77.32h6.29V71h-2.26a2.23,2.23,0,0,1-2.23-2.23V58Z"
      }), node("path", {
        fill: primary,
        d: "M313.69,60.57a9.46,9.46,0,0,0-2.36-5.72,12.08,12.08,0,0,0-9.52-4.1c-3.32.08-8.05.62-11,2.78l1.79,5.38s2.7-2.24,8.08-2.24c2.33,0,4.49,1.34,4.94,2.69v.45c-2.87,0-11.89.58-15.26,5.84-4,6.28,2.24,12.11,6.28,12.11,3.2,0,6.57.2,9.43-2.69l.45,2.25h7.18V62.07a3.52,3.52,0,0,1,0-.46Zm-16.16,8.67c.34-3.74,5.56-4.13,8.08-4.11v4.51C303,73.24,297.2,72.89,297.53,69.24Z"
      }), node("path", {
        fill: primary,
        d: "M334.78,51.73v15a2.81,2.81,0,0,1-.45,1.57c-1,1.53-2.33,2.7-4,2.7A4.38,4.38,0,0,1,326,68.25a2.72,2.72,0,0,1-.23-1.13V51.73h-8.08V69.24c0,4.46,3.62,8.52,8.08,8.52,8.08.45,9.42-3.59,9.42-3.59l0-.1.88,3.25h6.73V51.73Z"
      }), node("rect", {
        fill: "#fff100",
        x: "469.89",
        y: "43.2",
        width: "2.71",
        height: "11.43"
      }), node("path", {
        fill: "#fff100",
        d: "M479.22,48.17V46.06h-1.51V43.2H475v2.86h-1.35v2.11H475v4.36a2.11,2.11,0,0,0,2.11,2.1h2.11v-2.1h-.76a.76.76,0,0,1-.75-.75V48.17Z"
      }), node("path", {
        fill: "#fff100",
        d: "M488.39,49a3.14,3.14,0,0,0-.79-1.91,4,4,0,0,0-3.19-1.38,7,7,0,0,0-3.69.93l.6,1.81a4.42,4.42,0,0,1,2.71-.75,1.79,1.79,0,0,1,1.65.9v.15c-1,0-4,.19-5.11,1.95-1.35,2.11.75,4.06,2.1,4.06a3.89,3.89,0,0,0,3.16-.9l.15.75h2.41V49ZM483,51.93c.11-1.26,1.86-1.39,2.7-1.38v1.51C484.8,53.27,482.86,53.15,483,51.93Z"
      }), node("path", {
        fill: "#fff100",
        d: "M495.46,46.06v5.31a1.88,1.88,0,0,1-1.5,1.16,1.51,1.51,0,0,1-1.51-1.13V46.06h-2.71v5.87a2.84,2.84,0,0,0,2.71,2.85c2.71.15,3.16-1.2,3.16-1.2v0l.3,1.08h2.26V46.06Z"
      }), node("path", {
        fill: primary,
        d: "M406.08,56.2l-.38-4.47H399V77.32h8.08V62.94c.71-1.85,2.54-4.48,7.18-4.48V50.83A9.48,9.48,0,0,0,406.08,56.2Z"
      }), node("path", {
        fill: primary,
        d: "M436.23,40.51V53.84c-1.24-1.44-3.52-3-7.63-3C421,50.83,416,57.57,416,65.2a12.44,12.44,0,0,0,12.12,12.56,16.68,16.68,0,0,0,8.69-3L438,77.32h6.28V40.51Zm-5.62,30.75c-4.93,0-5.83-4-5.83-7.19s1.35-6.73,5.83-6.73c2.66,0,4.53,2,5.62,3.71v6.19C435,69.23,433.12,71.26,430.61,71.26Z"
      }), node("polygon", {
        fill: "#fff100",
        points: "495.02 45.45 492.78 45.45 494.58 43.2 497.27 43.2 495.02 45.45"
      }));
    }
  }));
}