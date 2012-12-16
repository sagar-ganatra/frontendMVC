define(["views/HomePageView", "underscore", "backbone"], function (HomePageView) {
	
	//console.log(HomePageView);
	var ApplicationRouter = Backbone.Router.extend({
		initialize: function() {
			//create instance of various views
			console.log('Init Router');
			this.homePageView = new HomePageView;
		},

		routes: {
			"": "welcome",
			"search": "search"
		},

		welcome: function() {
			console.log('Index');
			this.homePageView.render();
		},

		search: function() {
			console.log('search');
		}

	});
	var appRouter = new ApplicationRouter;
	return appRouter;
});
