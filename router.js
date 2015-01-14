var Router = Backbone.Router.extend({
	routes: {
    	'':'home',
    	'edit': 'editInfo',
    	'video': 'viewVideo',
    	'details': 'viewDetails',
    	'participate': 'participateForm'
	},

	home: function() {
		var home = new homeView({model: model});
		home.render();
	},

	viewVideo: function() {
		var video = new videoView({model: model});
		video.render();
	},

	editInfo: function() {
		var editPage = new editView({model: model});
		editPage.render();
	},

	viewDetails: function() {
		var detailsPage = new detailsView({model: model});
		detailsPage.render();
	},

	participateForm: function() {
		var participatePage = new participateView({model: model});
		participatePage.render();
	}
});