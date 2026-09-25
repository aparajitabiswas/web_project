
    // Product information
    const products = {
        tshirt: {
            name: "Cotton T-Shirt",
            image: "images/men_tshirt.jpg",
            price: "৳450",
            description: "This is a comfortable cotton t-shirt. It is suitable for everyday use.",
            category: "Fashion",
            size: "S, M, L, XL",
            color: "Black",
            availability: "In Stock"
        },

        jeans: {
            name: "Blue Jeans",
            image: "images/jeans.jpg",
            price: "৳900",
            description: "Stylish blue jeans suitable for casual and everyday wear.",
            category: "Fashion",
            size: "30, 32, 34, 36",
            color: "Blue",
            availability: "In Stock"
        },

        handbag: {
            name: "Simple Hand Bag",
            image: "images/handbag.jpg",
            price: "৳650",
            description: "A simple and stylish handbag suitable for everyday use.",
            category: "Fashion",
            size: "Medium",
            color: "Brown",
            availability: "In Stock"
        },

        shoes: {
            name: "Casual Shoes",
            image: "images/sneakers.jpg",
            price: "৳1200",
            description: "Comfortable casual shoes for everyday walking and outdoor use.",
            category: "Fashion",
            size: "38, 39, 40, 41, 42",
            color: "White",
            availability: "In Stock"
        },

        kurti: {
            name: "Stylish Kurti",
            image: "images/kurti.jpg",
            price: "৳750",
            description: "Comfortable casual kurti for everyday wear.",
            category: "Fashion",
            size: "38, 39, 40, 41, 42",
            color: "White, Black, Red, Blue",
            availability: "In Stock"
        },

        sunglass: {
            name: "Sunglass",
            image: "images/sunglasses.jpg",
            price: "৳750",
            description: "Stylish sunglasses suitable for everyday wear and outdoor use..",
            category: "Fashion",
            size: "",
            color: "White, Black",
            availability: "In Stock"
        },

        coat: {
            name: "Winter Coat",
            image: "images/coat.jpg",
            price: "৳350",
            description: "Warm and stylish winter coat suitable for cold weather and everyday wear",
            category: "Fashion",
            size: "",
            color: "White, Black",
            availability: "In Stock"
        },

        watch: {
            name: "Casual Wrist Watch",
            image: "images/watch.jpg",
            price: "৳850",
            description: "A timeless wrist watch that adds a polished touch to any outfit.",
            category: "Fashion",
            size: "",
            color: "Black",
            availability: "In Stock"
        },

        scarf: {
            name: "Scarf",
            image: "images/scarf.jpg",
            price: "৳350",
            description: "Lightweight and stylish scarf for casual and seasonal wear.",
            category: "Fashion",
            size: "",
            color: "Red, Beige, Black",
            availability: "In Stock"
        },

        hoodie: {
            name: "Comfortable Hoodie",
            image: "images/hoodie.jpg",
            price: "৳1100",
            description: "A cozy hoodie designed for comfort and casual daily styling.",
            category: "Fashion",
            size: "S, M, L, XL",
            color: "Grey, Black",
            availability: "In Stock"
        },

        sweater: {
            name: "Sweater",
            image: "images/sweater.jpg",
            price: "৳1100",
            description: "A soft sweater that keeps you warm while staying fashionable.",
            category: "Fashion",
            size: "S, M, L, XL",
            color: "Navy, Grey, Cream",
            availability: "In Stock"
        },

        "formal-shirt": {
            name: "Formal Shirt",
            image: "images/formal_shirt.jpg",
            price: "৳1100",
            description: "A polished formal shirt designed for office meetings and smart occasions.",
            category: "Fashion",
            size: "S, M, L, XL",
            color: "White, Blue",
            availability: "In Stock"
        },

        punjabi: {
            name: "Traditional Panjabi",
            image: "images/panjabi.jpg",
            price: "৳950",
            description: "Classic traditional panjabi with a comfortable fit for festive and casual wear.",
            category: "Fashion",
            size: "M, L, XL",
            color: "Maroon, Black, Blue",
            availability: "In Stock"
        },

        saree: {
            name: "Saree",
            image: "images/saree.jpg",
            price: "৳1100",
            description: "Elegant saree for cultural occasions and graceful everyday styling.",
            category: "Fashion",
            size: "Free Size",
            color: "Red, Pink, Maroon",
            availability: "In Stock"
        },

        cap: {
            name: "Casual Cap",
            image: "images/cap.jpg",
            price: "৳350",
            description: "A lightweight cap that adds a sporty finish to casual outfits.",
            category: "Fashion",
            size: "One Size",
            color: "Black, Navy, Grey",
            availability: "In Stock"
        }
    };

    // Get product name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get("product");

    // Get selected product
    const selectedProduct = products[product];

    // Show product information
    if (selectedProduct) {
        document.getElementById("productImage").src = selectedProduct.image;
        document.getElementById("productImage").alt = selectedProduct.name;

        document.getElementById("productName").innerHTML = selectedProduct.name;
        document.getElementById("productPrice").innerHTML = selectedProduct.price;
        document.getElementById("productDescription").innerHTML = selectedProduct.description;
        document.getElementById("productCategory").innerHTML = selectedProduct.category;
        document.getElementById("productSize").innerHTML = selectedProduct.size;
        document.getElementById("productColor").innerHTML = selectedProduct.color;
        document.getElementById("productAvailability").innerHTML = selectedProduct.availability;
    }
