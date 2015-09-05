#!/usr/bin/env node

'use strict';

var pkg,
    rt = require('../require-time'),
    exit = process.exit;

process.exit = function noop() {
};

try {
    pkg = require(process.cwd() + '/package.json');
} catch(e) {
    console.error(e.message);
    exit(1);
}

rt.run(pkg, process.argv[2]);
exit(0);
