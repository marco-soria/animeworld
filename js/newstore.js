// Navbar toggle
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});

const productsData = [
    // Agregar 12 objetos para cada categoría (accessories, blu-ray, clothing, figures, manga)
    // Cada objeto debe tener las keys: name, description, image, category, price
    // Ejemplo:
    { name: 'Accessory 1', description: 'Description for Accessory 1', image: 'accessories/product1.jpg', category: 'Accessories', price: 19.99, favorite: false },
    // ... (productos restantes)
];

function loadCategoriesAndProducts() {
    const categoriesList = document.getElementById('js-categories-list');
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.getElementById('searchInput');

    const uniqueCategories = [...new Set(productsData.map(product => product.category))];
    uniqueCategories.push('All'); // Agrega la categoría 'All' para mostrar todos los productos

    uniqueCategories.forEach(category => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = category;
        categoriesList.appendChild(listItem);

        listItem.addEventListener('click', () => {
            filterProducts(category);
        });
    });

    renderProducts(productsData);

    searchInput.addEventListener('input', () => {
        searchProducts();
    });
}

function renderProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

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
                        <i class="far ${product.favorite ? 'fa-heart' : 'fa-heart-o'}" style="cursor: pointer;"></i>
                    </div>
                    <button class="btn btn-primary btn-block mt-2 w-100">Add to Cart</button>
                </div>
            </div>
        `;

        const heartIcon = productCard.querySelector('i');
        heartIcon.addEventListener('click', () => {
            product.favorite = !product.favorite;
            heartIcon.classList.toggle('fa-heart');
            heartIcon.classList.toggle('fa-heart-o');
        });

        productsContainer.appendChild(productCard);
    });
}

function filterProducts(category) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''; // Limpiar el campo de búsqueda al cambiar de categoría

    if (category === 'All') {
        renderProducts(productsData);
    } else {
        const filteredProducts = productsData.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Función para realizar la búsqueda por nombre
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
}

// Llamada a la función loadCategoriesAndProducts() al cargar la página
window.addEventListener('load', loadCategoriesAndProducts);

