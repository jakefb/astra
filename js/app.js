(function() {
	var app = angular.module('probrands', []);

	app.controller('TabController', function() {
		this.tab = 1;
		this.setTab = function(selectedTab) {
			this.tab = selectedTab;
		};
		this.isSet = function(checkTab) {
			return this.tab === checkTab;
		};
	});
})();