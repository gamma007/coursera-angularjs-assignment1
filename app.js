(function() {
	'use strict';

	angular.module('LunchCheck', LunchCheck);

  alert('msg');

	angular.$inject = [$scope];

	angular.controller('LunchCheckController', LunchCheckController);

	function LunchCheckController($scope) {
		$scope.message = "Some message";
	}

})();
