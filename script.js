

// Product information
const products = {
    tshirt: {
        name: "Cotton T-Shirt",
        image: "images/men_tshirt.jpg",
        price: "&#2547; 450",
        description: "This is a comfortable cotton t-shirt. It is suitable for everyday use.",
        category: "Fashion",
        size: "S, M, L, XL",
        color: "Black",
        availability: "In Stock"
    },

    jeans: {
        name: "Blue Jeans",
        image: "images/jeans.jpg",
        price: "&#2547; 900",
        description: "Stylish blue jeans suitable for casual and everyday wear.",
        category: "Fashion",
        size: "30, 32, 34, 36",
        color: "Blue",
        availability: "In Stock"
    },

    handbag: {
        name: "Simple Hand Bag",
        image: "images/handbag.jpg",
        price: "&#2547; 650",
        description: "A simple and stylish handbag suitable for everyday use.",
        category: "Fashion",
        size: "Medium",
        color: "Brown",
        availability: "In Stock"
    },

    shoes: {
        name: "Casual Shoes",
        image: "images/sneakers.jpg",
        price: "&#2547; 1200",
        description: "Comfortable casual shoes for everyday walking and outdoor use.",
        category: "Fashion",
        size: "38, 39, 40, 41, 42",
        color: "White",
        availability: "In Stock"
    },

    kurti: {
        name: "Stylish Kurti",
        image: "images/kurti.jpg",
        price: "&#2547; 750",
        description: "Comfortable casual kurti for everyday wear.",
        category: "Fashion",
        size: "38, 39, 40, 41, 42",
        color: "White, Black, Red, Blue",
        availability: "In Stock"
    },

    sunglass: {
        name: "Sunglass",
        image: "images/sunglasses.jpg",
        price: "&#2547; 750",
        description: "Stylish sunglasses suitable for everyday wear and outdoor use..",
        category: "Fashion",
        size: "",
        color: "White, Black",
        availability: "In Stock"
    },

    coat: {
        name: "Winter Coat",
        image: "images/coat.jpg",
        price: "&#2547; 350",
        description: "Warm and stylish winter coat suitable for cold weather and everyday wear",
        category: "Fashion",
        size: "",
        color: "White, Black",
        availability: "In Stock"
    },

    watch: {
        name: "Casual Wrist Watch",
        image: "images/watch.jpg",
        price: "&#2547; 850",
        description: "A timeless wrist watch that adds a polished touch to any outfit.",
        category: "Fashion",
        size: "",
        color: "Black",
        availability: "In Stock"
    },

    scarf: {
        name: "Scarf",
        image: "images/scarf.jpg",
        price: "&#2547; 350",
        description: "Lightweight and stylish scarf for casual and seasonal wear.",
        category: "Fashion",
        size: "",
        color: "Red, Beige, Black",
        availability: "In Stock"
    },

    hoodie: {
        name: "Comfortable Hoodie",
        image: "images/hoodie.jpg",
        price: "&#2547; 1100",
        description: "A cozy hoodie designed for comfort and casual daily styling.",
        category: "Fashion",
        size: "S, M, L, XL",
        color: "Grey, Black",
        availability: "In Stock"
    },

    sweater: {
        name: "Sweater",
        image: "images/sweater.jpg",
        price: "&#2547; 1100",
        description: "A soft sweater that keeps you warm while staying fashionable.",
        category: "Fashion",
        size: "S, M, L, XL",
        color: "Navy, Grey, Cream",
        availability: "In Stock"
    },

    "formal-shirt": {
        name: "Formal Shirt",
        image: "images/formal_shirt.jpg",
        price: "&#2547; 1100",
        description: "A polished formal shirt designed for office meetings and smart occasions.",
        category: "Fashion",
        size: "S, M, L, XL",
        color: "White, Blue",
        availability: "In Stock"
    },

    punjabi: {
        name: "Traditional Panjabi",
        image: "images/panjabi.jpg",
        price: "&#2547; 950",
        description: "Classic traditional panjabi with a comfortable fit for festive and casual wear.",
        category: "Fashion",
        size: "M, L, XL",
        color: "Maroon, Black, Blue",
        availability: "In Stock"
    },

    saree: {
        name: "Saree",
        image: "images/saree.jpg",
        price: "&#2547; 1100",
        description: "Elegant saree for cultural occasions and graceful everyday styling.",
        category: "Fashion",
        size: "Free Size",
        color: "Red, Pink, Maroon",
        availability: "In Stock"
    },

    cap: {
        name: "Casual Cap",
        image: "images/cap.jpg",
        price: "&#2547; 350",
        description: "A lightweight cap that adds a sporty finish to casual outfits.",
        category: "Fashion",
        size: "One Size",
        color: "Black, Navy, Grey",
        availability: "In Stock"
    },

    rice: {
        name: "Premium Rice",
        image: "images/rice.jpg",
        price: "&#2547; 850",
        description: "Premium quality rice for everyday meals and family cooking.",
        category: "Grocery",
        size: "5kg",
        color: "White",
        availability: "In Stock"
    },

    milk: {
        name: "Fresh Milk",
        image: "images/milk_powder.jpg",
        price: "&#2547; 90",
        description: "Rich and fresh milk suitable for drinking and cooking.",
        category: "Grocery",
        size: "1 Litre",
        color: "White",
        availability: "In Stock"
    },

    oil: {
        name: "Cooking Oil",
        image: "images/oil.jpg",
        price: "&#2547; 180",
        description: "Healthy cooking oil for everyday home preparation.",
        category: "Grocery",
        size: "1 Litre",
        color: "Golden",
        availability: "In Stock"
    },

    cookies: {
        name: "Chocolate Biscuit",
        image: "images/cookies.jpg",
        price: "&#2547; 60",
        description: "Crunchy chocolate biscuits for a quick snack break.",
        category: "Grocery",
        size: "Pack",
        color: "Brown",
        availability: "In Stock"
    },

    lentils: {
        name: "Red Lentils",
        image: "images/lentils.jpg",
        price: "&#2547; 160",
        description: "Nutritious red lentils perfect for hearty soups and curries.",
        category: "Grocery",
        size: "1kg",
        color: "Orange",
        availability: "In Stock"
    },

    honey: {
        name: "Honey",
        image: "images/honey.jpg",
        price: "&#2547; 140",
        description: "Natural honey with a rich taste and health benefits.",
        category: "Grocery",
        size: "250g",
        color: "Golden",
        availability: "In Stock"
    },

    salt: {
        name: "Table Salt",
        image: "images/salt.jpg",
        price: "&#2547; 45",
        description: "Refined table salt for daily cooking and seasoning.",
        category: "Grocery",
        size: "500g",
        color: "White",
        availability: "In Stock"
    },

    egg: {
        name: "Fresh Eggs",
        image: "images/egg.jpg",
        price: "&#2547; 150",
        description: "Fresh farm eggs ideal for breakfast and recipes.",
        category: "Grocery",
        size: "Pack of 6",
        color: "White",
        availability: "In Stock"
    },

    noodles: {
        name: "Instant Noodles",
        image: "images/noodles.jpeg",
        price: "&#2547; 70",
        description: "Quick and tasty instant noodles for a fast meal.",
        category: "Grocery",
        size: "Pack",
        color: "Yellow",
        availability: "In Stock"
    },

    juice: {
        name: "Fruit Juice",
        image: "images/juice.jpg",
        price: "&#2547; 120",
        description: "Refreshing fruit juice for quick energy and hydration.",
        category: "Grocery",
        size: "1 Litre",
        color: "Orange",
        availability: "In Stock"
    },

    tomato: {
        name: "Fresh Tomato",
        image: "images/tomato.jpg",
        price: "&#2547; 80",
        description: "Fresh tomatoes for cooking, salads, and everyday meals.",
        category: "Grocery",
        size: "1kg",
        color: "Red",
        availability: "In Stock"
    },

    potato: {
        name: "Fresh Potato",
        image: "images/potato.jpg",
        price: "&#2547; 60",
        description: "Fresh potatoes for curries, fries, and home cooking.",
        category: "Grocery",
        size: "1kg",
        color: "Brown",
        availability: "In Stock"
    },

    chicken: {
        name: "Chicken",
        image: "images/chicken.jpg",
        price: "&#2547; 100",
        description: "Fresh chicken pieces suitable for daily home meals.",
        category: "Grocery",
        size: "1kg",
        color: "Pink",
        availability: "In Stock"
    },

    fish: {
        name: "Pabda Fish",
        image: "images/fish.jpg",
        price: "&#2547; 100",
        description: "Fresh pabda fish for flavorful home-cooked dishes.",
        category: "Grocery",
        size: "500g",
        color: "Silver",
        availability: "In Stock"
    },

    tea: {
        name: "Tea",
        image: "images/tea.jpg",
        price: "&#2547; 220",
        description: "Aromatic tea leaves for a comforting daily cup.",
        category: "Grocery",
        size: "250g",
        color: "Brown",
        availability: "In Stock"
    },

    "cat-food": {
        name: "Cat Food",
        image: "images/cat_food.jpg",
        price: "&#2547; 500",
        description: "Nutritious cat food made for healthy growth and energy.",
        category: "Pet Supplies",
        size: "2kg",
        color: "Brown",
        availability: "In Stock"
    },

    toy: {
        name: "Pet Toy",
        image: "images/toys.jpg",
        price: "&#2547; 250",
        description: "Colorful pet toy designed for fun and active playtime.",
        category: "Pet Supplies",
        size: "Medium",
        color: "Multi",
        availability: "In Stock"
    },

    bowl: {
        name: "Pet Food Bowl",
        image: "images/bowl.jpg",
        price: "&#2547; 180",
        description: "Durable food bowl for pets at home or outdoors.",
        category: "Pet Supplies",
        size: "Standard",
        color: "Blue",
        availability: "In Stock"
    },

    "dog-food": {
        name: "Dog Food",
        image: "images/dog_food.jpg",
        price: "&#2547; 350",
        description: "Balanced dog food that supports growth, immunity, and energy.",
        category: "Pet Supplies",
        size: "1kg",
        color: "Brown",
        availability: "In Stock"
    },

    "fish-food": {
        name: "Fish Food",
        image: "images/fish_food.jpg",
        price: "&#2547; 350",
        description: "Healthy fish food that keeps aquatic pets well-nourished.",
        category: "Pet Supplies",
        size: "250g",
        color: "Blue",
        availability: "In Stock"
    },

    "pet-bed": {
        name: "Pet Bed",
        image: "images/pet_bed.jpg",
        price: "&#2547; 350",
        description: "Comfortable bed for pets to rest and feel secure at home.",
        category: "Pet Supplies",
        size: "Medium",
        color: "Grey",
        availability: "In Stock"
    },

    "scratch-post": {
        name: "Scretch Post",
        image: "images/scretch_post.jpg",
        price: "&#2547; 350",
        description: "A scratching post to keep pets active and protect furniture.",
        category: "Pet Supplies",
        size: "Large",
        color: "Beige",
        availability: "In Stock"
    },

    "pet-shampoo": {
        name: "Pet Shampoo",
        image: "images/shampoo.jpg",
        price: "&#2547; 350",
        description: "Gentle pet shampoo that keeps fur clean and soft.",
        category: "Pet Supplies",
        size: "300ml",
        color: "White",
        availability: "In Stock"
    },

    "bird-seed": {
        name: "Bird Seed",
        image: "images/seed.jpg",
        price: "&#2547; 350",
        description: "Nutritious bird seed for healthy feeding and energy.",
        category: "Pet Supplies",
        size: "500g",
        color: "Golden",
        availability: "In Stock"
    },

    "dog-leash": {
        name: "Dog Leash",
        image: "images/dog_leash.jpg",
        price: "&#2547; 350",
        description: "Strong and comfortable dog leash for safe daily walks.",
        category: "Pet Supplies",
        size: "Standard",
        color: "Black",
        availability: "In Stock"
    },

    "table-lamp": {
        name: "Table Lamp",
        image: "images/lamp.png",
        price: "&#2547; 750",
        description: "Modern table lamp that adds warm lighting and style to any room.",
        category: "Home Decor",
        size: "Standard",
        color: "Cream",
        availability: "In Stock"
    },

    "small-plant": {
        name: "Small Plant",
        image: "images/plants.jpg",
        price: "&#2547; 300",
        description: "A small indoor plant that brightens up your home and living space.",
        category: "Home Decor",
        size: "Small",
        color: "Green",
        availability: "In Stock"
    },

    "wall-clock": {
        name: "Wall Clock",
        image: "images/clock.png",
        price: "&#2547; 550",
        description: "Elegant wall clock with a clean design for stylish home interiors.",
        category: "Home Decor",
        size: "Medium",
        color: "Black",
        availability: "In Stock"
    },

    "decorative-candle": {
        name: "Decorative Candle",
        image: "images/candles.jpg",
        price: "&#2547; 250",
        description: "Fragrant decorative candle for cozy ambience and home decoration.",
        category: "Home Decor",
        size: "Medium",
        color: "White",
        availability: "In Stock"
    },

    "decorative-vase": {
        name: "Decorative Vase",
        image: "images/vase.jpg",
        price: "&#2547; 450",
        description: "A decorative vase designed to elevate the look of your room.",
        category: "Home Decor",
        size: "Medium",
        color: "Beige",
        availability: "In Stock"
    },

    "soft-cushion": {
        name: "Soft Cushion",
        image: "images/cushion.jpg",
        price: "&#2547; 350",
        description: "Soft cushion for extra comfort and aesthetic home styling.",
        category: "Home Decor",
        size: "Standard",
        color: "Pink",
        availability: "In Stock"
    },

    "photo-frame": {
        name: "Photo Frame",
        image: "images/frames.jpg",
        price: "&#2547; 400",
        description: "Simple photo frame to display treasured memories beautifully.",
        category: "Home Decor",
        size: "8x10",
        color: "Brown",
        availability: "In Stock"
    },

    mirror: {
        name: "Mirror",
        image: "images/mirror.jpg",
        price: "&#2547; 900",
        description: "Classic mirror that adds brightness and style to your space.",
        category: "Home Decor",
        size: "Large",
        color: "Silver",
        availability: "In Stock"
    },

    "small-floor-rug": {
        name: "Small Floor Rug",
        image: "images/floor.jpg",
        price: "&#2547; 850",
        description: "Comfortable rug to define your room and add warmth to flooring.",
        category: "Home Decor",
        size: "Medium",
        color: "Cream",
        availability: "In Stock"
    },

    "wall-art": {
        name: "Wall Art",
        image: "images/wall.jpg",
        price: "&#2547; 600",
        description: "Modern wall art that transforms your living area with style.",
        category: "Home Decor",
        size: "Large",
        color: "Multi",
        availability: "In Stock"
    },

    "flower-pot": {
        name: "Flower Pot",
        image: "images/pot.jpg",
        price: "&#2547; 280",
        description: "Simple flower pot for indoor plants and home decoration.",
        category: "Home Decor",
        size: "Medium",
        color: "Terracotta",
        availability: "In Stock"
    },

    "desk-organizer": {
        name: "Desk Organizer",
        image: "images/desk.jpg",
        price: "&#2547; 320",
        description: "Organized desk storage to keep your workspace neat and efficient.",
        category: "Home Decor",
        size: "Standard",
        color: "Natural",
        availability: "In Stock"
    },

    notebook: {
        name: "Notebook",
        image: "images/notebook.jpg",
        price: "&#2547; 120",
        description: "A clean notebook for daily notes, study, and planning.",
        category: "Stationery",
        size: "A5",
        color: "White",
        availability: "In Stock"
    },

    "pen-set": {
        name: "Pen Set",
        image: "images/pen.jpg",
        price: "&#2547; 80",
        description: "A smooth pen set for writing, drawing, and everyday use.",
        category: "Stationery",
        size: "Set",
        color: "Blue",
        availability: "In Stock"
    },

    "pencil-box": {
        name: "Pencil Box",
        image: "images/pencil.jpg",
        price: "&#2547; 150",
        description: "A handy pencil box for storing writing tools and school essentials.",
        category: "Stationery",
        size: "Medium",
        color: "Yellow",
        availability: "In Stock"
    },

    "school-bag": {
        name: "School Bag",
        image: "images/backpack.jpg",
        price: "&#2547; 700",
        description: "A comfortable school bag for books, stationery, and daily essentials.",
        category: "Stationery",
        size: "Large",
        color: "Blue",
        availability: "In Stock"
    },

    "sticky-notes": {
        name: "Sticky Notes",
        image: "images/notes.jpg",
        price: "&#2547; 70",
        description: "Colorful sticky notes to keep reminders and ideas organized.",
        category: "Stationery",
        size: "Pack",
        color: "Yellow",
        availability: "In Stock"
    },

    "a4-paper": {
        name: "A4 Paper",
        image: "images/paper.jpg",
        price: "&#2547; 70",
        description: "High-quality A4 paper for office, study, and printing needs.",
        category: "Stationery",
        size: "A4",
        color: "White",
        availability: "In Stock"
    },

    "water-color": {
        name: "Water Color",
        image: "images/water_color.jpg",
        price: "&#2547; 180",
        description: "Set of vibrant water colors for painting and creative work.",
        category: "Stationery",
        size: "Set",
        color: "Multi",
        availability: "In Stock"
    },

    highlighters: {
        name: "Highlighters",
        image: "images/highlighters.jpg",
        price: "&#2547; 65",
        description: "Bright highlighters for marking notes and important text.",
        category: "Stationery",
        size: "Pack",
        color: "Multi",
        availability: "In Stock"
    },

    "geometry-box": {
        name: "Geometry Box",
        image: "images/geometry.jpg",
        price: "&#2547; 120",
        description: "Complete geometry box for math and drawing tasks.",
        category: "Stationery",
        size: "Standard",
        color: "Blue",
        availability: "In Stock"
    },

    "scientific-calculator": {
        name: "Scientific Calculator",
        image: "images/calculator.jpg",
        price: "&#2547; 700",
        description: "Reliable scientific calculator for calculations and classroom use.",
        category: "Stationery",
        size: "Standard",
        color: "Black",
        availability: "In Stock"
    }
};

// // Get product name from URL
// const urlParams = new URLSearchParams(window.location.search);
// const product = urlParams.get("product");

// // Get selected product
// const selectedProduct = products[product];

// // Show product information
// if (selectedProduct) {
//     document.getElementById("productImage").src = selectedProduct.image;
//     document.getElementById("productImage").alt = selectedProduct.name;

//     document.getElementById("productName").innerHTML = selectedProduct.name;
//     document.getElementById("productPrice").innerHTML = selectedProduct.price;
//     document.getElementById("productDescription").innerHTML = selectedProduct.description;
//     document.getElementById("productCategory").innerHTML = selectedProduct.category;
//     document.getElementById("productSize").innerHTML = selectedProduct.size;
//     document.getElementById("productColor").innerHTML = selectedProduct.color;
//     document.getElementById("productAvailability").innerHTML = selectedProduct.availability;
// }

// function addToCart() {

//     localStorage.setItem(
//         "cartProduct",
//         JSON.stringify(selectedProduct)
//     );

//     window.location.href = "cart.html";
// }

// const cartProducts =
//     document.getElementById("cartProducts");


// if (cartProducts) {

//     const savedProduct =
//         localStorage.getItem("cartProduct");


//     if (savedProduct) {

//         const product =
//             JSON.parse(savedProduct);


//         cartProducts.innerHTML = `

//             <div class="product">

//                 <div class="product-image">

//                     <img src="${product.image}"
//                          alt="${product.name}">

//                 </div>


//                 <h3>${product.name}</h3>

//                 <p>Price: ${product.price}</p>

//                 <p>
//                     Category: ${product.category}
//                 </p>

//                 <p>
//                     Quantity:
//                     <input type="number"
//                            value="1"
//                            min="1">
//                 </p>


//                 <button class="button"
//                         onclick="removeFromCart()">

//                     Remove

//                 </button>

//             </div>

//         `;

//     }

// }

// function removeFromCart() {

//     localStorage.removeItem("cartProduct");

//     location.reload();

// }





// ===============================
// PRODUCT PAGE
// ===============================

const productImage = document.getElementById("productImage");

if (productImage) {

    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get("product");

    const selectedProduct = products[product];

    if (selectedProduct) {

        document.getElementById("productImage").src =
            selectedProduct.image;

        document.getElementById("productImage").alt =
            selectedProduct.name;

        document.getElementById("productName").innerHTML =
            selectedProduct.name;

        document.getElementById("productPrice").innerHTML =
            selectedProduct.price;

        document.getElementById("productDescription").innerHTML =
            selectedProduct.description;

        document.getElementById("productCategory").innerHTML =
            selectedProduct.category;

        document.getElementById("productSize").innerHTML =
            selectedProduct.size;

        document.getElementById("productColor").innerHTML =
            selectedProduct.color;

        document.getElementById("productAvailability").innerHTML =
            selectedProduct.availability;


        // Add to Cart
        window.addToCart = function () {

            localStorage.setItem(
                "cartProduct",
                JSON.stringify(selectedProduct)
            );

            window.location.href = "cart.html";
        };
    }
}


// ===============================
// CART PAGE
// ===============================

const cartProducts = document.getElementById("cartProducts");
const cartSummary = document.getElementById("cartSummary");

function formatNumber(amount) {
    return amount;
}

if (cartProducts) {

    const savedProduct = localStorage.getItem("cartProduct");

    if (savedProduct) {

        const product = JSON.parse(savedProduct);

        // render left column (items)
        cartProducts.innerHTML = `
            <div class="cart-item">
                <div class="cart-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="cart-info">
                    <h2>${product.name}</h2>
                    <p>Category: ${product.category}</p>
                    <p class="item-price">Price: ${product.price}</p>
                    <label>Quantity:</label>
                    <input type="number" class="item-qty" value="1" min="1">
                    <p class="item-total"><b>Total: ${product.price}</b></p>
                    <a href="#" class="remove" onclick="removeFromCart()">Remove</a>
                </div>
            </div>
        `;

        // populate summary
        // remove HTML numeric entities like &#2547; before extracting digits
        const priceNumeric = parseInt(String(product.price).replace(/&#\d+;?/g, '').replace(/[^0-9]/g, '')) || 0;
        const qtyInput = document.querySelector('.item-qty');
        const itemTotalEl = document.querySelector('.item-total');

        function updateSummary() {
            const qty = parseInt(qtyInput.value) || 1;
            const subtotal = priceNumeric * qty;
            const delivery = subtotal > 0 ? 100 : 0;
            const total = subtotal + delivery;

            cartSummary.querySelector('.summary-subtotal').textContent = `Subtotal: ৳${subtotal}`;
            cartSummary.querySelector('.summary-delivery').textContent = `Delivery: ৳${delivery}`;
            cartSummary.querySelector('.summary-total').textContent = `Total: ৳${total}`;
            itemTotalEl.innerHTML = `<b>Total: ৳${subtotal}</b>`;
        }

        qtyInput.addEventListener('input', updateSummary);
        updateSummary();

    } else {
        cartProducts.innerHTML = "<h2>Your cart is empty.</h2>";
    }
}


// ===============================
// REMOVE FROM CART
// ===============================

function removeFromCart() {

    localStorage.removeItem("cartProduct");

    location.reload();
}
