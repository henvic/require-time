'use strict';

function benchmark(dependency) {
    var time = Date.now(),
        duration;

    try {
        require.cache = {};
        require(process.cwd() + '/node_modules/' + dependency);
    } catch(e) {
        console.error(e.message);
    } finally {
        duration = Date.now() - time;
    }

    return duration;
}

function printDuration(dependency) {
    var duration = benchmark(dependency);

    console.log('%dms\t%s', duration, dependency);
}

function benchmarkList(dependencies) {
    var time = Date.now(),
        duration;

    dependencies.forEach(printDuration);
    duration = Date.now() - time;
    console.log('Total time to require all dependencies: %dms', duration);
}

function benchmarkMap(dependencies) {
    if (!dependencies) {
        return;
    }

    benchmarkList(Object.keys(dependencies));
}

function run(pkg, mode) {
    if (mode && mode !== '--all') {
        printDuration(mode);
        return;
    }

    benchmarkMap(pkg.dependencies);

    if (process.argv[2] === '--all') {
        console.log('\ndevDependencies:');
        benchmarkMap(pkg.devDependencies);
    }
}

exports.benchmark = benchmark;
exports.benchmarkList = benchmarkList;
exports.run = run;
