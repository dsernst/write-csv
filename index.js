'use strict'

const fs = require('fs')
const stringify = require('csv-stringify')

function writeCSV(filename, data) {
  stringify(data, {header: true}, (err, output) => {
    fs.writeFileSync(filename, output)
  })
}

module.exports = writeCSV