#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/babel-node "$0" "$@"
'use strict';

import prettyjson from 'prettyjson'

import * as test from '@offirmo/globalthis-ponyfill'

console.log('Hello')
console.log('Exported symbols:\n', prettyjson.render(Object.keys(test)))
