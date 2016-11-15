[js-collections-chainmap](http://aureooms.github.io/js-collections-chainmap)
==

Python's chainmap data structure for JavaScript. Parent is
[js-collections](https://github.com/aureooms/js-collections).

```js
let A = dict( [ [ "x" , "A" ] ] ) ;
let B = dict( [ [ "x" , "B" ] , [ "y" , "B" ] ] ) ;
let C = dict( [ [ "x" , "C" ] , [ "y" , "C" ] , [ "z" , "C" ] ] ) ;

let M = chainmap( A , B , C ) ;

M.get( "x" ) ; // "A"
M.get( "y" ) ; // "B"
M.get( "z" ) ; // "C"
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-collections-chainmap.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-collections-chainmap/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-collections-chainmap.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-collections-chainmap)
[![Build Status](http://img.shields.io/travis/aureooms/js-collections-chainmap.svg?style=flat)](https://travis-ci.org/aureooms/js-collections-chainmap)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-collections-chainmap.svg?style=flat)](https://coveralls.io/r/aureooms/js-collections-chainmap)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-collections-chainmap.svg?style=flat)](https://david-dm.org/aureooms/js-collections-chainmap#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-collections-chainmap.svg?style=flat)](https://david-dm.org/aureooms/js-collections-chainmap#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-collections-chainmap.svg?style=flat)](https://codeclimate.com/github/aureooms/js-collections-chainmap)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-collections-chainmap.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-collections-chainmap)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-collections-chainmap.svg?style=flat)](https://github.com/aureooms/js-collections-chainmap/issues)
[![Documentation](https://aureooms.github.io/js-collections-chainmap/badge.svg)](https://aureooms.github.io/js-collections-chainmap/source.html)
