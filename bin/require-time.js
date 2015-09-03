#!/usr/bin/env node

'use strict';

var pkg,
    deps,
    all = 0,
    rt = require('../require-time');

var exit = process.exit;
process.exit = function noop () { };
try {
    pkg = require(process.cwd() + '/package.json');
} catch(e) {
    console.error(e.message);
    exit(1);
}

rt.run(pkg, process.argv[2]);
exit(0);
