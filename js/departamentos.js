

// Direcciones de las API
const urlDepartamentos = "https://api-colombia.com/api/v1/Department";
const urlRegiones = "https://api-colombia.com/api/v1/Region";

// Seleccionamos el contenedor
const contenedor = document.getElementById("departamentos");

// Mensaje de carga
contenedor.innerHTML = "<p>Cargando departamentos...</p>";

// Consultamos primero las regiones
fetch(urlRegiones)
    .then(response => response.json())
    .then(regiones => {

        // Consultamos los departamentos
        fetch(urlDepartamentos)
            .then(response => response.json())
            .then(data => {

                // Limpiamos el contenedor
                contenedor.innerHTML = "";

                // Recorremos los departamentos
                data.forEach(departamento => {

                    // Buscamos el nombre de la región
                    const region = regiones.find(
                        region => region.id === departamento.regionId
                    );

                    // Creamos una tarjeta
                    const tarjeta = document.createElement("div");

                    tarjeta.innerHTML = `
                        <h3>${departamento.name}</h3>
                        <p><strong>Región:</strong> ${region ? region.name : "No disponible"}</p>
                        <p><strong>Capital:</strong> ${departamento.cityCapital.name}</p>
                        <p><strong>Municipios:</strong> ${departamento.municipalities}</p>
                        <p><strong>Población:</strong> ${departamento.population}</p>
                        <p><strong>Superficie:</strong> ${departamento.surface} km²</p>
                        <p><strong>Descripción:</strong> ${departamento.description}</p>
                    `;

                    // Agregamos la tarjeta
                    contenedor.appendChild(tarjeta);

                });

            });

    })
    .catch(error => {
        contenedor.innerHTML = "<p>Error al cargar la información.</p>";
        console.log("Error:", error);
    });

