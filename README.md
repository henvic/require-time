# require-time [![NPM](http://img.shields.io/npm/v/require-time.svg?style=flat)](http://npmjs.org/require-time)

Timer to catch your package slow loading dependencies.

Not rocket sciences. Imprecise results. Just require npm-available dependencies. Just do your best to keep the numbers low *(say, <= 100ms)* if you are writing a command-line interface (CLI) tool.

The second time you run this tool it should be faster due to file system caching, etc.

Remember Node is interpreted and the dependencies may be on many different parts of your device (if a hard-drive the difference should be even greater due to head / plate movement).

## Install
Install via [npm](https://www.npmjs.com/) as global with

`npm install -g require-time`

## API
Unreliable. Untested. Trivial. Just see the code yourself.

## Examples of use
Go to your project directory and type

`require-time`

or

`require-time <dependency>`

If you need to see devDependencies try:

`require-time --all`

## asciinema screencast
[![asciicast](https://asciinema.org/a/21275.png)](https://asciinema.org/a/21275)
