import test from 'tape'
import {embedded} from './index.js'

test('embedded', (t) => {
  t.equal(embedded(), false, 'should return `false` without node')

  t.equal(embedded(null), false, 'should return `false` with `null`')

  t.equal(
    embedded({type: 'text'}),
    false,
    'should return `false` when without `element`'
  )

  t.equal(
    embedded({type: 'element'}),
    false,
    'should return `false` when with invalid `element`'
  )

  t.equal(
    embedded({
      type: 'element',
      tagName: 'a',
      properties: {href: '#alpha', title: 'Bravo'},
      children: [{type: 'text', value: 'Charlie'}]
    }),
    false,
    'should return `false` when without not embedded'
  )

  t.equal(
    embedded({
      type: 'element',
      tagName: 'audio',
      properties: {src: 'delta.ogg'},
      children: []
    }),
    true,
    'should return `true` when with embedded'
  )

  t.end()
})
