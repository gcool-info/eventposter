var Router = Backbone.Router.extend({
	routes: {
    	'':'home',
    	'edit':'editInfo'
	},

	home: function() {
		var home = new homeView();

		home.render();
	},

	editInfo: function() {
		var edit = new editView();

		edit.render();
	}
});