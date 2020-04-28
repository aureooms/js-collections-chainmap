[@aureooms/js-collections-chainmap](https://aureooms.github.io/js-collections-chainmap)
==

Python's chainmap data structure for JavaScript. Parent is
[@aureooms/js-collections](https://github.com/aureooms/js-collections).

```js
let A = dict( [ [ "x" , "A" ] ] ) ;
let B = dict( [ [ "x" , "B" ] , [ "y" , "B" ] ] ) ;
let C = dict( [ [ "x" , "C" ] , [ "y" , "C" ] , [ "z" , "C" ] ] ) ;

let M = chainmap( A , B , C ) ;

M.get( "x" ) ; // "A"
M.get( "y" ) ; // "B"
M.get( "z" ) ; // "C"
```

[![License](https://img.shields.io/github/license/aureooms/js-collections-chainmap.svg)](https://raw.githubusercontent.com/aureooms/js-collections-chainmap/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-collections-chainmap.svg)](https://www.npmjs.org/package/@aureooms/js-collections-chainmap)
[![Build](https://img.shields.io/travis/aureooms/js-collections-chainmap/master.svg)](https://travis-ci.org/aureooms/js-collections-chainmap/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-collections-chainmap.svg)](https://david-dm.org/aureooms/js-collections-chainmap)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-collections-chainmap.svg)](https://david-dm.org/aureooms/js-collections-chainmap?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-collections-chainmap.svg)](https://github.com/aureooms/js-collections-chainmap/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-collections-chainmap.svg)](https://www.npmjs.org/package/@aureooms/js-collections-chainmap)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-collections-chainmap.svg)](https://codeclimate.com/github/aureooms/js-collections-chainmap/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-collections-chainmap.svg)](https://codeclimate.com/github/aureooms/js-collections-chainmap/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-collections-chainmap/master.svg)](https://codecov.io/gh/aureooms/js-collections-chainmap)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-collections-chainmap.svg)](https://codeclimate.com/github/aureooms/js-collections-chainmap/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-collections-chainmap//badge.svg)](https://aureooms.github.io/js-collections-chainmap//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-collections-chainmap)](https://bundlephobia.com/result?p=@aureooms/js-collections-chainmap)
