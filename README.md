# Typo
The class provides some typographical staff: declensioning, transforming zeros to K and so on.


## API:
* [Declensifier()](#Declensifier)

##Description

####<a name="Declensifier"></a>Declensifier(wordsSet)

The function returns a callback, which takes only one parameter - a number.

$wordsSet = a list of russian words formed by rule "1-3-9" // ["день", "дня", "дней"]  
$showNumber = should a callback show a number passed to it  before a word or not.

#### Toy example:
````javascript
  var Declensifier = require('./declensify');

  var days = Declensifier(["день", "дня", "дней"]);

  console.log(days(23)) // => 23 дня
  
````