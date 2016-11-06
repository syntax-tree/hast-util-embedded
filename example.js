// Dependencies:
var embedded = require('./index.js');

// Given a non-embedded value:
var result = embedded({
  type: 'element',
  tagName: 'a',
  properties: {href: '#alpha', title: 'Bravo'},
  children: [{type: 'text', value: 'Charlie'}]
});

// Yields:
console.log('js', String(result));

// Given a embedded element:
result = embedded({
  type: 'element',
  tagName: 'audio',
  properties: {src: 'delta.ogg'},
  children: []
});

// Yields:
console.log('js', String(result));
