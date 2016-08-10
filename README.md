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

Don't forget to put the script in a local node_modules folder to require it like *require('typo')*

#### An example for browsers:
````javascript
  var declensify = Typo.declensify;

  var days = declensify(["день", "дня", "дней"]);
  console.log(days(21)) // =>день
  
````

Put the script in any folder of your web server