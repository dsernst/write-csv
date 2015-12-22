# write-csv

[![NPM Version](https://img.shields.io/npm/v/write-csv.svg)](https://www.npmjs.com/package/write-csv)
[![Build Status](https://travis-ci.org/dsernst/write-csv.svg?branch=master)](https://travis-ci.org/dsernst/write-csv)
[![Coverage Status](https://coveralls.io/repos/dsernst/write-csv/badge.svg?branch=master&service=github)](https://coveralls.io/github/dsernst/write-csv?branch=master)

### Quickest way to write a json array to a .csv file


## Install

Install with npm:
```
npm i --save write-csv
```

Then require in your file:

```js
var writeCSV = require('write-csv')
```

## Usage

### writeFile(filename, data)

- `filename` String filename or file descriptor
- `data` Array of objects

```js
writeCSV('./results.csv', [
  {a: 'foo', b: 'bar', c: 'baz'},
  {a: 'shoo', b: 'boo', c: 'chaz'},
  {a: 'gaia', b: 'loves', c: 'you'},
])
```

This will synchronously write your data to `results.csv` like this:

```csv
a,b,c
foo,bar,baz
shoo,boo,chaz
gaia,loves,you
```
