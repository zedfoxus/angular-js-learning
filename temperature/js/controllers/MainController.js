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

app.controller(
	'MainController',
	[
		'$scope',
		function($scope) {

		}
	]
);