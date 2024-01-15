/*navbar*/
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

const productsData = [
    // Agrega 12 objetos para cada categoría (accessories, blu-ray, clothing, figures, manga)
    // Cada objeto debe tener las keys: name, description, image, category, price
    // Ejemplo:
    { name: 'Producto 1', description: 'Descripción del producto', image: 'accessories/product1.jpg', category: 'Accessories', price: 19.99, favorite: false },
    { name: 'Producto 2', description: 'Otra descripción', image: 'accessories/product2.jpg', category: 'Accessories', price: 24.99, favorite: false },
    // ... Repite el mismo formato para otros productos
];

function loadCategoriesAndProducts() {
    const categoriesList = document.getElementById('categories');
    const productsContainer = document.getElementById('products');
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
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(searchTerm));
        renderProducts(filteredProducts);
    });
}

function renderProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4';
        productCard.innerHTML = `
            <div class="card">
                <img src="img/${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <i class="far ${product.favorite ? 'fa-heart' : 'fa-heart-o'}" style="cursor: pointer;"></i>
                    </div>
                    <button class="btn btn-primary btn-block mt-2">Add to Cart</button>
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
    const filteredProducts = (category === 'All') ? productsData : productsData.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

window.addEventListener('load', loadCategoriesAndProducts);
