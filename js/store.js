/*navbar*/
let mainNav = document.getElementById("main-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let subMenu = document.querySelector(".sub-menu");
let storeMenu = document.querySelector(".store-menu");
let linkStore = document.getElementById("linkStore");
let linkMenu = document.getElementById("linkMenu");

navBarToggle.addEventListener("click", function(event) {
  event.preventDefault();
  subMenu.classList.toggle("active");
  storeMenu.classList.toggle("active");
});

linkMenu.addEventListener("click", function(event) {
  event.preventDefault();
  mainNav.classList.toggle("active");
  storeMenu.classList.remove("active");
});

linkStore.addEventListener("click", function(event) {
  event.preventDefault();
  storeMenu.classList.toggle("active");
  mainNav.classList.remove("active");
});

document.querySelectorAll('.store-content a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      // Ocultamos el menú desplegable después de hacer clic en una categoría
      subMenu.classList.remove('active');
      storeMenu.classList.remove('active');
    });
  });



const productsData = [
   
    { name: 'Accessory 1', description: 'Description for Accessory 1', image: 'accessories/product1.jpg', category: 'Accessories', price: 19.99, favorite: false },
    { name: 'Accessory 2', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Accessories', price: 24.99, favorite: false },
    { name: 'Accessory 3', description: 'Description for Accessory 1', image: 'accessories/product1.jpg', category: 'Accessories', price: 19.99, favorite: false },
    { name: 'Accessory 4', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Accessories', price: 24.99, favorite: false },
    { name: 'Accessory 5', description: 'Description for Accessory 1', image: 'accessories/product1.jpg', category: 'Accessories', price: 19.99, favorite: false },
    { name: 'Accessory 6', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Accessories', price: 24.99, favorite: false },
    { name: 'Accessory 7', description: 'Description for Accessory 1', image: 'accessories/product1.jpg', category: 'Accessories', price: 19.99, favorite: false },
    { name: 'Accessory 8', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Accessories', price: 24.99, favorite: false },
    { name: 'Accessory 9', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Accessories', price: 24.99, favorite: false },
    { name: 'Accessory 10', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Accessories', price: 24.99, favorite: false },
    { name: 'Accessory 11', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Accessories', price: 24.99, favorite: false },
    { name: 'Accessory 12', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Accessories', price: 24.99, favorite: false },
    { name: 'Blue 1', description: 'Description for Accessory 1', image: 'accessories/product1.jpg', category: 'Blu-ray', price: 19.99, favorite: false },
    { name: 'Blue 2', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Blu-ray', price: 24.99, favorite: false },
    { name: 'Blue 3', description: 'Description for Accessory 1', image: 'accessories/product1.jpg', category: 'Blu-ray', price: 19.99, favorite: false },
    { name: 'Blue 4', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Blu-ray', price: 24.99, favorite: false },
    { name: 'Blue 5', description: 'Description for Accessory 1', image: 'accessories/product1.jpg', category: 'Blu-ray', price: 19.99, favorite: false },
    { name: 'Blue 6', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Blu-ray', price: 24.99, favorite: false },
    { name: 'Blue 7', description: 'Description for Accessory 1', image: 'accessories/product1.jpg', category: 'Blu-ray', price: 19.99, favorite: false },
    { name: 'Blue 8', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Blu-ray', price: 24.99, favorite: false },
    { name: 'Blue 9', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Blu-ray', price: 24.99, favorite: false },
    { name: 'Blue 10', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Blu-ray', price: 24.99, favorite: false },
    { name: 'Blue 11', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Blu-ray', price: 24.99, favorite: false },
    { name: 'Blue 12', description: 'Description for Accessory 2', image: 'accessories/product2.jpg', category: 'Blu-ray', price: 24.99, favorite: false },
    
];

function loadCategoriesAndProducts() {
    const categoriesList = document.getElementById('js-categories-list');
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.getElementById('searchInput');

    // Verificar si las categorías ya se han cargado
    if (categoriesList.children.length === 0) {
        // Cargar categorías solo si aún no se han cargado
        const uniqueCategories = [...new Set(productsData.map(product => product.category))];
        uniqueCategories.unshift('All'); // Agrega la categoría 'All' al principio del array

        uniqueCategories.forEach(category => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = category;
            categoriesList.appendChild(listItem);

            listItem.addEventListener('click', () => {
                filterProducts(category);
            });
        });
    }

    // Paginación
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';

    const prevLink = document.createElement('a');
    prevLink.innerHTML = 'Prev &lt';
    prevLink.addEventListener('click', () => {
        if (currentPage > 1) {
            navigatePages(-1);
        }
    });

    const pageNumber = document.createElement('span');
    pageNumber.textContent = '1';

    const nextLink = document.createElement('a');
    nextLink.innerHTML = '&gt Next';
    nextLink.addEventListener('click', () => {
        const lastPage = Math.ceil(productsData.length / productsPerPage);
        if (currentPage < lastPage) {
            navigatePages(1);
        }
    });

    paginationContainer.appendChild(prevLink);
    paginationContainer.appendChild(pageNumber);
    paginationContainer.appendChild(nextLink);

    // Insertar la paginación después del contenedor de productos
    productsContainer.insertAdjacentElement('afterend', paginationContainer);

    // Inicializar la paginación
    navigatePages(0);

    searchInput.addEventListener('input', () => {
        searchProducts();
    });
}

let currentPage = 1;
const productsPerPage = 12;

function navigatePages(direction) {
    currentPage += direction;

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const currentProducts = productsData.slice(startIndex, endIndex);
    renderProducts(currentProducts);

    // Actualizar el número de página
    const pageNumber = document.querySelector('.pagination-container span');
    pageNumber.textContent = currentPage;

}

function renderProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    if (products.length === 0) {
        // Mostrar mensaje de "Product not found"
        const notFoundMessage = document.createElement('p');
        notFoundMessage.textContent = 'Product not found';
        notFoundMessage.className = 'not-found-message';
        productsContainer.appendChild(notFoundMessage);
    } else {
        // Mostrar productos
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-4 mb-4';
            productCard.innerHTML = `
            <div class="card">
                <img src="img/${product.category.toLowerCase()}/${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <i class="heart-icon fa ${product.favorite ? 'fa-solid' : 'fa-regular'} fa-heart" style="cursor: pointer; color: #ff0000;"></i>
                    </div>
                    <button class="btn btn-primary btn-block mt-2 w-100">Add to Cart</button>
                </div>
            </div>
        `;

        const heartIcon = productCard.querySelector('.heart-icon');
        heartIcon.addEventListener('click', () => {
            product.favorite = !product.favorite;
            heartIcon.classList.toggle('fa-solid');
            heartIcon.classList.toggle('fa-regular');
        });

        productsContainer.appendChild(productCard);
        });
    }
}

function filterProducts(category) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''; // Limpiar el campo de búsqueda al cambiar de categoría

    if (category === 'All') {
        renderProducts(productsData.slice(0, productsPerPage));  // Mostrar solo los primeros productos en 'All'
    } else {
        const filteredProducts = productsData.filter(product => product.category === category);
        renderProducts(filteredProducts.slice(0, productsPerPage));  // Mostrar solo los primeros productos en la categoría seleccionada
    }
}

// Función de búsqueda por nombre
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts.slice(0, productsPerPage));  // Mostrar solo los primeros productos en la búsqueda
}

// Llamada a la función loadCategoriesAndProducts() al cargar la página
window.addEventListener('load', loadCategoriesAndProducts);