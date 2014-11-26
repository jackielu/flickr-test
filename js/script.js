
var map = L.map('map').setView([40.7305404, -73.9491009], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);


var flickerAPICall = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1b5f00b9d960f3d609069a883711b1bc&has_geo=&lat=40.7305404&lon=-73.9491009&radius=5&extras=geo&format=json&nojsoncallback=1&auth_token=72157649462634261-a2bfc899bb9bd9e7&api_sig=873f34b62043c7861e93c60fdaeae220";
//note that this API call shows your API key - this is something that is not best practice


$.getJSON(flickerAPICall,function(data){

	//make an array of the data that is returned
	var photoArray = data.photos.photo;
	console.log(photoArray);

	for(var i=0; i<photoArray.length; i++){
		
		var marker = photoArray[i];
		//var icon = getIcon(marker);

		//reconstruct the URL for the photo
		var photoUrl = "https://farm"
			+ marker.farm
			+ ".staticflickr.com/"
			+ marker.server
			+ "/"
			+ marker.id
			+ "_"
			+ marker.secret
			+ ".jpg";

			//console.log(photoUrl);

		L.marker( [marker.latitude, marker.longitude])
						.bindPopup(
							"<a href = '"
							+ photoUrl
							+ "'>"
							+ marker.title
							+ "</a>"
						)
						.addTo(map);

	}

});

