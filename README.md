[@aureooms/js-collections-chainmap](https://make-github-pseudonymous-again.github.io/js-collections-chainmap)
==

Python's chainmap data structure for JavaScript. Parent is
[@aureooms/js-collections](https://github.com/make-github-pseudonymous-again/js-collections).

```js
let A = dict( [ [ "x" , "A" ] ] ) ;
let B = dict( [ [ "x" , "B" ] , [ "y" , "B" ] ] ) ;
let C = dict( [ [ "x" , "C" ] , [ "y" , "C" ] , [ "z" , "C" ] ] ) ;

let M = chainmap( A , B , C ) ;

M.get( "x" ) ; // "A"
M.get( "y" ) ; // "B"
M.get( "z" ) ; // "C"
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-collections-chainmap.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-collections-chainmap/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-collections-chainmap.svg)](https://www.npmjs.org/package/@aureooms/js-collections-chainmap)
[![Build](https://img.shields.io/travis/make-github-pseudonymous-again/js-collections-chainmap/master.svg)](https://travis-ci.org/make-github-pseudonymous-again/js-collections-chainmap/branches)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-collections-chainmap.svg)](https://david-dm.org/make-github-pseudonymous-again/js-collections-chainmap)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-collections-chainmap.svg)](https://david-dm.org/make-github-pseudonymous-again/js-collections-chainmap?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-collections-chainmap.svg)](https://github.com/make-github-pseudonymous-again/js-collections-chainmap/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-collections-chainmap.svg)](https://www.npmjs.org/package/@aureooms/js-collections-chainmap)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-collections-chainmap.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-collections-chainmap/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-collections-chainmap.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-collections-chainmap/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-collections-chainmap/master.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-collections-chainmap)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-collections-chainmap.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-collections-chainmap/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-collections-chainmap//badge.svg)](https://make-github-pseudonymous-again.github.io/js-collections-chainmap//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-collections-chainmap)](https://bundlephobia.com/result?p=@aureooms/js-collections-chainmap)
