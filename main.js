console.log('¡Hola Consola!');

const API_URL_RANDOM = "https://api.thedogapi.com/v1/images/search?limit=2&?api_key=live_ZSPqxIlHXWM73DLlrh3ZWMCJmqicWdQlOQ8o7XK5gW5bo6A1xjuh7VAcI3qVymQL";
const API_URL_FAVORITES = "https://api.thedogapi.com/v1/favourites?api_key=live_ZSPqxIlHXWM73DLlrh3ZWMCJmqicWdQlOQ8o7XK5gW5bo6A1xjuh7VAcI3qVymQL";
const spanError = document.getElementById('error');

async function loadRandomDogs() {   // Cargando la API de perros con resultados "Random"
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Random');
    console.log(data);

    if (res.status !== 200) {      // Agregando un condicional que lance un error si el Codigo HTTP es mayor a 200
        spanError.innerHTML = 'Hubo un error:' + rest.status;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
    };

    async function loadfavoritesDogs() {  // Cargando la API de favoritos agregados
        const res = await fetch(API_URL_FAVORITES);
        const data = await res.json();
        console.log('Favorites');
        console.log(data);

        if (res.status !== 200) { // Agregando un condicional que lance un error si el Codigo HTTP es mayor a 200
            spanError.innerHTML = 'Hubo un error:' + rest.status + data.message;
    };
};

async function saveFavoriteDogs() {
    const res = await fetch (API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id:"uISezUGDV"
        }),
    });
    const data = await res.json();
    console.log('Save')
    console.log(res)

    if (res.status !== 200) { // Agregando un condicional que lance un error si el Codigo HTTP es mayor a 200
        spanError.innerHTML = 'Hubo un error:' + rest.status + data.message;
};
}

loadRandomDogs();
loadfavoritesDogs();

