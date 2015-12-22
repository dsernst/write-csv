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

```js
var data = [
  {a: 'foo', b: 'bar', c: 'baz'},
  {a: 'shoo', b: 'boo', c: 'chaz'},
  {a: 'gaia', b: 'loves', c: 'you'},
]
```

```js
writeCSV('./filename.csv', data)
```

This will synchronously write your data to `filename.csv` like this:
