'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._ChainMap = exports._chainmap = exports.ChainMap = exports.chainmap = undefined;

var _aureoomsJsCollectionsDict = require('@aureooms/js-collections-dict');

var _aureoomsJsCollectionsSet = require('@aureooms/js-collections-set');

var _ChainMap2 = require('./_ChainMap');

var _ChainMap3 = _interopRequireDefault(_ChainMap2);

var _chainmap2 = require('./_chainmap');

var _chainmap3 = _interopRequireDefault(_chainmap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChainMap = (0, _ChainMap3.default)(_aureoomsJsCollectionsDict.Dict, _aureoomsJsCollectionsSet.Set);
var chainmap = (0, _chainmap3.default)(ChainMap);

exports.default = chainmap;
exports.chainmap = chainmap;
exports.ChainMap = ChainMap;
exports._chainmap = _chainmap3.default;
exports._ChainMap = _ChainMap3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaGFpbk1hcCIsImNoYWlubWFwIiwiX2NoYWlubWFwIiwiX0NoYWluTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyx1RkFBakI7QUFDQSxJQUFNQyxXQUFXLHdCQUFXRCxRQUFYLENBQWpCOztrQkFFZUMsUTtRQUdkQSxRLEdBQUFBLFE7UUFDQUQsUSxHQUFBQSxRO1FBQ0FFLFM7UUFDQUMsUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpY3QgfSBmcm9tICdhdXJlb29tcy1qcy1jb2xsZWN0aW9ucy1kaWN0JyA7XG5pbXBvcnQgeyBTZXQgfSBmcm9tICdhdXJlb29tcy1qcy1jb2xsZWN0aW9ucy1zZXQnIDtcblxuaW1wb3J0IF9DaGFpbk1hcCBmcm9tICcuL19DaGFpbk1hcCcgO1xuaW1wb3J0IF9jaGFpbm1hcCBmcm9tICcuL19jaGFpbm1hcCcgO1xuXG5jb25zdCBDaGFpbk1hcCA9IF9DaGFpbk1hcCggRGljdCAsIFNldCApIDtcbmNvbnN0IGNoYWlubWFwID0gX2NoYWlubWFwKCBDaGFpbk1hcCApIDtcblxuZXhwb3J0IGRlZmF1bHQgY2hhaW5tYXAgO1xuXG5leHBvcnQge1xuXHRjaGFpbm1hcCAsXG5cdENoYWluTWFwICxcblx0X2NoYWlubWFwICxcblx0X0NoYWluTWFwICxcbn0gO1xuIl19