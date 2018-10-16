// this is mock data, but when we create our API
// we'll have it return data that looks like this
let MOCK_SONGS = {
	"songs": [
        {
            "id": "1",
            "name": "Sweet Leaf",
            "artist": "Black Sabbath",
            "album": "Master of Reality",
        },
        {
            "id": "2",
            "name": "Funeraloplois",
            "artist": "Electric Wizard",
            "album": "Funeralopolis",
        },
        {
            "id": "3",
            "name": "Space Cadet",
            "artist": "Kyruss",
            "album": "Welcome to Sky Valley",
        },
        {
            "id": "4",
            "name": "Rhymes like Dimes",
            "artist": "MF Doom",
            "album": "Operation Doomsday",
        },
        {
            "id": "5",
            "name": "Hold on",
            "artist": "Tom Waits",
            "album": "Mule Variations",
        },
        {
            "id": "6",
            "name": "Windowlicker",
            "artist": "Aphex Twin",
            "album": "Windowlicker",
        },
        {
            "id": "7",
            "name": "Roygbiv",
            "artist": "Boards of Canada",
            "album": "Music has the Right to Children",
        }
    ]
};

const song = MOCK_SONGS.songs;

let MOCK_PLAYLISTS = {
    "playlists" : [
        {
            "name": "playlist 1",
            "description": "playlist 1",
            "songs": [song[1].name, song[0].name, song[6].name]
        }
    ]
};

console.log(MOCK_PLAYLISTS)

// this function's name and argument can stay the
// same after we have a live API, but its internal
// implementation will change. Instead of using a
// timeout function that returns mock data, it will
// use jQuery's AJAX functionality to make a call
// to the server and then run the callbackFn
function getSongs(callbackFn) {
    // we use a `setTimeout` to make this asynchronous
    // as it would be with a real AJAX call.
	setTimeout(function(){ callbackFn(MOCK_SONGS)}, 1);
}

function getPlaylist(callbackFn) {
    setTimeout(function() { callbackFn(MOCK_PLAYLISTS)}, 1);
}

// this function stays the same when we connect
// to real API later
function displaySongs(data) {
    for (index in data.songs) {
	   $('body').append(
        `<p>${data.songs[index].name}</br>
        By: ${ data.songs[index].artist}</br>
        From: ${data.songs[index].album}</p>`);
    }
}



function displayPlaylist(data) {
    for (index in data.playlists) {
	   $('body').append(
        `<p> Name: ${data.playlists[index].name}</br>
        Description: ${data.playlists[index].description}</br>
        Songs: ${data.playlists[index].songs}</p>`);
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplaysongs() {
	getSongs(displaySongs);
}

function getAndDisplayPlaylist() {
    getPlaylist(displayPlaylist);
}



//  on page load do this
$(getAndDisplaysongs)
$(getAndDisplayPlaylist)