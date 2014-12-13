
var songs = [
    {filename:'/songs/ThatsDamnRockAndRoll.mp3', filetitle:'Thats Damn Rock & Roll'},
    {filename:'/songs/Talladega.mp3', filetitle:'Talladega'},
    {filename:'/songs/TheOutsiders.mp3', filetitle:'The Outsiders'}

];

var thisWin = $.index;
var winTitle = 'Media Player';
var currentSong = 0;
var audioPlayer = Ti.Media.createSound();

function doopen(evt) {
    if (OS_ANDROID) {
        thisWin.title = winTitle;
    } else {
        $.windowtitle.text = winTitle;
    }
    updateScreen();
}

function playsong(evt) {
    audioPlayer.url = songs[currentSong].filename;
    audioPlayer.play();
}

function stopplayer() {
    audioPlayer.stop();
    audioPlayer.release();
}

function prevdown(evt) {
    evt.source.opacity = .5;
}

function prevup(evt) {
    evt.source.opacity = 1;
    moveback();
}

function moveback() {
    if (currentSong > 0) {
        currentSong--;
        if (audioPlayer.isPlaying()) {
            stopplayer();
        }
        updateScreen();
    }
}

function playdown(evt) {
    evt.source.opacity = .5;
}

function playup(evt) {
    evt.source.opacity = 1;
    
    if (!audioPlayer.isPlaying()) {
      
        evt.source.image = 'btnstop.png';
        playsong();  
       
    } else {     
        
        evt.source.image = 'btnplay.png';
        stopplayer();
    }
}

function nextdown(evt) {
    evt.source.opacity = .5;
}

function nextup(evt) {
    evt.source.opacity = 1;
    moveforward();
}

function moveforward() {
    if (currentSong < songs.length - 1) {
        currentSong++;
        if (audioPlayer.isPlaying()) {
            stopplayer();
            playsong();
        }
        updateScreen();
    }
}

function updateScreen() {
    $.songtitle.text = songs[currentSong].filetitle;
}


$.index.open();
