const unidecode = require('unidecode');
const { AllHtmlEntities } = require('html-entities');

const entities = new AllHtmlEntities();

function unisafe(string) {
  return string
    .split('')
    .map((char) => {
      const HT = char.charCodeAt(0) === 9;
      const LF = char.charCodeAt(0) === 10;
      const CR = char.charCodeAt(0) === 13;
      const printableChars = char.charCodeAt(0) >= 32 && char.charCodeAt(0) <= 126;

      // Keep ASCII printable characters, horizontal tab, line feed, and carriage return.
      if (HT || LF || CR || printableChars) {
        return char;
      }

      const entitiedChar = entities.encodeNonUTF(unidecode(char));

      // Remove unsafe characters.
      if (entitiedChar[0] === '&') {
        return '';
      }

      // Keep other unicode characters.
      return char;
    })
    .join('');
}

module.exports = unisafe;
