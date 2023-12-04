var artists_arr;
var songsArr;
fetch('whateverAPI/get_all_artists')
  .then(response => response.json())
  .then(data => {
    artists_arr = data;
    // does this work
  })
  .catch(error => {
    console.error('Error:', error);
  });

  fetch('whateverAPI/get_all_songs')
  .then(response => response.json())
  .then(data => {
    songsArr = data;
  })
  .catch(error => {
    console.error('Error fetching songs:', error);
  });



  export { artists_arr, songsArr };