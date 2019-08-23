const concat = require('concat-stream')
const str = require('../')
const test = require('tape')

test('basic tests', t => {
  t.plan(2)
  str('hi there').pipe(concat(data => {
    t.equal(data.toString(), 'hi there')
  }))
  str('').pipe(concat(data => {
    t.equal(data.toString(), '')
  }))
})
