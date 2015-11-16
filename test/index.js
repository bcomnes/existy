var test = require('tape')
var existy = require('../.')
var inspect = require('util').inspect

test('null || undefined is not existy', function (t) {
  t.plan(2)
  t.false(existy(null), 'null is not existy')
  t.false(existy(undefined), 'undefined is not existy')
})

test('standard js type are existy', function (t) {
  var types = [
    [],
    ['beep'],
    {},
    {beep: 'boop'},
    true,
    false,
    10,
    0,
    'beep',
    ''
  ]
  t.plan(types.length)
  types.forEach(function each (val) {
    t.true(existy(val), inspect(val) + ' is existy')
  })
})
