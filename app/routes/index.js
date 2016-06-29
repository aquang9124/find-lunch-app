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
				$(this).text(function(_, text) {
					return text === "Lunch.er" ? "Find Lunch" : "Lunch.er";
				});
			});
		}
	}
});
