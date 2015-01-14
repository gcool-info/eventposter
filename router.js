var Router = Backbone.Router.extend({
	routes: {
    	'':'home',
    	'edit': 'editInfo',
    	'video': 'viewVideo'
	},

	home: function() {
		home.render();
	},

	viewVideo: function() {
		video.render();
	},

	editInfo: function() {
		editPage.render();
	}
});