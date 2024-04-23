// hamburger menu show up
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarMenu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

// jump to a particular section in same page
function jumpToAbout() {
    var aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView();
}

function jumpToProducts() {
    var productSection = document.getElementById('products');
    productSection.scrollIntoView();
}

function jumpToContact() {
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView();
}



// automate product and dialog creation

const products = [
    {
        name: "Product 1",
        description: "Description of Product 1",
        imageSrc: "img/lipstick1.webp"
        },
    {
    name: "Product 2",
    description: "Description of Product 2",
    imageSrc: "img/lipstick3.webp"
    },
    {
    name: "Product 3",
    description: "Description of Product 2",
    imageSrc: "img/lipstick4.webp"
    },
    

    // add more if needed

];

function createProductCard(product, index) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')
    productCard.innerHTML = `
    <img src="${product.imageSrc}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <button class="btn" id="btn${index}">View Details</button>
    `;
    document.querySelector('.products').appendChild(productCard); // appends the productCard into products class section

    
    const dialog = document.createElement('dialog');
    dialog.classList.add('dialog');
    dialog.id = `dialog${index}`;
    dialog.innerHTML = `
    <img src="${product.imageSrc}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <button class="btn close-btn" id="closeBtn${index}">Close</button>
    `;

    document.querySelector('.products').appendChild(dialog);

    // view details products
    const btn = document.getElementById(`btn${index}`);
    const closeBtn = document.getElementById(`closeBtn${index}`);

    btn.addEventListener('click', () => {
        dialog.showModal();
    });

    closeBtn.addEventListener('click', () => {
        dialog.close();
    });
}

// Loop through products and create product cards
products.forEach((product, index) => {
    createProductCard(product, index + 1);
  });