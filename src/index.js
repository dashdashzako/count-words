import assignWordEntry from './helpers/assign-word-entry';

/**
 *
 * @param {string} text - The text to be turned to words
 * @param {number} [len=0] - Minimal length of the string
 * @throws Will throw an error if first parameter is not a string
 */
export default function countWords(text, len = 0) {
  if (typeof text !== 'string') {
    throw Error('text should be a String');
  }

  return text
    .split(/\W+/)
    .filter((word) => word.length > len)
    .reduce(assignWordEntry, {});
}
