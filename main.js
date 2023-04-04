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
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => saveFavoriteDogs(data[0].id);
        btn2.onclick = () => saveFavoriteDogs(data[1].id);
    }
    };

    async function loadfavoritesDogs() {  // Cargando la API de favoritos agregados
        const res = await fetch(API_URL_FAVORITES);
        const data = await res.json();
        console.log('Favorites');
        console.log(data);

        if (res.status !== 200) { // Agregando un condicional que lance un error si el Codigo HTTP es mayor a 200
            spanError.innerHTML = 'Hubo un error:' + rest.status + data.message;
        } else {
            data.forEach(dog => {
                const section = document.getElementById('favoriteDogs')
                const article = document.createElement('article');
                const img = document.createElement('img');
                const btn = document.createElement('button');
                const btnText = document.createTextNode('Sacar de Favoritos');

                img.src = dog.image.url;
                img.width = 250;
                btn.appendChild(btnText);
                article.appendChild(img);
                article.appendChild(btn);
                section.appendChild(article);

            });
        };
};

async function saveFavoriteDogs(id) {
    const res = await fetch (API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id:id
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

