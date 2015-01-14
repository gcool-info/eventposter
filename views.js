var homeView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .play-video': 'playVideo',
		'click #learn-more': 'showDetails',
		'click #participate': 'showForm',
	},

	render: function() {
		this.$el.html(_.template($('#home').html()));

		this.setBtnPosition();

		/* Add animation classes */
		$(".description").addClass("animation-slide-in-bottom");
  		$(".play-video").addClass("animation-slide-in-bottom");
  		$(".event-logo").addClass("animation-slide-in-right");
  		$(".organisation-logo").addClass("animation-slide-in-left");
  		$(".full").addClass("animation-slide-up-fade");
  		$(".action-btn").addClass("animation-slide-up");

	},

	setBtnPosition: function() {
		var contentHeight = $(".description").position.y;
		var margin = 30;

		$(".action-btn").css('top', contentHeight + margin);
	},	


	hideView: function() {
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
	},

	playVideo: function() {

		this.hideView();		

		setTimeout(function(){
			router.navigate('video', {trigger: true});
		},500)
	},

	showDetails: function() {
		this.hideView();		

		setTimeout(function(){
			router.navigate('details', {trigger: true});
		},500)
	},

	showForm: function() {
		this.hideView();

		setTimeout(function(){
			router.navigate('participate', {trigger: true});
		},500)
	},
});

var videoView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .go-back': 'removeVideo',
		'click #learn-more': 'showDetails',
		'click #participate': 'showForm',
	},


	render: function() {
		this.$el.html(_.template($('#video').html()));

		this.setBtnPosition();

		"use strict";
  		$(".video-container").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + this.model.get('video-key') + '?autoplay=1&loop=1&rel=0&wmode=transparent&showinfo=0&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

  		$(".action-btn").addClass("animation-slide-down");
  		$(".video-container").addClass("animation-fade-in");
  		$(".full").addClass("animation-slide-down-fade");
  		$(".go-back").addClass("animation-fade-in");
	},

	setBtnPosition: function() {
		var contentHeight = $(".video-container").height();
		var margin = -90;
		$(".action-btn").css('top',contentHeight + margin);
	},

	showDetails: function() {
		this.hideView();
		
  		setTimeout(function(){
			router.navigate('details', {trigger: true});
		},1000)
	},

	showForm: function() {
		this.hideView();

		setTimeout(function(){
			router.navigate('participate', {trigger: true});
		},500)
	},

	hideView: function() {
		"use strict";
  		$(".video-container").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + this.model.get('video-key') + '?wmode=transparent&showinfo=0&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');


  		$(".action-btn").removeClass("animation-slide-down");
  		$(".video-container").removeClass("animation-fade-in");
  		$(".full").removeClass("animation-slide-down-fade");
  		$(".go-back").removeClass("animation-fade-in");

  		$(".video-container").addClass("animation-fade-out");
  		$(".go-back").addClass("animation-fade-out");
  		$(".action-btn").addClass("animation-slide-up");
	},

	removeVideo: function() {

		this.hideView();

  		setTimeout(function(){
			router.navigate('', {trigger: true});
		},500)
	},
});

var detailsView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .go-back': 'removeDetails',
	},

	render: function() {
		this.$el.html(_.template($('#details').html()));

		this.setBtnPosition();

		$(".go-back").addClass("animation-fade-in");
		$(".details").addClass("animation-fade-in");
		$(".full").addClass("animation-slide-up-fade");
		$(".action-btn").addClass("animation-slide-down");
	},

	setBtnPosition: function() {
		var contentHeight = $(".details").position.y;
		var margin = 20;
		$(".action-btn").css('top',contentHeight + margin);
	},

	removeDetails: function() {
		$(".full").removeClass("animation-slide-up-fade")
		$(".full").addClass("animation-slide-down-fade");
		$(".go-back").addClass("animation-fade-out");
  		$(".details").addClass("animation-fade-out");
  		$(".action-btn").addClass("animation-slide-up");

  		setTimeout(function(){
			router.navigate('', {trigger: true});

		},500)
	}
});

var editView = Backbone.View.extend({

	el: '.page',

	render: function() {
		this.$el.html(_.template($('#edit').html()));

	},
});

var participateView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .go-back': 'removeForm',
	},

	render: function() {
		this.$el.html(_.template($('#participate-form').html()));

		$(".go-back").addClass("animation-fade-in");
		$(".form-container").addClass("animation-fade-in");
	},

	removeForm: function() {
		$(".go-back").addClass("animation-fade-out");
		$(".form-container").addClass("animation-slide-down-fade");

		setTimeout(function(){
			router.navigate('', {trigger: true});
		},1000)
	}
});