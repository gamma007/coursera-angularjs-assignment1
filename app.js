(function() {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		$scope.checkMessage = function() {
			var message = $scope.inputText;
			$scope.messageColor = "green";

			if(message == undefined || message.length == 0) {
				$scope.message = "Please enter data first";
				$scope.messageColor = "red";
			} else {
				var msg = message.split(',');
				var count = 0;
				for(var i = 0; i < msg.length; i++) {
					if(msg[i].length == 0) {
						continue;
					}
					count++;
				}
				if(count <= 3) {
					$scope.message = "Enjoy!";
					$scope.messageColor = "green";
				} else {
					$scope.message = "Too much!";
					$scope.messageColor = "green";
				}
			}
		}
	}

})();
