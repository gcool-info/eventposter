var homeView = Backbone.View.extend({

	el: 'body',

	events: {
		'click .play-video': 'playVideo',
		'click #remove-video': 'removeVideo'
	},

	render: function() {
		this.$el.html(_.template($('#home').html()));
	},

	playVideo: function() {

		"use strict";
  		$("#video-container").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + this.model.get('video-key') + '?autoplay=1&loop=1&rel=0&wmode=transparent&showinfo=0&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

		$( "#organisation-logo" ).animate({
			left: -1000,
			}, 500, function() {});

		$( "#event-logo" ).animate({
			left: 2000,
			}, 500, function() {});

		$( "#play-video" ).animate({
			opacity: 0,
			top: 50,
			}, 500, function() {});

		$( "#description" ).animate({
			bottom: -1000,
			}, 500, function() {});

		$( ".full" ).animate({
			opacity: 0,
			top: 50,
			}, 500, function() {});

		$( "#video-container" ).animate({
			opacity: 1,
			}, 500, function() {});

		$( "#remove-video" ).show(1000);

		$( "#remove-video" ).animate({
			opacity: 1,
			}, 1000, function() {});
	},

	removeVideo: function() {
		"use strict";
  		$("#video-container").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + this.model.get('video-key') + '?wmode=transparent&showinfo=0&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

		$( "#organisation-logo" ).animate({
			left: 0,
			}, 500, function() {});

		$( "#event-logo" ).animate({
			left: 0,
			}, 500, function() {});

		$( "#play-video" ).animate({
			opacity: 1,
			top: 0,
			}, 500, function() {});

		$( "#description" ).animate({
			bottom: 0,
			}, 500, function() {});

		$( ".full" ).animate({
			opacity: 0.15,
			top: 0,
			}, 500, function() {});

		$( "#video-container" ).animate({
			opacity: 0,
			}, 500, function() {});

		$( "#remove-video" ).hide(1000);

		$( "#remove-video" ).animate({
			opacity: 0,
			}, 1000, function() {});
	},
});