import Ember from 'ember';
const $ = Ember.$;

export default Ember.Route.extend({
	actions: {
		jumpToAnchor: function(element) {
			$('html, body').animate({
				scrollTop: $('#' + element).offset().top - 50
			}, 600);
		},
		toggleText: function() {
			$('.header-text').click(function() {
				if ($(this).text() === "Lunch.er") {
					$(this).text("Find Lunch");
				}
				else {
					$(this).text("Lunch.er");
				}
			});
		}
	}
});
