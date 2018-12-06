# unisafe - Remove invalid Unicode characters out of your string and JSON.

### Install

```bash
npm install --save unisafe
```

### Usage

#### Remove invalid Unicode characters out of your string:

```javascript
const unisafe = require('./unisafe');

const goodString = unisafe('Bad unicode string.');

console.log(goodString);
```

#### Remove invalid Unicode characters out of your JSON:

```javascript
const unisafe = require('./unisafe');

const validJSON = unisafe(`[{ "foo": "Invalid unicode string in JSON." }]`);

const myArray = JSON.parse(validJSON);

console.log(myArray);
```
