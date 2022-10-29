const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');



// Unsplash API
const count = 10;
const apiKey = "Bc5E6X6RWj8_vk7UlthqhdGIvgmsu8dO0yJq22RGF7Y";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let photosArray = ['some value'];


console.log(`first array ${photosArray}`);

// API get photos
async function getPhotos(){

    try{
        const response = await fetch(apiURL);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();

    } catch(error){
        console.log(error);
    }
}

function displayPhotos(){
    // create elements to display links and photos.in DOM
    // create <a> to link to Unsplash
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
    // create <img> for photos
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
    // put <img> inside <a> inside imageContainer div
        item.appendChild(img);
        imageContainer.appendChild(item);
    } );
    }

// call to API function

getPhotos();