import { songPromise, selectSong, artistPromise, selectArtist} from "./kmp.js";
//import { chosensong, chosenartist } from "./stringhash.js";

async function pushToAPI(artistPromise, songPromise) {
  try {
    const chosenartist = await artistPromise;
    const chosensong = await songPromise;

    // Rest of your code...

    // Example API call
    const finalPost = {
      artist: chosenartist,
      song: chosensong
    };

    const start = performance.now();
    const apiUrl = 'whateverAPI/get_song';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(finalPost)
    });

    const blob = await response.blob();
    const end = performance.now();
    const finalTime = end - start;
    const audioURL = URL.createObjectURL(blob);

    if (response.ok) {
      console.log('POST request successful');
      return { finalTime, audioURL }; // Returning finalTime and audioURL
    } else {
      throw new Error('POST request failed');
    }
  } catch (error) {
    console.error('Error:', error);
    return { finalTime: 0, audioURL: '' }; // Return default values in case of error
  }
}

export default pushToAPI;
  