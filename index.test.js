const { scroll, batch } = require('./index');

describe('smooth-scroll', () => {
  test('should process string input', () => {
    expect(scroll('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => scroll(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = scroll('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
