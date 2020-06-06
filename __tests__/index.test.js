import countWords from '../src';

describe('countWords should handle various strings format', () => {
  test('should handle unspecified word length', () => {
    expect(Object.keys(countWords('hello world'))).toHaveLength(2);
    expect(countWords('hello world')).toHaveProperty('hello', 1);
  });

  test('should handle empty string', () => {
    const emptyStr = '';

    expect(countWords(emptyStr, 0)).toMatchObject({});
  });

  test('should handle null string', () => {
    expect(() => {
      countWords(null);
    }).toThrow();
  });

  test('should handle multiline string', () => {
    const multilineStr = `hello
    multiline
    string`;

    expect(Object.keys(countWords(multilineStr, 0))).toHaveLength(3);
  });

  test('should pass Hemingway', () => {
    const hemingway = `He remembered the time he had hooked one of a pair of marlin. The male fish always let the female fish feed first and the hooked fish, the female, made a wild, panic-stricken, despairing fight that soon exhausted her, and all the time the male had stayed with her, crossing the line and circling with her on the surface.

      He had stayed so close that the old man was afraid he would cut the line with his tail which was sharp as a scythe and almost of that size and shape. When the old man had gaffed her and clubbed her, holding the rapier bill with its sandpaper edge and clubbing her across the top of her head until her colour turned to a colour almost like the backing of mirrors, and then, with the boy’s aid, hoisted her aboard, the male fish had stayed by the side of the boat.

      Then, while the old man was clearing the lines and preparing the harpoon, the male fish jumped high into the air beside the boat to see where the female was and then went down deep, his lavender wings, that were his pectoral fins, spread wide and all his wide lavender stripes showing. He was beautiful, the old man remembered, and he had stayed.`;

    expect(countWords(hemingway, 2)).not.toHaveProperty('He');
  });
});

describe('countWords should handle various string length values', () => {
  const testStr = 'a aa aaa aaaa';
  test('should handle negative value', () => {
    expect(Object.keys(countWords(testStr, -1))).toHaveLength(4);
  });

  test('should handle 0 value', () => {
    expect(Object.keys(countWords(testStr, 0))).toHaveLength(4);
  });

  test('should handle positive value', () => {
    expect(Object.keys(countWords(testStr, 2))).toHaveLength(2);
  });
});
