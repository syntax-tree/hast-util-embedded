import assert from 'node:assert/strict'
import test from 'node:test'
import {embedded} from './index.js'

test('embedded', () => {
  assert.equal(embedded(), false, 'should return `false` without node')

  assert.equal(embedded(null), false, 'should return `false` with `null`')

  assert.equal(
    embedded({type: 'text'}),
    false,
    'should return `false` when without `element`'
  )

  assert.equal(
    embedded({type: 'element'}),
    false,
    'should return `false` when with invalid `element`'
  )

  assert.equal(
    embedded({
      type: 'element',
      tagName: 'a',
      properties: {href: '#alpha', title: 'Bravo'},
      children: [{type: 'text', value: 'Charlie'}]
    }),
    false,
    'should return `false` when without not embedded'
  )

  assert.equal(
    embedded({
      type: 'element',
      tagName: 'audio',
      properties: {src: 'delta.ogg'},
      children: []
    }),
    true,
    'should return `true` when with embedded'
  )
})
