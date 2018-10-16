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

function getSongs(callbackFn) {
	setTimeout(function(){ callbackFn(MOCK_SONGS)}, 1);
}

function getPlaylist(callbackFn) {
    setTimeout(function() { callbackFn(MOCK_PLAYLISTS)}, 1);
}

function displaySongs(data) {
    for (index in data.songs) {
	   $('.songs-list').append(
        `<li class="song col-5"><input type="checkbox" value =""> ${data.songs[index].name}</br>
        By: ${ data.songs[index].artist}</br>
        From: ${data.songs[index].album}</li>`);
    }
}


function displayPlaylist(data) {
    for (index in data.playlists) {
	   $('.users-playlists').append(
        `<li> Name: ${data.playlists[index].name}</br>
        Description: ${data.playlists[index].description}</br>
        Songs: ${data.playlists[index].songs}</li>`);
    }
}


function getAndDisplaySongs() {
	getSongs(displaySongs);
}

function getAndDisplayPlaylist() {
    getPlaylist(displayPlaylist);
}


$(getAndDisplaySongs)
$(getAndDisplayPlaylist)