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
		},
		createMap: function() {
			var value = $('#search-input').val();
			var map;
			var zeneLoc;
			var infoWindow;
			var service;
			var options = {
				zoom: 13,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			// callback functions

			// This is the callback for textSearch
			function fn(results, status) {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
				    for (var i = 0; i < results.length; i++) {
						var place = results[i];
						addMarker(place);
				    }
				}
			}

			// this adds the markers
			function addMarker(place) {
				var marker = new google.maps.Marker({
					map: map,
					position: place.geometry.location,
					icon: {
						url: 'http://maps.gstatic.com/mapfiles/circle.png',
						anchor: new google.maps.Point(10, 10),
						scaledSize: new google.maps.Size(15, 18)
					}
				});

				google.maps.event.addListener(marker, 'click', function() {
					service.getDetails(place, function(result, status) {
						if (status !== google.maps.places.PlacesServiceStatus.OK) {
							console.error(status);
							return;
						}
						var contentStr = "<p>" + result.name + "<br />" 
											+ "Rating: " + (result.rating ? result.rating : 'Unavailable')
											+ "<br />" + "Open Now!" 
											+ "<br />" + "Located at: " + result.formatted_address
											+ "<br />" + "More Details: " + "<a href='" + result.url + "' target='_blank'>Google Places Page</a>";
						infoWindow.setContent(contentStr);
						infoWindow.open(map, marker);
					});
				});
			}

			console.log(value);

			// create map
			map = new google.maps.Map(document.getElementById("g-map"), options);

			// location is set to zenefits coordinates
			zeneLoc = new google.maps.LatLng(37.7852330,-122.3956930);
			
			map.setCenter(zeneLoc);
			
			var request = {
				location: zeneLoc,
				radius: '500',
				openNow: true,
				query: value
			};
			
			infoWindow = new google.maps.InfoWindow();
			service = new google.maps.places.PlacesService(map);
			service.textSearch(request, fn);

		}
	}
});
