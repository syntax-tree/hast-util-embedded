# hast-util-embedded [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check if a [node][] is an [**embedded**][spec] [element][].

## Installation

[npm][]:

```bash
npm install hast-util-embedded
```

## Usage

```javascript
var embedded = require('hast-util-embedded')

// Given a non-embedded value:
embedded({
  type: 'element',
  tagName: 'a',
  properties: {href: '#alpha', title: 'Bravo'},
  children: [{type: 'text', value: 'Charlie'}]
}) // => false

// Given a embedded element:
embedded({
  type: 'element',
  tagName: 'audio',
  properties: {src: 'delta.ogg'},
  children: []
}) // => true
```

## API

### `embedded(node)`

Check if the given value is an [**embedded**][spec] [element][].

## Contribute

See [`contributing.md` in `syntax-tree/hast`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-embedded.svg

[build-page]: https://travis-ci.org/syntax-tree/hast-util-embedded

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-embedded.svg

[coverage-page]: https://codecov.io/github/syntax-tree/hast-util-embedded?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[node]: https://github.com/syntax-tree/unist#node

[element]: https://github.com/syntax-tree/hast#element

[spec]: https://html.spec.whatwg.org/#embedded-content-2

[contributing]: https://github.com/syntax-tree/hast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/hast/blob/master/code-of-conduct.md
