#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/ts-node --type-check --no-cache "$0" "$@"
'use strict';

import * as foo from '@atlaskit/analytics'

console.log('Hello')
