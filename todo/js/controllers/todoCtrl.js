todomvc.controller('TodoCtrl', function TodoCtrl($scope, $location, $filter, todoStorage) {
	var todos = $scope.todos = todoStorage.get();

	$scope.newTodo = '';
	$scope.remainingTodos = $filter('filter')(todos, {completed:false}).length;
	$scope.editedTodo = null;

	if ($location.path() === '') $location.path('/');
	$scope.location = $location;

	$scope.$watch('location.path()', function(path) {
		$scope.statusFilter = { 
			'/active': {completed:false}, 
			'/completed': {completed:true}
		}[path];
	});

	$scope.$watch('remainingCount == 0', function(val) {
		$scope.allChecked = val;
	});
});