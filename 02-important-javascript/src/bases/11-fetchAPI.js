// Fetch API
// Nos proporciona traer recursos de un enpoint a traves de peticiones 
const ApiKey = "XQexrEhvg5AAG273RfyejY3tz4nXJdmN&tag=&rating";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ ApiKey }=g`);

// cuando devuelve esto "body: ReadableStream" dentro del objeto, 
// debemos agregar otro .then.
// Recuerda siempre destructurar el objeto, de lo contrario te devolvera un undefined.
peticion
    .then( resp => resp.json() )
    .then( ( {data} ) => {
        const url = data.images.original.url;
        console.log(url);  

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } )
    .catch ( console.warn );