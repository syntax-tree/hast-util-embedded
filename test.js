import assert from 'node:assert/strict'
import test from 'node:test'
import {embedded} from './index.js'
import * as mod from './index.js'

test('embedded', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(mod).sort(), ['embedded'])
  })

  await t.test('should return `false` without node', async function () {
    // @ts-expect-error: check how a missing node is handled.
    assert.equal(embedded(), false)
  })

  await t.test('should return `false` with `null`', async function () {
    assert.equal(embedded(null), false)
  })

  await t.test(
    'should return `false` when without `element`',
    async function () {
      assert.equal(embedded({type: 'text'}), false)
    }
  )

  await t.test(
    'should return `false` when with invalid `element`',
    async function () {
      assert.equal(embedded({type: 'element'}), false)
    }
  )

  await t.test(
    'should return `false` when without not embedded',
    async function () {
      assert.equal(
        embedded({
          type: 'element',
          tagName: 'a',
          properties: {href: '#alpha', title: 'Bravo'},
          children: [{type: 'text', value: 'Charlie'}]
        }),
        false
      )
    }
  )

  await t.test('should return `true` when with embedded', async function () {
    assert.equal(
      embedded({
        type: 'element',
        tagName: 'audio',
        properties: {src: 'delta.ogg'},
        children: []
      }),
      true
    )
  })
})
