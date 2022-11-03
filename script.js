const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = ['some value'];

// Unsplash API
const count = 10;
const apiKey = "Bc5E6X6RWj8_vk7UlthqhdGIvgmsu8dO0yJq22RGF7Y";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Check if all images have loaded.
function imageLoaded(){
    console.log('image loaded');
}



function setAttributes(element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos(){
    // create elements to display links and photos.in DOM
    // create <a> to link to Unsplash
    photosArray.forEach((photo) => {
        const item = document.createElement('a');

        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });

    // create <img> for photos
        const img = document.createElement('img');

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
    // Event listener for when function is done loading.
    img.addEventListener('load', imageLoaded);

    // put <img> inside <a> inside imageContainer div
        item.appendChild(img);
        imageContainer.appendChild(item);
    } );
    }

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

// Check to see if scrolling near bottom of page and then load more photos
window.addEventListener('scroll', ()=>{
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){

        console.log('get more');
    }
});



// call to API function

getPhotos();