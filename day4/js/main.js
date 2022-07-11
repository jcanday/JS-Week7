
let mid = (n,lst) => {
     let middle = Math.floor(lst.length / 2)
     if (lst.length % 2 == 0)
        return (lst[middle-1] < n ? true : false)
     else{
        return (lst[middle] < n ? true: false)
    }
}
console.log(mid(105,[10,30,44,22,100]))


// Declarations for our song values
let song;
let playSong;



// Spotify Client Creds
const clientId = "73b74394d1244b23a7f71831a72f1562";
const clientSecret = "dc5ce45273fb4da198c6fb0eb3ddac94";

const _getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    // Access the data given to us by the fetch response (Promise)
    const data = await result.json();
    return data.access_token
}

// Function to get Song Info when image figure is clicked
/**
 * @param img_index
 * @param item_index
 * 
 * Function gets song from spotify using the image index of our gallery.
 * Then finds the correct item_index inside of the JSON response data from Spotify
 * which will produce a preview url that will be used to play song from soundtrack.
 */

 async function clickedEvent(img_index, item_index){
     // Get Track Name
     let track = document.getElementsByTagName('img')[img_index].attributes[2].value;

     // Get Token
     let token = await _getToken();

     let headers = new Headers([
         ['Content-Type', 'application/json'],
         ['Accept', 'application/json'],
         ['Authorization', `Bearer ${token}`]
     ]);

     let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
         method: 'GET',
         headers: headers
     });

     let result = await fetch(request);

     let response = await result.json();

     console.log(response)
     let song = response.tracks.items[item_index].preview_url


     // TODO: Add songSnippet function to play the selected song

    // Before we play a song, first check if playSong is True, if so then stop it
     if (playSong){
         stopSnippet();
     }
     songSnippet(song);
 }

 /**
  * @param id
  * @param event
  * 
  * id = image if for gallery image
  * event = Mouse event given by the action from our user
  * 
  * Function produces songs from the clickedEvent based 
  * on index of image.
  */

  function getSong(id,event){
      switch(id){
          case 'fig1': {
              event.stopPropagation();
              clickedEvent(0,3)
              break;
          }
          case 'fig2': {
              event.stopPropagation();
              clickedEvent(1,3)
              break;
          }
          case 'fig3': {
              event.stopPropagation();
              clickedEvent(2,3)
              break;
          }
          case 'fig4': {
              event.stopPropagation();
              clickedEvent(3,0)
              break;
          }
          case 'fig5': {
              event.stopPropagation();
              clickedEvent(4,0)
              break;
          }
          case 'fig6': {
              event.stopPropagation();
              clickedEvent(5,1)
              break;
          }
      }
  }

  /**
   * @param url
   * 
   * url = Song Preview_url
   * 
   * Function will return an audio clip given by the preview url
   */

   function songSnippet(url){
       playSong = new Audio(url);
       return playSong.play()
   }

   /**
    * NO PARAMS
    * 
    * Function returns event to stop song snippet
    */
   function stopSnippet(){
       return playSong.pause();
   }