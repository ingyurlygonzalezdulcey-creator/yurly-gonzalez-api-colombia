
<p align="center">
  <img src="img/logo-colombia.png" alt="Logo del proyecto Mini Portal de Colombia" width="600">
</p>

<h1 align="center">Mini Portal de Colombia con API</h1>

<p align="center">
  Conoce los departamentos y atractivos turísticos de Colombia.
</p>

---

## 🌎 Descripción del proyecto

Mini Portal de Colombia es un sitio web informativo que consume datos de la API pública de Colombia para mostrar información sobre nuestro país de manera dinámica.

El proyecto cuenta con dos secciones:

### 1. Explorador de departamentos

Permite consultar información de los departamentos de Colombia, mostrando:

- Nombre del departamento.
- Región.
- Capital.
- Número de municipios.
- Población.
- Superficie.
- Descripción.
- Cantidad de departamentos por región.

### 2. Guía turística de Colombia

Permite conocer los primeros 20 atractivos turísticos de Colombia, mostrando:

- Nombre del atractivo turístico.
- Fotografía obtenida de la API o una imagen alternativa de Wikipedia.
- Descripción.
- Ciudad.
- Departamento.

Las dos secciones están conectadas mediante un menú de navegación.

## 🛠️ Tecnologías utilizadas

- **HTML5:** estructura de las páginas.
- **CSS3:** diseño y presentación.
- **JavaScript:** consulta y manejo de los datos.
- **Fetch API:** consumo de servicios externos.
- **API Colombia:** fuente de información.

## 📁 Estructura del proyecto

```text
yurly-gonzalez-api-colombia/
│
├── index.html
├── turismo.html
│
├── css/
│   └── estilos.css
│
├── js/
│   ├── departamentos.js
│   └── turismo.js
│
├── img/
│   └── logo-colombia.png
│
└── README.md
```

## 🔗 API utilizada

Se utiliza la API pública de Colombia:

[https://api-colombia.com/](https://api-colombia.com/)

Servicios consultados:

- **Departamentos:**  
  https://api-colombia.com/api/v1/Department

- **Regiones:**  
  https://api-colombia.com/api/v1/Region

- **Atractivos turísticos:**  
  https://api-colombia.com/api/v1/TouristicAttraction

## ▶️ Cómo ejecutar el proyecto

1. Descargar o clonar este repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar el archivo `index.html` utilizando Live Server.
4. Navegar entre las opciones Explorador de departamentos y Guía turística.

## 🌐 Página publicada

**Enlace para visitar el proyecto:**

[Ver Mini Portal de Colombia] https://ingyurlygonzalezdulcey-creator.github.io/yurly-gonzalez-api-colombia/


## 📦 Repositorio

[Ver repositorio en GitHub](https://github.com/ingyurlygonzalezdulcey-creator/yurly-gonzalez-api-colombia)

## 👩‍💻 Autora

**Yurly Gonzalez**

Proyecto académico desarrollado como ejercicio práctico de consumo de API y manipulación del DOM con JavaScript.

