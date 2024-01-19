/*navbar*/
let mainNav = document.getElementById("main-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let subMenu = document.querySelector(".sub-menu");
let storeMenu = document.querySelector(".store-menu");
let linkStore = document.getElementById("linkStore");
let linkMenu = document.getElementById("linkMenu");

navBarToggle.addEventListener("click", function (event) {
  event.preventDefault();
  subMenu.classList.toggle("active");
  storeMenu.classList.toggle("active");
});

linkMenu.addEventListener("click", function (event) {
  event.preventDefault();
  mainNav.classList.toggle("active");
  storeMenu.classList.remove("active");
});

linkStore.addEventListener("click", function (event) {
  event.preventDefault();
  storeMenu.classList.toggle("active");
  mainNav.classList.remove("active");
});

document.querySelectorAll('.store-content a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    // Ocultamos el menú desplegable después de hacer clic en una categoría
    subMenu.classList.remove('active');
    storeMenu.classList.remove('active');
  });
});

const productsData = [

  { product1: { id: 1, name: 'Spy x Family - Anya Expressions', description: '', image: 'img/store/product1.jpg', category: 'Accessories', price: 19.99, favorite: false } },
  { product2: { id: 2, name: 'Jujutsu Kaisen - Character  Box', description: '', image: 'img/store/product2.jpg', category: 'Accessories', price: 9.95, favorite: false } },
  { product3: { id: 3, name: 'Chainsaw Man - Blind Keychain', description: '', image: 'img/store/product3.jpg', category: 'Accessories', price: 14.95, favorite: false } },
  { product4: { id: 4, name: 'Naruto Shippuden - Akatsuki Box', description: '', image: 'img/store/product4.jpg', category: 'Accessories', price: 9.95, favorite: false } },
  { product5: { id: 5, name: 'Ein Cowboy Bebop Nendoroid Pin', description: '', image: 'img/store/product5.jpg', category: 'Accessories', price: 11.24, favorite: false } },
  { product6: { id: 6, name: 'Dragon Ball Z - Shenron FiGPiN', description: '', image: 'img/store/product6.jpg', category: 'Accessories', price: 13.49, favorite: false } },
  /* { product7: { id: 7, name: 'Kingdom Hearts 20th Keychain', description: '', image: 'img/store/product7.jpg', category: 'Accessories', price: 26.99, favorite: false } },
  { product8: { id: 8, name: 'Phantom Thief P5 Metal Keychain', description: '', image: 'img/store/product8.jpg', category: 'Accessories', price: 7.99, favorite: false } },
  { product9: { id: 9, name: 'All Might Glitter FiGPiN', description: '', image: 'img/store/product9.jpg', category: 'Accessories', price: 24.99, favorite: false } },
  { product10: { id: 10, name: 'Jujutsu Kaisen - Geto Pin', description: '', image: 'img/store/product10.jpg', category: 'Accessories', price: 9.95, favorite: false } },
  { product11: { id: 11, name: 'Jujutsu Kaisen - Satoru Watch', description: '', image: 'img/store/product11.jpg', category: 'Accessories', price: 150.00, favorite: false } },
  { product12: { id: 12, name: 'One Piece - Devil Fruit Bucket Hat', description: '', image: 'img/store/product12.jpg', category: 'Accessories', price: 29.95, favorite: false } },
  { product13: { id: 13, name: "Jojo's Bizarre Adventure - Beanie'", description: '', image: 'img/store/product13.jpg', category: 'Accessories', price: 24.99, favorite: false } },
  { product14: { id: 14, name: 'Spy x Family - Blind Poster Set', description: '', image: 'img/store/product14.jpg', category: 'Accessories', price: 9.95, favorite: false } },
  { product15: { id: 15, name: 'Notebook Death Note Keychain', description: '', image: 'img/store/product15.jpg', category: 'Accessories', price: 7.99, favorite: false } },
  { product16: { id: 16, name: 'Naruto Shippuden Backpack', description: '', image: 'img/store/product16.jpg', category: 'Accessories', price: 49.95, favorite: false } }, */
  { product17: { id: 17, name: 'Berserk - The Complete TV Series', description: '', image: 'img/store/product17.jpg', category: 'Blu-ray', price: 44.96, favorite: false } },
  { product18: { id: 18, name: 'Futakoi - The Complete TV Series', description: '', image: 'img/store/product18.jpg', category: 'Blu-ray', price: 22.46, favorite: false } },
  { product19: { id: 19, name: 'Lovely Complex - LA Movie', description: '', image: 'img/store/product19.jpg', category: 'Blu-ray', price: 18.71, favorite: false } },
  { product20: { id: 20, name: 'Bleach Sennen Kessen-hen', description: '', image: 'img/store/product20.jpg', category: 'Blu-ray', price: 40.48, favorite: false } },
  { product21: { id: 21, name: 'Urusei Yatsura (2022) S1-2', description: '', image: 'img/store/product21.jpg', category: 'Blu-ray', price: 67.49, favorite: false } },
  { product22: { id: 22, name: 'Akiba Maid War', description: '', image: 'img/store/product22.jpg', category: 'Blu-ray', price: 52.49, favorite: false } },
  /* { product23: { id: 23, name: 'Insomniacs After School', description: '', image: 'img/store/product23.jpg', category: 'Blu-ray', price: 44.99, favorite: false } },
  { product24: { id: 24, name: 'RWBY: Ice Queendom', description: '', image: 'img/store/product24.jpg', category: 'Blu-ray', price: 52.49, favorite: false } },
  { product25: { id: 25, name: 'Lovely Complex TV', description: '', image: 'img/store/product25.jpg', category: 'Blu-ray', price: 27.46, favorite: false } },
  { product26: { id: 26, name: 'Kurokami The Animation', description: '', image: 'img/store/product26.jpg', category: 'Blu-ray', price: 37.46, favorite: false } },
  { product27: { id: 27, name: 'Sailor Moon SuperS', description: '', image: 'img/store/product27.jpg', category: 'Blu-ray', price: 44.99, favorite: false } },
  { product28: { id: 28, name: 'Naruto Shippuden - Set 2', description: '', image: 'img/store/product28.jpg', category: 'Blu-ray', price: 24.99, favorite: false } },
  { product29: { id: 29, name: 'Mazinger Z - TV Series Collection 2', description: '', image: 'img/store/product29.jpg', category: 'Blu-ray', price: 59.96, favorite: false } },
  { product30: { id: 30, name: 'Lupin the 3rd - 7D Rhapsody', description: '', image: 'img/store/product30.jpg', category: 'Blu-ray', price: 18.71, favorite: false } },
  { product31: { id: 31, name: 'B Gata H Kei', description: '', image: 'img/store/product31.jpg', category: 'Blu-ray', price: 37.49, favorite: false } },
  { product32: { id: 32, name: 'Fairy Tail Collection 9', description: '', image: 'img/store/product32.jpg', category: 'Blu-ray', price: 41.24, favorite: false } }, */
  { product33: { id: 33, name: 'Junji Ito - Yon & Mu Holiday Sweater', description: '', image: 'img/store/product33.jpg', category: 'Clothing', price: 38.47, favorite: false } },
  { product34: { id: 34, name: 'One Piece - Gum Gum Sweater', description: '', image: 'img/store/product34.jpg', category: 'Clothing', price: 46.71, favorite: false } },
  { product35: { id: 35, name: "JoJo's Bizarre Adventure - Mista", description: '', image: 'img/store/product35.jpg', category: 'Clothing', price: 24.99, favorite: false } },
  { product36: { id: 36, name: "JoJo's Bizarre Adventure - Hoodie", description: '', image: 'img/store/product36.jpg', category: 'Clothing', price: 64.95, favorite: false } },
  { product37: { id: 37, name: 'Trigun - Ready Set  T-Shirt', description: '', image: 'img/store/product37.jpg', category: 'Clothing', price: 29.95, favorite: false } },
  { product38: { id: 38, name: 'Hunter x Hunter - T-Shirt', description: '', image: 'img/store/product38.jpg', category: 'Clothing', price: 19.96, favorite: false } },
  /* { product39: { id: 39, name: 'Attack on Titan - Sweater', description: '', image: 'img/store/product39.jpg', category: 'Clothing', price: 19.96, favorite: false } },
  { product40: { id: 40, name: 'Jujutsu Kaisen - Gojo Hoodie', description: '', image: 'img/store/product40.jpg', category: 'Clothing', price: 44.95, favorite: false } },
  { product41: { id: 41, name: 'Jujutsu Kaisen - Nobara Sleeve', description: '', image: 'img/store/product41.jpg', category: 'Clothing', price: 34.95, favorite: false } },
  { product42: { id: 42, name: 'DARLING in the FRANXX - Hoodie', description: '', image: 'img/store/product42.jpg', category: 'Clothing', price: 64.95, favorite: false } },
  { product43: { id: 43, name: 'Tokyo Ghoul - T-Shirt', description: '', image: 'img/store/product43.jpg', category: 'Clothing', price: 24.95, favorite: false } },
  { product44: { id: 44, name: 'Hunter x Hunter - Sweatpants', description: '', image: 'img/store/product44.jpg', category: 'Clothing', price: 24.99, favorite: false } },
  { product45: { id: 45, name: 'Jujutsu Kaisen - Tokyo Jacket', description: '', image: 'img/store/product45.jpg', category: 'Clothing', price: 89.95, favorite: false } },
  { product46: { id: 46, name: 'Junji Ito - Uzumaki Camo', description: '', image: 'img/store/product46.jpg', category: 'Clothing', price: 45.96, favorite: false } },
  { product47: { id: 47, name: 'Naruto Shippuden - Jacket', description: '', image: 'img/store/product47.jpg', category: 'Clothing', price: 44.95, favorite: false } },
  { product48: { id: 48, name: 'Akira Leather Jacket', description: '', image: 'img/store/product48.jpg', category: 'Clothing', price: 450.00, favorite: false } }, */
  { product49: { id: 49, name: 'Hades - Zagreus', description: '', image: 'img/store/product49.jpg', category: 'Figures', price: 12.95, favorite: false } },
  { product50: { id: 50, name: 'Chained Soldier - Kyouka Uzen', description: '', image: 'img/store/product50.jpg', category: 'Figures', price: 337.49, favorite: false } },
  { product51: { id: 51, name: 'Bleach - Ichigo Kurosaki', description: '', image: 'img/store/product51.jpg', category: 'Figures', price: 31.99, favorite: false } },
  { product52: { id: 52, name: 'The Apothecary Diaries - Maomao', description: '', image: 'img/store/product52.jpg', category: 'Figures', price: 31.99, favorite: false } },
  { product53: { id: 53, name: 'Frieren - Fern Nendoroid', description: '', image: 'img/store/product53.jpg', category: 'Figures', price: 37.99, favorite: false } },
  { product54: { id: 54, name: 'Jujutsu Kaisen - Satoru Gojo S', description: '', image: 'img/store/product54.jpg', category: 'Figures', price: 419.99, favorite: false } },
  /* { product55: { id: 55, name: 'One Piece - Luffy & Ace ', description: 'Description for Accessory 2', image: 'img/store/product55.jpg', category: 'Figures', price: 252.99, favorite: false } },
  { product56: { id: 56, name: 'Bleach - Toushiro Hitsugaya', description: 'Description for Accessory 2', image: 'img/store/product56.jpg', category: 'Figures', price: 69.99, favorite: false } },
  { product57: { id: 57, name: 'Falslander - Samurai Figma', description: 'Description for Accessory 2', image: 'img/store/product57.jpg', category: 'Figures', price: 100.99, favorite: false } },
  { product58: { id: 58, name: 'Chainsaw Man - Makima S.H', description: 'Description for Accessory 2', image: 'img/store/product58.jpg', category: 'Figures', price: 77.99, favorite: false } },
  { product59: { id: 59, name: 'Astro Boy -  Kit', description: 'Description for Accessory 2', image: 'img/store/product59.jpg', category: 'Figures', price: 24.99, favorite: false } },
  { product60: { id: 60, name: 'Jujutsu Kaisen - Toji Fushiguro', description: 'Description for Accessory 2', image: 'img/store/product60.jpg', category: 'Figures', price: 38.99, favorite: false } },
  { product61: { id: 61, name: 'Naruto - Naruto Uzumaki', description: 'Description for Accessory 2', image: 'img/store/product61.jpg', category: 'Figures', price: 34.99, favorite: false } },
  { product62: { id: 62, name: 'Overlord - Clementiner', description: 'Description for Accessory 2', image: 'img/store/product62.jpg', category: 'Figures', price: 219.99, favorite: false } },
  { product63: { id: 63, name: 'Amnesia - Ikki Nendoroid', description: 'Description for Accessory 2', image: 'img/store/product63.jpg', category: 'Figures', price: 61.99, favorite: false } },
  { product64: { id: 64, name: 'To Love-Ru Darkness - Momo', description: 'Description for Accessory 2', image: 'img/store/product64.jpg', category: 'Figures', price: 43.99, favorite: false } }, */
  { product65: { id: 65, name: 'Initial D V7', description: 'Description for Accessory 2', image: 'img/store/product65.jpg', category: 'Manga', price: 18.99, favorite: false } },
  { product66: { id: 66, name: 'Spy x Family Manga V11', description: 'Description for Accessory 2', image: 'img/store/product66.jpg', category: 'Manga', price: 24.99, favorite: false } },
  { product67: { id: 67, name: 'xxxHOLiC Rei Graphic N3', description: 'Description for Accessory 2', image: 'img/store/product67.jpg', category: 'Manga', price: 8.79, favorite: false } },
  { product68: { id: 68, name: 'Naruto Manga V21', description: 'Description for Accessory 2', image: 'img/store/product68.jpg', category: 'Manga', price: 7.99, favorite: false } },
  { product69: { id: 69, name: 'Rainbow Days Manga V7', description: 'Description for Accessory 2', image: 'img/store/product69.jpg', category: 'Manga', price: 7.99, favorite: false } },
  { product70: { id: 70, name: 'Dragon Ball Z Manga V25', description: 'Description for Accessory 2', image: 'img/store/product70.jpg', category: 'Manga', price: 7.99, favorite: false } },
  /* { product71: { id: 71, name: 'Hunter X Hunter Manga V21', description: 'Description for Accessory 2', image: 'img/store/product71.jpg', category: 'Manga', price: 7.99, favorite: false } },
  { product72: { id: 72, name: 'Your Lie In April Manga V11', description: 'Description for Accessory 2', image: 'img/store/product72.jpg', category: 'Manga', price: 7.99, favorite: false } },
  { product73: { id: 73, name: 'One Piece Manga V61', description: 'Description for Accessory 2', image: 'img/store/product73.jpg', category: 'Manga', price: 7.99, favorite: false } },
  { product74: { id: 74, name: 'Fairy Tail Manga V56', description: 'Description for Accessory 2', image: 'img/store/product74.jpg', category: 'Manga', price: 7.99, favorite: false } },
  { product75: { id: 75, name: 'Monster: Manga 7', description: 'Description for Accessory 2', image: 'img/store/product75.jpg', category: 'Manga', price: 18.39, favorite: false } },
  { product76: { id: 76, name: 'Ponyo Film Comic Manga V4', description: 'Description for Accessory 2', image: 'img/store/product76.jpg', category: 'Manga', price: 7.99, favorite: false } },
  { product77: { id: 77, name: 'Tomie Deluxe Edition', description: 'Description for Accessory 2', image: 'img/store/product77.jpg', category: 'Manga', price: 27.99, favorite: false } },
  { product78: { id: 78, name: 'Given Manga V5', description: 'Description for Accessory 2', image: 'img/store/product78.jpg', category: 'Manga', price: 7.99, favorite: false } },
  { product79: { id: 79, name: 'Food Wars! V9', description: 'Description for Accessory 2', image: 'img/store/product79.jpg', category: 'Manga', price: 7.99, favorite: false } },
  { product80: { id: 80, name: 'World Trigger V', description: 'Description for Accessory 2', image: 'img/store/product80.jpg', category: 'Manga', price: 7.99, favorite: false } }, */
 

];

function loadCategoriesAndProducts() {
  const categoriesList = document.getElementById('js-categories-list');
  const productsContainer = document.getElementById('products-container');
  const searchInput = document.getElementById('searchInput');

  // Verificar si las categorías ya se han cargado
  if (categoriesList.children.length === 0) {
    // Cargar categorías solo si aún no se han cargado
    const uniqueCategories = [...new Set(productsData.map(product => Object.values(product)[0].category))];
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

  renderProducts(productsData);

  searchInput.addEventListener('input', () => {
    searchProducts();
  });
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
    products.forEach(productObj => {
      const product = Object.values(productObj)[0];
      const productCard = document.createElement('div');
      productCard.className = 'col-md-3 col-6 mb-4';
      productCard.innerHTML = `
            <div class="card formbg">
            <img src="${product.image}" class="card border-0" alt="${product.name}" style="height: 40vh; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title" style="color: #9500ff;">${product.name}</h5>
                    
                        <p class="card-text fs-5">$${product.price.toFixed(2)}</p>
                        
                    <div class="d-flex justify-content-between align-items-center">
                      <button class="btn btn-primary signupbutton mt-2">Add to Cart</button>
                      <i class="heart-icon fa ${product.favorite ? 'fa-solid' : 'fa-regular'} fa-heart fa-2xl" style="cursor: pointer; color: #ff0088;"></i>
                    </div>
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
    renderProducts(productsData);  // Mostrar solo los primeros productos en 'All'
  } else {
    const filteredProducts = productsData.filter(productObj => Object.values(productObj)[0].category === category);
    renderProducts(filteredProducts);  // Mostrar solo los primeros productos en la categoría seleccionada
  }
}

// Función de búsqueda por nombre
function searchProducts() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = productsData.filter(productObj => Object.values(productObj)[0].name.toLowerCase().includes(searchTerm));
  renderProducts(filteredProducts); 
}

// Llamada a la función loadCategoriesAndProducts() al cargar la página
window.addEventListener('load', loadCategoriesAndProducts);