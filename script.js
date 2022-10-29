const imageContainer = document.getElementById('imageContainer');
const loader = document.getElementById('loader');

let photosArray = [];


// Unsplash API
const count = 10;
const apiKey = "Bc5E6X6RWj8_vk7UlthqhdGIvgmsu8dO0yJq22RGF7Y";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// API get photos


async function getPhotos(){

    try{
        const response = await fetch(apiURL);
        photosArray = await response.json();
        console.log(photosArray);

    } catch(error){
        console.log(error);
    }
}

// call to API function

getPhotos();