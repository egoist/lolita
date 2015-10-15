'use strict'

const L = require('../lib/index')
const should = require('should')

let l = L
  .use('database', 'mongodb')
  .use('login_methods', ['local', 'github'])

console.log(l)

describe('L', () => {
  it('should return object', () => {
    l.should.be.Object()
  })
})
