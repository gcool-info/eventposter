var homeView = Backbone.View.extend({

	el: 'body',

	render: function() {
		
	}
});

var editView = Backbone.View.extend({

	el: 'body',

	render: function() {
		console.log(this.model.get('title'));
	}
});