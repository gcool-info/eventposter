var homeView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .play-video': 'playVideo'
	},

	render: function() {
		this.$el.html(_.template($('#home').html()));

		/* Add animation classes */
		$(".description").addClass("animation-slide-in-bottom");
  		$(".play-video").addClass("animation-slide-in-bottom");
  		$(".event-logo").addClass("animation-slide-in-right");
  		$(".organisation-logo").addClass("animation-slide-in-left");
  		$(".full").addClass("animation-slide-up-fade");
	},

	playVideo: function() {

		/* Remove previous animation classes */
		$(".description").removeClass("animation-slide-in-bottom");
  		$(".play-video").removeClass("animation-slide-in-bottom");
  		$(".event-logo").removeClass("animation-slide-in-right");
  		$(".organisation-logo").removeClass("animation-slide-in-left");
  		$(".full").removeClass("animation-slide-up-fade");

  		/* Add new animation classes */
		$(".organisation-logo").addClass("animation-slide-out-left");
		$(".event-logo").addClass("animation-slide-out-right");
		$(".play-video").addClass("animation-slide-out-bottom");
		$(".description").addClass("animation-slide-out-bottom");
		$(".full").addClass("animation-slide-down-fade");

		setTimeout(function(){
			router.navigate('video', {trigger: true});
		},500)

	},
});

var videoView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .remove-video': 'removeVideo',
	},


	render: function() {
		this.$el.html(_.template($('#video').html()));

		"use strict";
  		$(".video-container").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + this.model.get('video-key') + '?autoplay=1&loop=1&rel=0&wmode=transparent&showinfo=0&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

  		$(".action-btn").addClass("animation-slide-down");
  		$(".video-container").addClass("animation-fade-in");
  		$(".full").addClass("animation-slide-down-fade");
  		$( ".remove-video" ).show(0);
  		$(".remove-video").addClass("animation-fade-in");
	},

	removeVideo: function() {

		"use strict";
  		$(".video-container").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + this.model.get('video-key') + '?wmode=transparent&showinfo=0&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

  		$(".video-container").addClass("animation-fade-out");
  		$(".remove-video").addClass("animation-fade-out");
  		$(".action-btn").addClass("animation-slide-up");

  		setTimeout(function(){
  			$(".action-btn").removeClass("animation-slide-down");
  			$(".action-btn").removeClass("animation-slide-up");
			router.navigate('', {trigger: true});

		},500)
	},
});

var editView = Backbone.View.extend({

	el: '.page',

	render: function() {
		this.$el.html(_.template($('#edit').html()));
	},
})