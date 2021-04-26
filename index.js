import {convertElement} from 'hast-util-is-element'

export const embedded = convertElement([
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
])
