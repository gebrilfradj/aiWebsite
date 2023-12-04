import { chosenartist, chosensong } from "./kmp.js";
//import { chosensong, chosenartist } from "./stringhash.js";

const finalPost = {
  artist: chosenartist,
  song: chosensong
};

const start = performance.now();


const apiUrl = 'whateverAPI/get_song';

const finalTime = 0;
const audioURL = '';

//setting up post
const request = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' 
  },
  body: JSON.stringify(finalPost)
};

//sending
fetch(apiUrl, request)
  .then(response => response.blob())
    .then(blob=> {
    const end = performance.now();
    finalTime = end - start;
    audioURL = URL.createObjectURL(blob);
    if (response.ok) {
      
      console.log('POST request successful');
    } else {
      throw new Error('POST request failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  export {finalTime, audioURL};
  