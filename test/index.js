const test = require('ava')

const gridbeamSystems = require('../')

test('gridbeam-systems', function (t) {
  t.truthy(gridbeamSystems, 'module is require-able')
})
