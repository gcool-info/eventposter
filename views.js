var homeView = Backbone.View.extend({

	el: 'body',

	events: {
		'click .play-video': 'playVideo',
		'click .remove-video': 'removeVideo',
		'click #learn-more': 'showDetails'
	},

	render: function() {
		this.$el.html(_.template($('#home').html()));
	},

	playVideo: function() {

		"use strict";
  		$(".video-container").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + this.model.get('video-key') + '?autoplay=1&loop=1&rel=0&wmode=transparent&showinfo=0&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

  		this.removeElements();

  		$(".video-container").addClass("animation-fade-in");
  		$(".full").addClass("animation-slide-down-fade");
	},

	showDetails: function() {
		$( ".details" ).show(100);
		$(".details").addClass("animation-fade-in");
		this.removeElements();
	},

	removeElements: function() {
		$( ".remove-video" ).show(0);

		$(".organisation-logo").addClass("animation-slide-out-left");
		$(".event-logo").addClass("animation-slide-out-right");
		$(".play-video").addClass("animation-slide-out-bottom");
		$(".description").addClass("animation-slide-out-bottom");
		$(".action-btn").addClass("animation-slide-down");
		$(".remove-video").addClass("animation-fade-in");
	},

	addElements: function() {
		$(".video-container").addClass("animation-fade-out");
  		$(".remove-video").addClass("animation-fade-out");
  		$(".action-btn").addClass("animation-slide-up");
  		$(".full").addClass("animation-slide-up-fade");
  		$(".description").addClass("animation-slide-in-bottom");
  		$(".play-video").addClass("animation-slide-in-bottom");
  		$(".event-logo").addClass("animation-slide-in-right");
  		$(".organisation-logo").addClass("animation-slide-in-left");
  		$(".details").addClass("animation-fade-out");
		$( "#remove-video" ).hide(500);
		$( ".details" ).hide(1000);


		setTimeout(function(){
			$(".organisation-logo").removeClass("animation-slide-out-left");
			$(".event-logo").removeClass("animation-slide-out-right");
			$(".play-video").removeClass("animation-slide-out-bottom");
			$(".description").removeClass("animation-slide-out-bottom");
			$(".full").removeClass("animation-slide-down-fade");
			$(".action-btn").removeClass("animation-slide-down");
			$(".remove-video").removeClass("animation-fade-in");
			$(".video-container").removeClass("animation-fade-in");	
			$(".details").removeClass("animation-fade-in");

			$(".video-container").removeClass("animation-fade-out");
	  		$(".remove-video").removeClass("animation-fade-out");
	  		$(".action-btn").removeClass("animation-slide-up");
	  		$(".full").removeClass("animation-slide-up-fade");
	  		$(".description").removeClass("animation-slide-in-bottom");
	  		$(".play-video").removeClass("animation-slide-in-bottom");
	  		$(".event-logo").removeClass("animation-slide-in-right");
	  		$(".organisation-logo").removeClass("animation-slide-in-left");
	  		$(".details").removeClass("animation-fade-out");
	  	},2000)
	},

	removeVideo: function() {


		"use strict";
  		$(".video-container").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + this.model.get('video-key') + '?wmode=transparent&showinfo=0&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

  		this.addElements();
	},
});