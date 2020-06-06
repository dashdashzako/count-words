/**
 *
 * @param {Object} dict - The dictionnary
 * @param {string} word - The word to add as a key
 */
function assignWordEntry(dict, word) {
  const wordCount = dict[word] ? dict[word] + 1 : 1;

  return {
    ...dict,
    [word]: wordCount,
  };
}

export default assignWordEntry;
