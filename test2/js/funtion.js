// ya third party ha jo api data fetch kr ny asani farham krta isko install krna parta magar myn nhi kia
//const axios = require(axios);
    async function filterAlbums() {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const userAlbum = await response.json();
            

            const albumData = userAlbum.filter(album => album.title.toLowerCase().includes('live'));
            const albumsfiltered = albumData.sort((a,b) => b.id - a.id);
            return albumsfiltered;

        } catch(eorr) {
            console.log('erorr fetching data:', error)
        }

    }
    filterAlbums()
    .then(albumsfiltered =>{
        console.log('user albums:', albumsfiltered);
    }) 