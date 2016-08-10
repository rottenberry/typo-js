var expect = require('chai').expect;
var Typo = require('../typo.js')
var declensify = Typo.declensify;

describe('Factory of Declensifiers', function(){
	describe('Parameter checking', function(){
		
		describe('The parameter is missed', function(){
			it('should throw an error if the parameter is missed', function(){
				expect( () => declensify()).to.throw('The parameter is missed');
			})
		})

		describe('Wrong Type', function(){
			var wrongParameters = [
				1, 
				'hello', 
				{}, 
				undefined, 
				null, 
				Infinity, 
				-Infinity, 
				NaN,
				true,
				false,
				new Error(),
			];
			wrongParameters.forEach(function(parameter, i){
				var type = typeof parameter;
				it('should throw an error if a non-array parameter has been passed: '+type, function(){
					expect( () => declensify(parameter) ).to.throw('The parameter is not an array');
				})

			})
		})

		describe('Wrong size', function(){
			var arraysWithWrongSizes = [
				[],
				[1],
				[1,2],
				[1,2,3,4],
				[1,2,3,4,5],
			]
			arraysWithWrongSizes.forEach(function(parameter, i){
				it('should throw an error if the length of the parameter is not equal to 3: '+parameter.length, function(){
					expect( ()=> declensify([]) ).to.throw('Length of the parameter is not equal to 3');
				})
			})
		})


		describe('Wrong elements in the parameter', function(){
			var arraysSize3WithNonStringElements = [
				[1,2,3],
				[null, 'hello', 123],
				[{}, null, undefined],
				['lalala', 'lalala', Infinity],
			]
			arraysSize3WithNonStringElements.forEach(function(parameter, i){
				it('should throw an error if the parameter has length 3, but contains non-string elements: '+parameter, function(){
					expect( () => declensify(parameter)).to.throw('The parameter contains non-string elements');
				})
				
			})
		})

		describe('Empty strings as elements of the parameter', function(){
			var arraysWithEmptyStringLength3 = [
				['','foo', 'bar'],
				['foo', '', 'bar'],
				['foo', 'bar', ''],
				['', '', ''],
				['', '', 'hello'],
				['', 'hello', ''],
			]
			arraysWithEmptyStringLength3.forEach(function(parameter, i){
				it('should throw an error if parameter has 3 strings , but at least one of them is empty: '+parameter, function(){
					expect( () => declensify(parameter) ).to.throw('The parameter contains empty strings');
				})
			})
		})
	})

})

describe('declensify input checking', function(){
	var correctParameters = [
		['hello', 'foo', 'bar'],
		['john', 'bob', 'paul'],
		['1', '2', '3'],
	]
	correctParameters.forEach(function(parameter, i){
		it('the returned declensifier should be a function if the parameter is correct: '+parameter, function(){
			expect( declensify(parameter) ).to.be.a('function');
		})
	})

	describe('Parameter checking', function(){
		var wordsSet = ['hello', 'foo', 'bar'];
		var testingDeclensifier = declensify(wordsSet);
		describe('The parameter is missed', function(){
			it('should throw an error if the number is missed', function(){
				
				expect( () => testingDeclensifier()).to.throw('The number is missed');
			})
		})

		describe('Wrong type', function(){
			var wrongParameters = [
				Infinity,
				-Infinity,
				NaN,
				true,
				false,
				'123',
				123.5,
				{},
				[],
				new Error(),
				null,
				undefined
			]
			wrongParameters.forEach(function(parameter, i){
				it('should throw an error if the parameter is not integer: '+parameter, function(){
					expect( () => testingDeclensifier(parameter) ).to.throw('The number is not integer');
				})
			})
		})


	})
})

describe('declensify output checking', function(){
	var expectedResults = [
		[1, "день"], [2, "дня"], [3, "дня"], [4, "дня"], [5, "дней"],
		[6, "дней"], [7, "дней"], [8, "дней"], [9, "дней"], [10, "дней"],
		[16, "дней"], [21, "день"], [45, "дней"], [51, 'день'], [102, "дня"],
		[111, "дней"], [1024, "дня"], [999, "дней"], [1000002, "дня"],
	]
	var wordsSet = ["день", "дня", "дней"];
	var days = declensify(wordsSet);

	expectedResults.forEach(function(pair, i){
		var number = pair[0];
		var check = pair[1];
		it('should return the right value: '+number+" "+check, function(){
			expect(days(number)).to.equal(check);
		})
	})
})




