# Typo
The module provides some typographical staff: declensioning, transforming zeros to K and so on.
The module works both in Node.js and browsers environments.

## API:
* [Typo.declensify()](#declensify)

##Description

####<a name="declensify"></a>Typo.declensify(wordsSet)

The function returns a callback, which takes only one parameter - a number.

wordsSet = a list of russian words formed by rule "1-3-9" // ["день", "дня", "дней"]

#### An example for Node.js:
````javascript
  var Typo = require('./typo.js');
  var declensify = Typo.declensify;

  var days = declensify(["день", "дня", "дней"]);
  console.log(days(21)) // =>день
  
````

#### An example for browsers:
````javascript
  var declensify = Typo.declensify;

  var days = declensify(["день", "дня", "дней"]);
  console.log(days(21)) // =>день
  
````