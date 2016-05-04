(function (argument) {
	"use strict";

	angular.module("gh")
		.directive("gitHub", GitHub);

		function GitHub(){
			return {
				templateUrl: "app/gh.template.html",  //should name same as directive
				scope: {
					profileInfo: "=foobar"  //foobar is the name of the attribute when I am using the directive, profileInfo is what I use INSIDE the template;
				}
			};
		}

})();