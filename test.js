/* eslint-env mocha */

var writeCSV = require('./index.js')
var fs = require('fs')
var assert = require('assert')

describe('writeCSV', function() {
  it('writes an array of objects to a csv file', function() {
    var data = [
      {a: 'foo', b: 'bar', c: 'baz'},
      {a: 'shoo', b: 'boo', c: 'chaz'},
      {a: 'gaia', b: 'loves', c: 'you'},
    ]

    writeCSV('results.csv', data)

    var contents = fs.readFileSync('results.csv', 'utf8')

    assert.equal(contents, 'a,b,c\nfoo,bar,baz\nshoo,boo,chaz\ngaia,loves,you\n')
  })
})
