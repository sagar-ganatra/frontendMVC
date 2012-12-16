define(["views/HeaderView","views/NavbarView","underscore", "Backbone"], function(HeaderView, NavbarView) {

	var HomePageView = Backbone.View.extend({
		
		el: $('.container'),

		initialize: function () {
			console.log('Home page init');
			this.navbarView = new NavbarView;
			this.headerView = new HeaderView;
		},

		render: function () {
			console.log('Home page render');

			this.headerView.render();
			this.navbarView.render();
			
		}
	});

	return HomePageView;
});