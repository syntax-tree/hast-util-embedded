# hast-util-embedded [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check if a [node][] is a [**embedded**][spec] [element][].

## Installation

[npm][]:

```bash
npm install hast-util-embedded
```

**hast-util-embedded** is also available as an AMD, CommonJS, and
globals module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var embedded = require('hast-util-embedded');
```

Given a non-embedded value:

```javascript
var result = embedded({
    'type': 'element',
    'tagName': 'a',
    'properties': {
        'href': '#alpha',
        'title': 'Bravo'
    },
    'children': [{
        'type': 'text',
        'value': 'Charlie'
    }]
});
```

Yields:

```js
false
```

Given a embedded element:

```javascript
result = embedded({
    'type': 'element',
    'tagName': 'audio',
    'properties': {
        'src': 'delta.ogg'
    },
    'children': []
});
```

Yields:

```js
true
```

## API

### `embedded(node)`

Check if the given value is an [**embedded**][spec] [element][].

**Parameters**: `node` (`*`) — Value to check.

**Returns**: `boolean`, whether `node` passes the test.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/hast-util-embedded.svg

[build-page]: https://travis-ci.org/wooorm/hast-util-embedded

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-embedded.svg

[coverage-page]: https://codecov.io/github/wooorm/hast-util-embedded?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/hast-util-embedded/releases

[license]: LICENSE

[author]: http://wooorm.com

[node]: https://github.com/wooorm/hast#node

[element]: https://github.com/wooorm/hast#element

[spec]: https://html.spec.whatwg.org/#embedded-content-2
