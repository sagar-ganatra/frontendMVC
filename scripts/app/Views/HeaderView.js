define(["text!templates/header.js","underscore", "Backbone"], function(templateFile) {

	var HomePageView = Backbone.View.extend({
		
		el: $('.container'),

		template: templateFile,

		initialize: function () {
			console.log('Header page init');
		},

		render: function () {
			console.log('Header page render');
			$(this.el).append($(this.template).html());
			
		}
	});

	return HomePageView;
});