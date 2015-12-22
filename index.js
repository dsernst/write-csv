'use strict'

const fs = require('fs')
const stringify = require('csv-stringify')

function writeCSV(filename, data) {
  stringify(data, {header: true}, (err, output) => {
    if (err) {
      throw err
    }

    fs.writeFileSync(filename, output)
    console.log('DONE: Wrote', filename)
  })
}

module.exports = writeCSV
