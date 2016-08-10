# Typo
The class provides some typographical staff: declensioning, transforming zeros to K and so on.


## API:
* [Typo.declensify()](#declensify)

##Description

####<a name="declensify"></a>Typo.declensify(wordsSet)

The function returns a callback, which takes only one parameter - a number.

wordsSet = a list of russian words formed by rule "1-3-9" // ["день", "дня", "дней"]

#### Toy example:
````javascript
  var Typo = require('./typo.js');
  var declensify = Typo.declensify;

  var days = declensify(["день", "дня", "дней"]);
  console.log(days(21)) // => 21 день
  
````

Don't forget to put the script in a local node_modules folder to require it like *require('typo')*