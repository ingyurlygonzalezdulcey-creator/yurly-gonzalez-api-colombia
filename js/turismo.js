
// Dirección de la API
const url = "https://api-colombia.com/api/v1/TouristicAttraction";

// Seleccionamos el contenedor
const contenedor = document.getElementById("turismo");

// Mensaje de carga
contenedor.innerHTML = "<p>Cargando atractivos turísticos...</p>";

// Consultamos la API
fetch(url)
    .then(response => response.json())
    .then(data => {

        // Limpiamos el contenedor
        contenedor.innerHTML = "";

        // Mostramos los primeros 20 atractivos
        data.slice(0, 20).forEach(atractivo => {

            // Creamos una tarjeta
            const tarjeta = document.createElement("div");

            tarjeta.innerHTML = `
                <h3>${atractivo.name}</h3>
                <p><strong>Descripción:</strong> ${atractivo.description}</p>
                <p><strong>Ciudad:</strong> ${atractivo.city ? atractivo.city.name : "No disponible"}</p>
            `;

            // Agregamos la tarjeta
            contenedor.appendChild(tarjeta);

        });

    })
    .catch(error => {
        contenedor.innerHTML = "<p>Error al cargar los atractivos turísticos.</p>";
        console.log("Error:", error);
    });
