var homeView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .play-video': 'playVideo',
		'click #learn-more': 'showDetails',
		'click #participate': 'showForm',
	},

	render: function() {
		this.$el.html(_.template($('#home').html()));

		// Set the position for the two buttons at the page bottom. It depends on the height of the content that is on the page
		this.setBtnPosition();

		// Set the color
		$('.divider-left').css('border-bottom',  '5px solid' + model.get("main-color"));
		$('.divider-right').css('border-bottom',  '5px solid' + model.get("main-color"));
		$('a:hover').css('color',  model.get("main-color"));
		$('a').css('color',  model.get("main-color"));

		// Entry Animations
		$(".description").addClass("animation-slide-in-bottom");
  		$(".play-video").addClass("animation-slide-in-bottom");
  		$(".event-logo").addClass("animation-slide-in-right");
  		$(".organisation-logo").addClass("animation-slide-in-left");
  		$(".full").addClass("animation-slide-up-fade");
  		$(".action-btn").addClass("animation-slide-up");

  		this.hideButtons();

	},

	// Function to hide video play, details & form if data hasn't been provided
	hideButtons: function() {
		var hasVideo = (this.model.get('video-key') !== '' ? true : false);
		var hasform = (this.model.get('subscibe-form') !== '' ? true : false);
		var hasDetails = (this.model.get('details') !== '' ? true : false);

		if (!hasVideo)
			$(".play-video").css('visibility', 'hidden');

		if (!hasform)
			$("#participate").css('visibility', 'hidden');

		if (!hasDetails)
			$("#learn-more").css('visibility', 'hidden');
	},

	// Function to seet the position for the two buttons at the page bottom
	setBtnPosition: function() {
		var contentHeight = $(".description").position.y;
		var margin = 30;

		$(".action-btn").css('top', contentHeight + margin);
	},	


	// Exit animations
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

	// Navigate to the promotional video details
	playVideo: function() {

		this.hideView();		

		setTimeout(function(){
			router.navigate('video', {trigger: true});
		},500)
	},

	// Navigate to the event details
	showDetails: function() {
		this.hideView();		

		setTimeout(function(){
			router.navigate('details', {trigger: true});
		},500)
	},

	// Navigate to the google form
	showForm: function() {
		this.hideView();

		setTimeout(function(){
			router.navigate('participate', {trigger: true});
		},500)
	},
});

/********* View for the promotional video ********/
var videoView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .go-back': 'removeVideo',
		'click #learn-more': 'showDetails',
		'click #participate': 'showForm',
	},


	render: function() {
		this.$el.html(_.template($('#video').html()));

		// Set the position for the two buttons at the page bottom. It depends on the height of the content that is on the page
		this.setBtnPosition();

		// The entry animations
		"use strict";
  		$(".video-container").html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' + this.model.get('video-key') + '?autoplay=1&loop=1&rel=0&wmode=transparent&showinfo=0&controls=0" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

  		$(".action-btn").addClass("animation-slide-down");
  		$(".video-container").addClass("animation-fade-in");
  		$(".full").addClass("animation-slide-down-fade");
  		$(".go-back").addClass("animation-fade-in");

  		this.hideButtons();
	},

	// Function to hide video play, details & form if data hasn't been provided
	hideButtons: function() {
		var hasform = (this.model.get('subscibe-form') !== '' ? true : false);
		var hasDetails = (this.model.get('details') !== '' ? true : false);

		if (!hasform)
			$("#participate").css('visibility', 'hidden');

		if (!hasDetails)
			$("#learn-more").css('visibility', 'hidden');
	},

	// Function to seet the position for the two buttons at the page bottom
	setBtnPosition: function() {
		var contentHeight = $(".video-container").height();
		var margin = -120;
		$(".action-btn").css('top',contentHeight + margin);
	},

	// Navigate to the details of the event
	showDetails: function() {
		this.hideView();
		
  		setTimeout(function(){
			router.navigate('details', {trigger: true});
		},1000)
	},

	// Navigate to the forn of the event
	showForm: function() {
		this.hideView();

		setTimeout(function(){
			router.navigate('participate', {trigger: true});
		},500)
	},

	// Exit animations
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

/********* View for the details of the event ********/
var detailsView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .go-back': 'removeDetails',
	},

	render: function() {
		this.$el.html(_.template($('#details').html()));

		// Set the position for the two buttons at the page bottom. It depends on the height of the content that is on the page
		this.setBtnPosition();


		// The entry animations
		$(".go-back").addClass("animation-fade-in");
		$(".details").addClass("animation-fade-in");
		$(".full").addClass("animation-slide-up-fade");
		$(".action-btn").addClass("animation-slide-down");

		this.hideButtons();
	},

	// Function to hide video play, details & form if data hasn't been provided
	hideButtons: function() {
		var hasform = (this.model.get('subscibe-form') !== '' ? true : false);
		var hasDetails = (this.model.get('details') !== '' ? true : false);

		if (!hasform)
			$("#participate").css('visibility', 'hidden');

		if (!hasDetails)
			$("#learn-more").css('visibility', 'hidden');
	},

	// Function to seet the position for the two buttons at the page bottom
	setBtnPosition: function() {
		var contentHeight = $(".details").height() + $(".go-back").height();
		var pageHeight = $(".full").height();

		console.log(pageHeight);
		var top = (contentHeight > pageHeight ? contentHeight + 30 : pageHeight - 110);

		$(".action-btn").css('top', top);
	},

	removeDetails: function() {

		// The exit animations
		$(".full").removeClass("animation-slide-up-fade")
		$(".full").addClass("animation-slide-down-fade");
		$(".go-back").addClass("animation-fade-out");
  		$(".details").addClass("animation-fade-out");
  		$(".action-btn").addClass("animation-slide-up");

  		setTimeout(function(){
			router.navigate('#', {trigger: true});

		},500)
	}
});

/********* View for the edit page form ********/
var editView = Backbone.View.extend({

	el: '.page',

	events: {
		'submit #website-data': 'submitData',
		'keyup .image-upload': 'checkImage',
		'keyup #main-color': 'checkColor',
		'keyup #password': 'checkPassword',
	},

	render: function() {
		this.$el.html(_.template($('#edit').html()));
	},

	checkImage: function(e) {
		var newImage = $(e.target).val();

		$("#" + e.target.id + '-thumb').attr('src', newImage);
	},

	checkColor: function(e) {
		var newColor = $(e.target).val();

		$("#" + e.target.id + '-thumb').css('background-color', newColor);
	},

	checkPassword: function(e) {

		$.ajax({
			url: 'server/login.php',
			type: 'POST',
			data: {
				"password": $(e.target).val()
			},
			success: function(response) {

				if (response == "Correct Password") {
					$(".edit-form").css('display', 'block');
					$(".edit-form").addClass('animation-fade-in');
					$(".password").addClass('animation-slide-down-fade'); 
					$('#password-verify').html('<i class="fa fa-smile-o green"></i>');
				} else {

					$('#password-verify').html('<i class="fa fa-frown-o"></i>');
				}

			},
			error: function() {

			} 
		});  
	},

	getVideoKey: function(url) {
		/* Regular expression to get the video key (only youtube is supported for now) */
		var videoRegEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;

		var videoKey = url.match(videoRegEx);

		console.log(videoKey);

		return videoKey[1];
	},

	submitData: function(e) {

		var data ={ 
			"password": $("#password").val(),
			"title": $("#title").val(), 
			"description": $("#baseline").val(), 
			"subscibe-form": $("#google-form").val(),
			"details": $("#details").val(),
			"video-key": this.getVideoKey($("#video-key").val()),
			"event-logo": $("#event-logo").val(),
			"organisation-logo": $("#organisation-logo").val(),
			"background-image": $("#background-image").val(),
			"main-color": $("#main-color").val(),
		}  

		$.ajax({
			url: 'server/save.php',
			type: 'POST',
			data: {
				"data": data
			},
			success: function(response) {

			},
			error: function() {

			} 
		});
	}
});

/********* View for the google form ********/
var participateView = Backbone.View.extend({

	el: '.page',

	events: {
		'click .go-back': 'removeForm',
	},

	render: function() {
		this.$el.html(_.template($('#participate-form').html()));

		// Add the animations
		$(".go-back").addClass("animation-fade-in");
		$(".form-container").addClass("animation-fade-in");
	},

	removeForm: function() {

		// Add the animations
		$(".go-back").addClass("animation-fade-out");
		$(".form-container").addClass("animation-slide-down-fade");

		// After the navigations are finished, return to the home page
		setTimeout(function(){
			router.navigate('#', {trigger: true});
		},1000)
	}
});