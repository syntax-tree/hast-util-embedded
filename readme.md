# hast-util-embedded [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check if a [node][] is an [**embedded**][spec] [element][].

## Installation

[npm][]:

```bash
npm install hast-util-embedded
```

## Usage

```javascript
var embedded = require('./index.js');

// Given a non-embedded value:
var result = embedded({
  type: 'element',
  tagName: 'a',
  properties: {href: '#alpha', title: 'Bravo'},
  children: [{type: 'text', value: 'Charlie'}]
}); //=> false

// Given a embedded element:
result = embedded({
  type: 'element',
  tagName: 'audio',
  properties: {src: 'delta.ogg'},
  children: []
}); //=> true
```

## API

### `embedded(node)`

Check if the given value is an [**embedded**][spec] [element][].

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
