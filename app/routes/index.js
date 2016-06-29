import Ember from 'ember';
const $ = Ember.$;

export default Ember.Route.extend({
	actions: {
		jumpToAnchor: function(element) {
			$('html, body').animate({
				scrollTop: $('#' + element).offset().top
			}, 600);
		}
	}
});
