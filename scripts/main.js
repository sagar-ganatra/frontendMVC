require.config({
	
	baseUrl: 'scripts/lib',
	
	paths: {
		collections: "../app/Collections",
		views: "../app/Views",
		router: "../app/Router",
		templates: "../app/Templates"
	},

	waitSeconds: 15
});

define(["jquery","router/ApplicationRouter"], function($,appRouter) {
	
	
	(function() {		
		//console.log(appRouter);
		Backbone.history.start({pushState: true, root: '/frontendMVC/'});

	})();
	return {};
});
