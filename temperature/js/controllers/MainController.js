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

var TEMPERATURE_DEVIATION_TOLERANCE_FAHRENHEIT = 5;
var TEMPERATURE_DEVIATION_TOLERANCE_CELSIUS = 2;

var randomTemperature = 0;
var randomUnit = 'F';
var inverseRandomUnit = 'C';
var defaultForm = {};

function setDefaults() {
	randomTemperature = getRandomTemperature(-300, 300);
	randomUnit = getRandomUnit();
	inverseRandomUnit = getInverseRandomUnit();
	defaultForm = {
		randomUnit: randomUnit,
		randomTemperature: randomTemperature,
		inverseRandomUnit: inverseRandomUnit,
		answer: "",
		result: "",
		alert: ""
	};
}

function getRandomTemperature(min, max) {
	return Math.floor(Math.random() * (max-min+1) + min)
}

function getRandomUnit() {
	var i = Math.random() * 100 + 1;
	return i < 50 ? 'C' : 'F';
}

function getInverseRandomUnit() {
	return randomUnit === 'C' ? 'F' : 'C';
}


setDefaults();

app.controller('MainController', ['$scope', '$sce', function($scope, $sce) {
	console.log ('in controller');
	$scope.temperature = defaultForm;

	$scope.checkAnswer = function() {

		var correctAnswer;
		var simpleAnswer;
		$scope.temperature.result = 'Incorrect';

		if ($scope.temperature.randomUnit === 'F') {
			correctAnswer = ($scope.temperature.randomTemperature - 32) * 5/9;
			simpleAnswer = ($scope.temperature.randomTemperature - 30) / 2;
			if (Math.abs($scope.temperature.answer - simpleAnswer) <= TEMPERATURE_DEVIATION_TOLERANCE_FAHRENHEIT) {
				$scope.temperature.result = 'Correct';
			}
		}
		else {
			correctAnswer = $scope.temperature.randomTemperature * 9/5 + 32;
			simpleAnswer = $scope.temperature.randomTemperature * 2 + 30;
			if (Math.abs($scope.temperature.answer - simpleAnswer) <= TEMPERATURE_DEVIATION_TOLERANCE_CELSIUS) {
				$scope.temperature.result = 'Correct';
			}
		}

		$scope.temperature.alert = $sce.trustAsHtml(
			'Correct answer is '
			+ correctAnswer.toFixed(2) + ' ' + $scope.temperature.inverseRandomUnit + '<br>'
			+ 'Simple answer is '
			+ simpleAnswer.toFixed(2) + ' ' + $scope.temperature.inverseRandomUnit
		);
	};
	$scope.reset = function() {
		setDefaults();
		$scope.temperatureForm.$setPristine();
		$scope.temperature = defaultForm;
	}
}]);

