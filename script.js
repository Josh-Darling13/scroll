




// Unsplash API
const count = 10;
const apiKey = "Bc5E6X6RWj8_vk7UlthqhdGIvgmsu8dO0yJq22RGF7Y";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// API get photos

async function getPhotos(){


    try{
        const response = await fetch(apiURL);
        const apiData = await response.json();
        console.log(apiData);

    } catch(error){
        console.log(error);
    }
}

// call to API function

getPhotos();