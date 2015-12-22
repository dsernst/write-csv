# write-csv

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
var data = [
  {a: 'foo', b: 'bar', c: 'baz'},
  {a: 'shoo', b: 'boo', c: 'chaz'},
  {a: 'gaia', b: 'loves', c: 'you'},
]
```

```js
writeCSV('./results.csv', data)
```

This will synchronously write your data to `results.csv` like this:

```csv
a,b,c
foo,bar,baz
shoo,boo,chaz
gaia,loves,you
```
