import { Dict } from 'aureooms-js-collections-dict' ;
import { Set } from 'aureooms-js-collections-set' ;

import _ChainMap from './_ChainMap' ;
import _chainmap from './_chainmap' ;

const ChainMap = _ChainMap( Dict , Set ) ;
const chainmap = _chainmap( ChainMap ) ;

export default chainmap ;

export {
	chainmap ,
	ChainMap ,
	_chainmap ,
	_ChainMap ,
} ;
