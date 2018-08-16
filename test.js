'use strict'

const { test } = require('ava')
const isAcronym = require('.')

test('isAcronym - true', (t) => {
  t.is(isAcronym('UDP'), true)
  t.is(isAcronym('TV'), true)
  t.is(isAcronym('WWW'), true)
  t.is(isAcronym('3D'), true)
  t.is(isAcronym('CDN'), true)
  t.is(isAcronym('PNG'), true)
  t.is(isAcronym('JPG'), true)
})

test('isAcronym - false', (t) => {
  t.is(isAcronym('udp'), false)
  t.is(isAcronym(' TV '), false)
  t.is(isAcronym('W.W.W.'), false)
  t.is(isAcronym('3d'), false)
})
