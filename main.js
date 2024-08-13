// nav section 

document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const openNavMenuBtn = document.getElementById('open-nav-menu');
    const closeNavMenuBtn = document.getElementById('close-nav-menu');
    const navMenu = document.querySelector('.wrapper'); // This should be the menu you want to show/hide
  
    // Function to open the navigation menu
    function openNavMenu() {
      navMenu.classList.add('nav-open');  
    }
    // Function to close the navigation menu
    function closeNavMenu() {
      navMenu.classList.remove('nav-open');  
    }
  
    // Event listeners for open and close buttons
    openNavMenuBtn.addEventListener('click', openNavMenu);
    closeNavMenuBtn.addEventListener('click', closeNavMenu);
});


// greetings 

const greetings = ['Good Morning!', 'Good Afternoon!', 'Good Evening!'];
const currentHour = new Date().getHours();

let index = currentHour >=12 && currentHour < 17 ? 1 : currentHour >= 17 ? 2 : 0;

document.querySelector('#greeting').innerHTML = greetings[index];


// weather update 
const celciusTemp = '22°C';

const weatherSummary = `The weather is currently ${celciusTemp}, tafuta mtu`;

document.querySelector('#weather').innerHTML = weatherSummary;

// const fahrTemp =   

function celciusToFahrenheit(celcius) {
    fahrenTemp = (celciusTemp * 9/5) + 32;

}


// show digital time 

function showTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    document.querySelector('[data-time = "hours"]').innerHTML = hours;
    document.querySelector('[data-time = "minutes"]').innerHTML = minutes;
    document.querySelector('[data-time = "seconds"]').innerHTML = seconds;
}

setInterval(showTime, 1000);


// image slider 

let galleryImages = [
    '/assets/gallery/image1.jpg',
    '/assets/gallery/image2.jpg',
    '/assets/gallery/image3.jpg'
]


function changeIMage(index) {
    document.querySelector('#imgShow').src = galleryImages[index];
    
}


// product images 


document.addEventListener('DOMContentLoaded', function () {
    const productsArea = document.querySelector('.products-area');
    
    const products = {
      all: [
        { src: './assets/products/img1.png', alt: 'Product 1' },
        { src: './assets/products/img2.png', alt: 'Product 2' },
        { src: './assets/products/img3.png', alt: 'Product 3' },
      ],
      paid: [
        { src: './assets/products/img1.png', alt: 'Product 1' },
        { src: './assets/products/img2.png', alt: 'Product 2' },
      ],
      free: [
        { src: './assets/products/img3.png', alt: 'Product 3' },
      ]
    };
  
    function displayProducts(category) {
      productsArea.innerHTML = ''; // Clear current images
      products[category].forEach(product => {
        const img = document.createElement('img');
        img.src = product.src;
        img.alt = product.alt;
        img.style.maxWidth = '100%'; // Ensure the image fits well in its container
        img.style.display = 'block';
        img.style.margin = '10px 0'; // Add some spacing between images
        productsArea.appendChild(img);
      });
    }
  
    document.getElementById('all').addEventListener('change', function () {
      displayProducts('all');
    });
  
    document.getElementById('paid').addEventListener('change', function () {
      displayProducts('paid');
    });
  
    document.getElementById('free').addEventListener('change', function () {
      displayProducts('free');
    });
  
    // Initially display all products
    displayProducts('all');
  });

// function imageDisplay(index) {
//     document.querySelector('.products-area #img-products').src = productImages[index];
// }

