import assignWordEntry from '../src/helpers/assign-word-entry';

describe('assignWordEntry', () => {
  const initialDict = {};

  test('should assign key', () => {
    expect(assignWordEntry(initialDict, 'hello')).toHaveProperty('hello', 1);
    expect(assignWordEntry(initialDict, 2)).toHaveProperty('2');
  });

  test('should increment count', () => {
    const testDict = assignWordEntry(initialDict, 'hello');

    expect(assignWordEntry(testDict, 'hello')).toHaveProperty('hello', 2);
  });
});
