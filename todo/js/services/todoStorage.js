todomvc.factory('todoStorage', function() {
	var STORAGE_ID = 'todos-angularjs-perf';
	return {
		
		get: function() {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function() {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}

	};
});