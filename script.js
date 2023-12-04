import { finalTime, audioURL } from "./push.js";

const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const skipBtn = document.getElementById('skipBtn');



document.getElementById('finalizeButton').addEventListener('click', function() {

  var spinner = document.querySelector('.spinner');
  spinner.classList.remove('hidden');
  setTimeout(function() {
    revealHiddenSection();
  }, finalTime); 
});

function revealHiddenSection() {

   var spinner = document.querySelector('.spinner');
  spinner.classList.add('hidden');
  
  var hiddenSection = document.querySelector('.hiddenSection');
  hiddenSection.style.display = 'block';

 

  hiddenSection.scrollIntoView({ behavior: 'smooth' });
  var audio = document.getElementById('audioPlayer');
  audio.src = audioURL;
  audio.play();
}

playBtn.addEventListener('click', function() {
  audio.play();
});

pauseBtn.addEventListener('click', function() {
  audio.pause();
});

skipBtn.addEventListener('click', function() {
  
  audio.currentTime += 10;
});

