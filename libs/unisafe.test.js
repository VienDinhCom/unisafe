const fs = require('fs');
const unisafe = require('./unisafe');

test('Keep ASCII printable characters, horizontal tab, line feed, and carriage return.', () => {
  // Init with horizontal tab, line feed, and carriage return.
  const charCodes = [9, 10, 13];

  // Add ASCII printable characters
  for (let code = 32; code <= 126; code += 1) {
    charCodes.push(code);
  }

  const ASCII = charCodes.map(code => String.fromCharCode(code)).join('');

  expect(unisafe(ASCII)).toBe(ASCII);
});

test('Remove invalid characters out of JSON string.', () => {
  const data = fs.readFileSync(`${__dirname}/unisafe.test.json`, 'utf8');
  const safeJSON = unisafe(data);

  expect(JSON.parse(safeJSON).length).toBe(216);
});
