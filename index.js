/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module rehype:lint:util:embedded
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var is = require('hast-util-is-element');

/*
 * Tag-names.
 */

var names = [
    'audio',
    'canvas',
    'embed',
    'iframe',
    'img',
    'math',
    'object',
    'picture',
    'svg',
    'video'
];

/**
 * Check if a node is a embedded element
 *
 * @param {*} node - Thing to check.
 * @return {boolean} - Whether a node is embedded.
 */
function embedded(node) {
    return is(node, names);
}

/*
 * Expose.
 */

module.exports = embedded;
