#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"
'use strict';

const prettyjson = require('prettyjson')

const test = require('hello-world-emo')

console.log('Hello')
console.log('Exported symbols:\n', prettyjson.render(Object.keys(test)))
