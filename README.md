# Typo
The module provides some typographical stuff: declensioning, transforming zeros to K and so on.
The module works both in Node.js and browsers environments.

## API:
* [Typo.pluralize()](#pluralize)

##Description

####<a name="pluralize"></a>Typo.pluralize(wordsSet)

The function returns a callback, which takes only one parameter - a number.

wordsSet = a list of russian words formed by rule "1-3-9" // ["день", "дня", "дней"]

#### An example for Node.js:
````javascript
  var Typo = require('./typo.js');
  var pluralize = Typo.pluralize;

  var days = pluralize(["день", "дня", "дней"]);
  console.log(days(21)) // =>день
  
````

#### An example for browsers:
````javascript
  var pluralize = Typo.pluralize;

  var days = pluralize(["день", "дня", "дней"]);
  console.log(days(21)) // =>день
  
````