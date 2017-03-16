var getFromApi = function(endpoint, query={}) {
	const url = new URL(`https://api.spotify.com/v1/${endpoint}`);
	console.log(query);
	Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
	return fetch(url).then(function(response) {
		if (!response.ok) {
			return Promise.reject(response.statusText);
		}
		return response.json();
	});
};

var artist;
var getArtist = function(name) {
	var artistQuery = {
    q: name,
    limit: 1,
    type: 'artist'
	}
	return getFromApi('search/', artistQuery)
		.then(function(item) {
			artist = item.artists.items[0];
			console.log(artist);
			return artist;
		}
	);
};

// function myObjectCreator() {
// 	return { 
// 		myProperty: function() { return true }
// 	}
// }

// var result = myObjectCreator()


// Use .then to add a callback which will run when getFromApi resolves.

// Inside the callback you should:

// Set the artist global to be equal to item.artists.items[0], where item is the information obtained from the API (which will be passed as the first argument to your callback).
// Return the artist object.
// Return the promise which you created by calling getFromApi.

// Open up index.html and try running a search. You should see that an artist who matches your search term is added below the search bar.

// You can handle errors from promises by adding a .catch block at the end of your promise. For example:

// fetch('http://example.com').then(response => {
//     // Do something on success
// }).catch(function(err) {
//     // Do something on failure
// });
// // Exercise

// // Add a catch block to your promise in the getArtist method. Inside the function you should log out any errors thrown from your promise. Try changing the endpoint name to gibberish and performing a search to make sure that any errors are being caught and logged out. Don't forget to change it back when you've confirmed that your catch block is working.
