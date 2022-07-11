// Create two Global Vars for songs
let song;
let playSong;

// Spotify Credentials.. (keep these off of Github)
const clientId ='4489c30f5aa54618888be5e3f5ee3857';
const clientSecret ='9332245d48a04a46bc12a11dceaee46a';

const getToken = async () =>{
    const result = await fetch(`https://accounts.spotify.com/api/token`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(clientId + ":" + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })

    const data = await result.json()
    console.log(data)
    console.log(data.access_token)
    return data.access_token
}

/**
 * Function  gets songs from spotify using the image index from gallery.
 * Then finding the correct item_index from the object returned from Spotify.
 * This will produce a preview url to play the song.
 * @param {number} imgIndex - index of an image in gallery
 * @param {number} itemIndex - item on spotify response list holding our song preview
 */
 let clickedEvent = async (imgIndex, itemIndex) =>{
    // get track name
    let track = document.getElementsByTagName('img')[imgIndex].attributes[1].value;
    console.log(`Searching for track: ${track}`)

    let token = await getToken();

    let headers = new Headers([
        ['Content-Type','application/json'],
        ['Accept','application/json'],
        ['Authorization', `Bearer ${token}`]
    ]);

    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
        method: 'GET',
        headers:headers
    })

    let result = await fetch(request)
    let response = await result.json()
    
    let tracks = response.tracks.items
    for (let i = 0; i < tracks.length; i++){
        console.log(`Track ${i}: ${tracks[i].preview_url}`)
    }
    // TODO : choose and play a song

    song = tracks[itemIndex].preview_url

    if(playSong){
        stopSnippet();
    }
    songSnippet(song)
}
/**
 * Function produces songs from the clickevent based on an image index
 * @param {*} id = image id for gallery image
 * @param {*} event = mouse event given by user action
 */
let getSong = (id, event) =>{
    event.stopPropagation();
    switch(id){
        case "fig1":{
            clickedEvent(0,0)
            break;
        }
        case "fig2":{
            clickedEvent(1,0)
            break;
        }
        case "fig3":{
            clickedEvent(2,0)
            break;
        }
        case "fig4":{
            clickedEvent(3,0)
            break;
        }
        case "fig5":{
            clickedEvent(4,0)
            break;
        }
        case "fig6":{
            clickedEvent(5,0)
            break;
        }
        default:{
            console.log('No Case For That')
            break;
        }
    }

}
/**
 * 
 * @param {string} url song preview url 
 * @returns a playing song
 */
let songSnippet = url =>{
    playSong = new Audio(url)
    return playSong.play()
}

let stopSnippet = () => playSong.pause();

