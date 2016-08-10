var Typo  = {};
Typo.declensify= function(wordsSet) {
	if(arguments.length <1)
		throw new Error('The parameter is missed');
	if(!Array.isArray(wordsSet))
		throw new Error('The parameter is not an array');
	if(wordsSet.length !== 3)
		throw new Error('Lenght of the parameter is not equal to 3');
	wordsSet.forEach(function(element, i){
		var type = typeof element;
		if(type !== 'string')
			throw new Error('The parameter contains non-string elements');
		if(element.length === 0)
			throw new Error('The parameter contains empty strings');
	})

	return function(number){
		if(arguments.length <1)
			throw new Error('The number is missed');
		if(!Number.isInteger(number))
			throw new Error('The number is not integer');

		var number = Math.abs(number);
		remainder10 = number%10;
		remainder100 = number%100;

		word1 = wordsSet[0];
		word3 = wordsSet[1];
		word9 = wordsSet[2];

		var word = word9;

		if(remainder100 < 10 || remainder100 > 20){
			if(remainder10 == 1)
				word = word1;
			if(remainder10 > 1 && remainder10 < 5)
				word = word3;
		}

		return word;
	}
}

module.exports = Typo;