// whatsapp function
function openWhatsApp() {
    var phoneNumber = "+3547608535";
    var message = "Hello, I'm interested in your product.";

    var url = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(phoneNumber) + "&text=" + encodeURIComponent(message);

    window.open(url);
}
// whatsapp function ends here




// shopping cart panel open & close button function
document.getElementById("cart-icon").addEventListener("click", function() {
    document.getElementById("cart-panel").classList.toggle("open");
  });
  
  document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("cart-panel").classList.remove("open");
  });
// shopping cart panel open & close button function ends here




// Get the cart panel element
const cartPanel = document.getElementById("cart-panel");
const cartItems = []; 
let itemCounter = 0; 

// Get the cart badge element
const cartBadge = document.getElementById("cart-badge");

// Function to update the cart badge
function updateCartBadge() {
  cartBadge.textContent = cartItems.length;
}

// Get all the "Add to cart" buttons
const addToCartButtons = document.querySelectorAll(".btn-outline-warning");

// Attach click event listener to each button
addToCartButtons.forEach((button) => {
  const textElement = button.querySelector(".button-text");
  button.addEventListener("click", () => toggleCartItem(button, textElement));
});

// Function to handle the "Add to cart" button click event
function toggleCartItem(button, textElement) {
  // Get the product details
  const card = button.closest(".small-card");
  const title = card.querySelector(".title").textContent;
  const price = card.querySelector(".price").textContent;

  // Check if the product is already in the cart
  const existingItem = findCartItem(title);

  if (existingItem) {
    // If the product is already in the cart, remove it
    removeCartItem(existingItem);
    // Change the text dynamically
    textElement.textContent = "Add to cart";
  } else {
    // If the product is not in the cart, add it
    itemCounter++; // Increment the counter
    const item = {
      number: itemCounter,
      title: title,
      price: parseFloat(price.replace("$", "")), // Convert price to a number
      element: null
    };
    addCartItem(item);
    // Change the text dynamically
    textElement.textContent = "Remove item";
  }

  // Update the total price
  updateTotalPrice();

  // Update the cart badge
  updateCartBadge();
}

// Function to find a cart item by title
function findCartItem(title) {
  return cartItems.find((item) => item.title === title);
}

// Function to add a cart item
function addCartItem(item) {
  // Create a new element to display the product details with the item number
  const productElement = document.createElement("p");
  productElement.textContent = `${item.number}. ${item.title} - $${item.price.toFixed(2)}`;

  // Append the product element to the cart panel
  cartPanel.appendChild(productElement);

  // Store the element reference in the item object
  item.element = productElement;

  // Add the item to the cart items array
  cartItems.push(item);
}

// Function to remove a cart item
function removeCartItem(item) {
  const itemIndex = cartItems.indexOf(item);
  if (itemIndex > -1) {
    cartItems.splice(itemIndex, 1);
    itemCounter--; // Decrement the counter

    // Update the item numbers of the remaining items
    cartItems.forEach((item, index) => {
      item.number = index + 1;
      item.element.textContent = `${item.number}. ${item.title} - $${item.price.toFixed(2)}`;
    });
  }
  item.element.remove();

  // Update the total price
  updateTotalPrice();

  // Update the cart badge
  updateCartBadge();
}

// Function to update the total price
function updateTotalPrice() {
  const totalPriceElement = document.getElementById("total-price");
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// sign in&up form showing function
  var signinForm = document.getElementById('signin-form');
  var signupForm = document.getElementById('signup-form');
  
  document.getElementById('signin-button').addEventListener('click', function() {
    // Show the sign-in form
    signinForm.style.display = 'block';
    signupForm.style.display = 'none';
  });
  
  document.getElementById('signup-button').addEventListener('click', function() {
    // Show the sign-up form
    signinForm.style.display = 'none';
    signupForm.style.display = 'block';
  });


// playing the videos when mouse enter function
const clip = document.querySelectorAll('.clip');
for (let i = 0; i<clip.length; i++){
    clip[i].addEventListener('mouseenter',
    function(e){
        clip[i].play()
    })

    clip[i].addEventListener('mouseout',
    function(e){
        clip[i].pause()
    })
}







document.addEventListener("DOMContentLoaded", function() {
  var videoElement = document.querySelector("#carouselExampleDark video");
  var carouselInstance = new bootstrap.Carousel(document.querySelector("#carouselExampleDark"));

  videoElement.addEventListener("play", function() {
    carouselInstance.pause();
  });

  videoElement.addEventListener("pause", function() {
    carouselInstance.cycle();
  });
});