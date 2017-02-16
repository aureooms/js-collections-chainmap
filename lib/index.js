'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._ChainMap = exports._chainmap = exports.ChainMap = exports.chainmap = undefined;

var _jsCollectionsDict = require('@aureooms/js-collections-dict');

var _jsCollectionsSet = require('@aureooms/js-collections-set');

var _ChainMap2 = require('./_ChainMap');

var _ChainMap3 = _interopRequireDefault(_ChainMap2);

var _chainmap2 = require('./_chainmap');

var _chainmap3 = _interopRequireDefault(_chainmap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChainMap = (0, _ChainMap3.default)(_jsCollectionsDict.Dict, _jsCollectionsSet.Set);
var chainmap = (0, _chainmap3.default)(ChainMap);

exports.default = chainmap;
exports.chainmap = chainmap;
exports.ChainMap = ChainMap;
exports._chainmap = _chainmap3.default;
exports._ChainMap = _ChainMap3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaGFpbk1hcCIsImNoYWlubWFwIiwiX2NoYWlubWFwIiwiX0NoYWluTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyx1RUFBakI7QUFDQSxJQUFNQyxXQUFXLHdCQUFXRCxRQUFYLENBQWpCOztrQkFFZUMsUTtRQUdkQSxRLEdBQUFBLFE7UUFDQUQsUSxHQUFBQSxRO1FBQ0FFLFM7UUFDQUMsUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpY3QgfSBmcm9tICdAYXVyZW9vbXMvanMtY29sbGVjdGlvbnMtZGljdCcgO1xuaW1wb3J0IHsgU2V0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWNvbGxlY3Rpb25zLXNldCcgO1xuXG5pbXBvcnQgX0NoYWluTWFwIGZyb20gJy4vX0NoYWluTWFwJyA7XG5pbXBvcnQgX2NoYWlubWFwIGZyb20gJy4vX2NoYWlubWFwJyA7XG5cbmNvbnN0IENoYWluTWFwID0gX0NoYWluTWFwKCBEaWN0ICwgU2V0ICkgO1xuY29uc3QgY2hhaW5tYXAgPSBfY2hhaW5tYXAoIENoYWluTWFwICkgO1xuXG5leHBvcnQgZGVmYXVsdCBjaGFpbm1hcCA7XG5cbmV4cG9ydCB7XG5cdGNoYWlubWFwICxcblx0Q2hhaW5NYXAgLFxuXHRfY2hhaW5tYXAgLFxuXHRfQ2hhaW5NYXAgLFxufSA7XG4iXX0=