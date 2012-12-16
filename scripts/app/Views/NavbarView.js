define(["text!templates/navbar.js","collections/NavbarCollection","bootstrap-dropdown","underscore","backbone"], function(templateFile, navbarCollection) {
	
	var NavbarView = Backbone.View.extend({
		el: $('.container'),

		template: templateFile,

		initialize: function() {
			console.log('Init NavbarView');
		}, 

		render: function() {
			collection = navbarCollection.toJSON();
			console.log('Navbar render');
			templateData = $(this.template).html();
			
			var template = _.template(templateData, {'data': collection} );

			//console.log(template({name: 'sagar'}));
			$(this.el).append(template);
		}
	});

	return NavbarView;
});