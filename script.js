console.log("Welcome to Tunifi")

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Friends", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ek Zindagi", filePath: "songs/2S.mp3", coverPath: "covers/2P.jpg"},
    {songName: "Give Me Some Sunshine", filePath: "songs/3S.mp3", coverPath: "covers/3P.jpg"},
    {songName: "Maa", filePath: "songs/4S.mp3", coverPath: "covers/t.jpg"},
    {songName: "Sooraj Ki Bahon Mein", filePath: "songs/5S.mp3", coverPath: "covers/4P.jpg"},
    {songName: "Ek Jindari", filePath: "songs/6S.mp3", coverPath: "covers/5P.jpg"},
]

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
       masterPlay.classList.remove('fa-pause-circle');
       masterPlay.classList.add('fa-play-circle');
       gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})