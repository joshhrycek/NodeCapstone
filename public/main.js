const API_KEY = "18EB45A9A97353A2EDAB03957312534B"

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
            "album": "Dopethrone",
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

let SONGS_TO_ADD = []

function getSongs(callbackFn) {
	setTimeout(function(){ callbackFn(MOCK_SONGS)}, 1);
}

function getPlaylist(callbackFn) {
    setTimeout(function() { callbackFn(MOCK_PLAYLISTS)}, 1);
}

function displaySongs(data) {
    for (index in data.songs) {
	   $('.songs-list').append(
        `<li class="song col-12"><input type="checkbox" class="song-checkbox" data-song-id="${data.songs[index].id}"> ${data.songs[index].name}</br>
        By: ${ data.songs[index].artist}</br>
        From: ${data.songs[index].album}</li>`);
    }
}


function displayPlaylist(data) {
    for (index in data.playlists) {
	   $('.users-playlists').append(
        `<li class= "playlists"> Name: ${data.playlists[index].name}</br>
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

function selectSongs() {
    $('.songs-list').on('change','.song-checkbox', event => {
        let current = event.currentTarget.checked;
        console.log(`Current Selection is ${current}`)
        let songId = $(event.currentTarget).data('song-id');
        songId = parseInt(songId, 10);

        if(current === true){
            SONGS_TO_ADD.push(songId);
        }else{
            SONGS_TO_ADD.slice();
        };

    });
}

function addSongToPlaylist() {
    $('.add').on('click', event => {
        let query = $('.')
    });
}

function removeSongFromPlaylist() {
    $('.remove').on('click', event =>{
        let query = $('.')
    });
}

function startApp() {
    getAndDisplayPlaylist();
    getAndDisplaySongs();
    selectSongs();
}

$(startApp)