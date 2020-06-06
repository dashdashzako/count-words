import assignWordEntry from './helpers/assign-word-entry';

/**
 *
 * @param {string} text - The text to be turned to words
 * @param {number} [len=0] - Minimal length of the string
 */
export default function countWords(text, len = 0) {
  if (typeof text !== 'string') {
    throw Error('str should be a String');
  }

  return text
    .split(/\W+/)
    .filter((word) => word.length > len)
    .reduce(assignWordEntry, {});
}
