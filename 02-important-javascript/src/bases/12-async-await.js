// Peticiones async y await

// Veremos un ejemplo de como aplicamos este tipo de peticiones con FETCH.

// Async se utiliza en funciones para poder utilizar la propiedad Await que nos indica
// cuando podemos pasar a la siguiente linea de codigo, cuando carga su valor.

const getImage = async() => {

    const ApiKey = "XQexrEhvg5AAG273RfyejY3tz4nXJdmN&tag=&rating";
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ ApiKey }=g`);
    // console.log(resp);
    const { data } = await resp.json();
    // console.log(data);

    const img = document.createElement('img');
    img.src = data.images.original.url;
    document.body.append(img);

}

getImage();

// Para manejar los errores debemos utilizar el Try and Catch 
// y entar en el try todo el codigo que creamos.