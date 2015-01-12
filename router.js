var Router = Backbone.Router.extend({
	routes: {
    	'':'home'
	},

	home: function() {
		var home = new homeView({model: model});
		home.render();
	},
});