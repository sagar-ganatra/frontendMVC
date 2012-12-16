define(["underscore","Backbone"], function() {

	var NavbarCollection = new Backbone.Collection;

	NavbarCollection.add([
	{
		name: 'Home',
		link: '/home'
	},
	{
		name: 'Menu1',
		link: '/menu1',
		child: [
			{
				name: 'Submenu1',
				link: '/submenu1'
			},
			{
				name: 'Submenu2',
				link: '/Submenu2'
			}
		]
	},
	{
		name: 'Menu2',
		link: '/menu2',
		child: [
			{
				name: 'Submenu3',
				link: '/submenu3'
			},
			{
				name: 'Submenu4',
				link: '/Submenu4'
			}
		]
	}

	]);

	return NavbarCollection;
});