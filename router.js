var Router = Backbone.Router.extend({
	routes: {
    	'':'home',
    	'edit': 'editInfo',
    	'video': 'viewVideo',
    	'details': 'viewDetails',
    	'participate': 'participateForm'
	},

	home: function() {
		// Scroll to the top
		$("html, body").animate({ scrollTop: 0 }, "slow");

		var home = new homeView({model: model});
		home.render();
	},

	viewVideo: function() {
		// Scroll to the top
		$("html, body").animate({ scrollTop: 0 }, "slow");

		var video = new videoView({model: model});
		video.render();
	},

	editInfo: function() {
		// Scroll to the top
		$("html, body").animate({ scrollTop: 0 }, "slow");

		var editPage = new editView({model: model});
		editPage.render();
	},

	viewDetails: function() {

		// Scroll to the top
		$("html, body").animate({ scrollTop: 0 }, "slow");

		var detailsPage = new detailsView({model: model});
		detailsPage.render();
	},

	participateForm: function() {
		// Scroll to the top
		$("html, body").animate({ scrollTop: 0 }, "slow");
		
		var participatePage = new participateView({model: model});
		participatePage.render();
	}
});