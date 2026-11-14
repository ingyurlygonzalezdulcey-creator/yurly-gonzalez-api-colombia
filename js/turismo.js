
// Direcciones de las API
const url = "https://api-colombia.com/api/v1/TouristicAttraction";
const urlDepartamentos = "https://api-colombia.com/api/v1/Department";

// Seleccionamos el contenedor
const contenedor = document.getElementById("turismo");

// Mensaje de carga
contenedor.innerHTML = "<p>Cargando atractivos turísticos...</p>";

const IMAGEN_POR_DEFECTO = "https://placehold.co/300x200?text=Sin+imagen";

function cargarImagen(imagen, urlApi, textoBusqueda) {

    imagen.referrerPolicy = "no-referrer";
    imagen.loading = "lazy";

    let yaSeBuscoEnWikipedia = false;

    imagen.onerror = function () {
        if (!yaSeBuscoEnWikipedia) {
            yaSeBuscoEnWikipedia = true;

            buscarImagenWikipedia(textoBusqueda)
                .then(urlWiki => {
                    imagen.src = urlWiki || IMAGEN_POR_DEFECTO;
                })
                .catch(() => {
                    imagen.onerror = null;
                    imagen.src = IMAGEN_POR_DEFECTO;
                });

        } else {
            imagen.onerror = null;
            imagen.src = IMAGEN_POR_DEFECTO;
        }
    };

    if (urlApi && urlApi.trim() !== "") {
        imagen.src = urlApi;
    } else {
        imagen.onerror();
    }
}

function buscarImagenWikipedia(texto) {

    const url =
        "https://es.wikipedia.org/w/api.php" +
        "?action=query&format=json&origin=*" +
        "&generator=search&gsrlimit=1" +
        "&gsrsearch=" + encodeURIComponent(texto) +
        "&prop=pageimages&piprop=thumbnail&pithumbsize=400";

    return fetch(url)
        .then(response => response.json())
        .then(datos => {

            if (!datos.query) {
                return null;
            }

            const paginas = Object.values(datos.query.pages);

            return paginas[0]?.thumbnail?.source || null;
        });
}

// Consultamos los atractivos turísticos
fetch(url)
    .then(response => response.json())
    .then(data => {

        // Consultamos los departamentos
        fetch(urlDepartamentos)
            .then(response => response.json())
            .then(departamentos => {

                // Limpiamos el contenedor
                contenedor.innerHTML = "";

                // Mostramos los primeros 20 atractivos
                data.slice(0, 20).forEach(atractivo => {

                    // Obtenemos la imagen de la API
                    const urlImagen = atractivo.images && atractivo.images.length > 0
                        ? atractivo.images[0]
                        : "";

                    // Buscamos el departamento de la ciudad
                    const departamento = departamentos.find(
                        departamento => departamento.id === atractivo.city?.departmentId
                    );

                    // Creamos una tarjeta
                    const tarjeta = document.createElement("div");

                    tarjeta.innerHTML = `
                        <img src="" alt="Fotografía de ${atractivo.name}">

                        <h3>${atractivo.name}</h3>
                        <p><strong>Descripción:</strong> ${atractivo.description}</p>
                        <p><strong>Ciudad:</strong> ${atractivo.city ? atractivo.city.name : "No disponible"}</p>
                        <p><strong>Departamento:</strong> ${departamento ? departamento.name : "No disponible"}</p>
                    `;

                    // Cargamos la imagen de la API o buscamos una en Wikipedia
                    const imagenTarjeta = tarjeta.querySelector("img");

                    cargarImagen(imagenTarjeta, urlImagen, atractivo.name);

                    // Agregamos la tarjeta
                    contenedor.appendChild(tarjeta);

                });

            });

    })
    .catch(error => {
        contenedor.innerHTML = "<p>Error al cargar los atractivos turísticos.</p>";
        console.log("Error:", error);
    });
