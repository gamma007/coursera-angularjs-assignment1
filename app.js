(function() {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		$scope.checkMessage = function() {
			var message = $scope.inputText;
			$scope.messageColor = "green";

			if(message.length == 0) {
				$scope.message = "Please enter data first";
				$scope.messageColor = "red";
			} else {
				var msg = message.split(',');
				if(msg.length <= 3) {
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
				}
			}
		}
	}

})();
