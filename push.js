import { chosenartist, chosensong } from "./kmp.js";
//import { chosensong, chosenartist } from "./stringhash.js";

const finalPost = {
  artist: chosenartist,
  song: chosensong
};


const apiUrl = 'whateverAPI/get_song';


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
  .then(response => {
    if (response.ok) {
      console.log('POST request successful');
    } else {
      throw new Error('POST request failed');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });