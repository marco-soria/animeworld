// fetch api jikan search
document.getElementById('searchButton').addEventListener('click', function () {
  const searchInput = document.getElementById('searchInput').value;
  searchAnime(searchInput);
});

const searchAnime = async (query) => {
  const url = `https://api.jikan.moe/v4/anime?q=${query}&limit=12`;
  const response = await fetch(url);
  const data = await response.json();
  setSearchResults(data.data);
};

const setSearchResults = (results) => {
  const searchResultsContainer = document.getElementById('row-search-results');
  searchResultsContainer.innerHTML = ''; // Limpiar resultados anteriores

  results.forEach((result) => {
      const synopsisString = JSON.stringify(result.synopsis).replace(/'/g, "&apos;").replace(/"/g, "&quot;");
      const html = `
          <div class="col-md-4 mt-3 g-0 search-card">
              <div class="card" style="height: 450px;">
                  <img class="card-img-top mt-2 img-fluid"
                      src="${result.images.jpg.large_image_url}"
                      alt="${result.title}">
                  <div class="card-body text-center">
                      <h6 class="text-title">N. ${result.rank}</h6>
                      <h4 class="text-title">${result.title}</h4>
                      <p class="text-title">Score: ${result.score}</p>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#synopsisModal" data-synopsis="${synopsisString}" data-title="${result.title}">
                          Synopsis
                      </button>
                  </div>
              </div>
          </div>
      `;

      searchResultsContainer.innerHTML += html;
  });

  // Agregar evento click a los botones después de cargar el contenido
  document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('click', function () {
          const synopsis = this.getAttribute('data-synopsis');
          const title = this.getAttribute('data-title');
          cargarSinopsis(synopsis, title);
      });
  });
};


// fetch api jikan ranking
const animeContainer = document.querySelector("#row-ranking");
const url = "https://api.jikan.moe/v4/top/anime";

const obtenerAnime = async () => {
  const response = await fetch(`${url}?limit=12`);
  const data = await response.json();
  setAnimeView(data.data);
};

obtenerAnime();

const setAnimeView = (results) => {
  // Ordenar los resultados por ranking
  results.sort((a, b) => a.rank - b.rank);
  results.forEach((result, index) => {
    const synopsisString = JSON.stringify(result.synopsis).replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    const html = `
      <div class="col-md-4 mt-3 g-0">
        <div class="card" style="height: 1100px;">
          <img class="card-img-top mt-2"
            style="object-fit: cover; height: 80%;"
            src="${result.images.jpg.large_image_url}"
            alt="${result.title}">
          <div class="card-body text-center">
            <h6 class="text-title">N. ${result.rank}</h6>
            <h4 class="text-title">${result.title}</h4>
            <p class="text-title">Score: ${result.score}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#synopsisModal" data-synopsis="${synopsisString}" data-title="${result.title}">
            Synopsis
          </button>
          </div>
        </div>
      </div>
    `;

    animeContainer.innerHTML += html;
  });

  // Agregar evento click a los botones después de cargar el contenido
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
      const synopsis = this.getAttribute('data-synopsis');
      const title = this.getAttribute('data-title');
      cargarSinopsis(synopsis, title);
    });
  });
};

const cargarSinopsis = (synopsis, title) => {
  const synopsisModalLabel = document.getElementById("synopsisModalLabel");
  const synopsisContent = document.getElementById("synopsisContent");
  const cleanSynopsis = synopsis.replace(/\\n/g, '<br>').replace(/\\"/g, '"');
  
  // Establecer el título del modal
  synopsisModalLabel.innerText = title;

  // Establecer el contenido de la sinopsis
  synopsisContent.innerHTML = `<p>${cleanSynopsis}</p>`;
};


//carrusels

/* let items = document.querySelectorAll('.carousel .carousel-item')


		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
}) */

let carruseles = document.querySelectorAll('.carousel');

carruseles.forEach((carrusel) => {
    let items = carrusel.querySelectorAll('.carousel-item');
    const minPerSlide = 4;

    items.forEach((el) => {
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });
});







