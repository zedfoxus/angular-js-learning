/*
When the application loads, randomly choose F or C for Fahrenheit or Celcius
Also randomly select a number between -300 and 300
Display the unit and temperature on the screen and ask the user to convert
User is expected to type in a converted value using simple conversion
	C = (F - 30)/2    e.g. 120F - 30 = 90; 90/2 = 45C (simple conversion)
			                   120 - 32 = 88; 88 * 5/9 = 49C (actual conversion)

	F = 2 * C + 30    e.g. 45C * 2 = 90; 90 + 30 = 120F (simple conversion)
	                       49 * 9/5 = 88; 88 + 32 = 120F (actual conversion)

User presses the submit button
We use simple conversion math and show a check mark if the answer is
+/- 2 units for resulting C or +/- 5 for resulting F

We show an X if the answer is incorrect.

Regardless, we should show the simple conversion math and the real conversion math

 */

var randomTemperature = getRandomTemperature(-300, 300);
var randomUnit = getRandomUnit();
var inverseRandomUnit = getInverseRandomUnit();

function getRandomTemperature(min, max) {
	return Math.floor(Math.random() * (max-min+1) + min)
}

function getRandomUnit() {
	console.log("coming here...");
	var i = Math.random() * 100 + 1;
	return i < 50 ? 'C' : 'F';
}

function getInverseRandomUnit() {
	return randomUnit === 'C' ? 'F' : 'C';
}

var TEMPERATURE_DEVIATION_TOLERANCE_FAHRENHEIT = 5;
var TEMPERATURE_DEVIATION_TOLERANCE_CELCIUS = 2;

app.controller('MainController', ['$scope', '$sce', function($scope, $sce) {
	console.log ('in controller');
	$scope.randomUnit = randomUnit;
	$scope.randomTemperature = randomTemperature;
	$scope.answer = '';
	$scope.result = '';
	$scope.inverseRandomUnit = inverseRandomUnit;
	$scope.alert = '';
	$scope.checkAnswer = function() {

		var correctAnswer;
		var simpleAnswer;
		$scope.result = 'Incorrect';

		if ($scope.randomUnit === 'F') {
			correctAnswer = ($scope.randomTemperature - 32) * 5/9;
			simpleAnswer = ($scope.randomTemperature - 30) / 2;
			if (Math.abs($scope.answer - simpleAnswer) <= TEMPERATURE_DEVIATION_TOLERANCE_FAHRENHEIT) {
				$scope.result = 'Correct';
			}
		}
		else {
			correctAnswer = $scope.randomTemperature * 9/5 + 32;
			simpleAnswer = $scope.randomTemperature * 2 + 30;
			if (Math.abs($scope.answer - simpleAnswer) <= TEMPERATURE_DEVIATION_TOLERANCE_CELCIUS) {
				$scope.result = 'Correct';
			}
		}

		$scope.alert = $sce.trustAsHtml(
			'Correct answer is '
			+ correctAnswer.toFixed(2) + ' ' + $scope.inverseRandomUnit + '<br>'
			+ 'Simple answer is '
			+ simpleAnswer.toFixed(2) + ' ' + $scope.inverseRandomUnit
		);
	}
	$scope.reset = function() {

	}
}]);

