#!/usr/bin/env node

'use strict';

var pkg,
    deps,
    all = 0,
    rt = require('../require-time');

try {
    pkg = require(process.cwd() + '/package.json');
} catch(e) {
    console.error(e.message);
    process.exit(1);
}

rt.run(pkg, process.argv[2]);
