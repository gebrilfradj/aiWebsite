fetch('whateverAPI/get_all_artists')
  .then(response => response.json())
  .then(data => {
    var artists_arr = data;
    // does this work
  })
  .catch(error => {
    console.error('Error:', error);
  });

  fetch('whateverAPI/get_all_songs')
  .then(response => response.json())
  .then(data => {
    var songs_arr = data;
  })
  .catch(error => {
    console.error('Error fetching songs:', error);
  });


  
  export { artistsArr, songsArr };