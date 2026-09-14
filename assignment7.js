// TASK 1 
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    
    products.forEach(product => {
      console.log(`Title: ${product.title} | Price: $${product.price} | Category: ${product.category}`);
    });

  
    let titlePrice = products.map(product => {
      return { title: product.title, price: product.price };
    });
    console.log("Title & Price Array:", titlePrice);

   
    let expensiveProducts = products.filter(product => product.price > 100);
    console.log("Products above $100:", expensiveProducts);


    let firstElectronics = products.find(product => product.category === "electronics");
    console.log("First Electronics Product:", firstElectronics);

    
    let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    console.log("Total Price:", totalPrice.toFixed(2));

    
    let sortedProducts = [...products].sort((a, b) => b.price - a.price);
    console.log("Sorted (High to Low):", sortedProducts);

  })
  .catch(error => {
    console.error("Error fetching products:", error);
  })
  .finally(() => {
    console.log("Task 1 completed.\n");
  });



// TASK 2 


function showDashboard(products) {

  let total = products.length;

  // filter() -> count each category
  let electronics = products.filter(p => p.category === "electronics").length;
  let jewelery = products.filter(p => p.category === "jewelery").length;
  let mensClothing = products.filter(p => p.category === "men's clothing").length;
  let womensClothing = products.filter(p => p.category === "women's clothing").length;


  let prices = products.map(p => p.price);

  let highest = Math.max(...prices);
  let lowest = Math.min(...prices);


  let totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  let average = (totalPrice / total).toFixed(2);

  
  console.log(`===== PRODUCT DASHBOARD =====\n`);
  console.log(`Total Products: ${total}\n`);
  console.log(`Electronics: ${electronics}`);
  console.log(`Jewelery: ${jewelery}`);
  console.log(`Men's Clothing: ${mensClothing}`);
  console.log(`Women's Clothing: ${womensClothing}\n`);
  console.log(`Highest Price: $${highest}`);
  console.log(`Lowest Price: $${lowest}`);
  console.log(`Average Price: $${average}`);
}

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    showDashboard(products);
  })
  .catch(error => {
    console.error("Error fetching dashboard data:", error);
  })
  .finally(() => {
    console.log("\nTask 2 (Dashboard) completed.\n");
  });



// TASK 3 
// APIs:
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {

    // Display all user names
    let userNames = users.map(user => user.name);
    console.log("All User Names:", userNames);

    // Display user name + email
    users.forEach(user => {
      console.log(`${user.name} - ${user.email}`);
    });

    // Find the user with ID 5
    let user5 = users.find(user => user.id === 5);
    console.log("User with ID 5:", user5);

   
    let cityName = "Gwenborough";
    let usersFromCity = users.filter(user => user.address.city === cityName);
    console.log(`Users from ${cityName}:`, usersFromCity);

  })
  .catch(error => {
    console.error("Error fetching users:", error);
  })
  .finally(() => {
    console.log("Task 3 (Users) completed.\n");
  });

// ---------- POSTS ----------
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {

    // Posts written by user ID 1
    let userOnePosts = posts.filter(post => post.userId === 1);
    console.log("Posts by User 1:", userOnePosts);

   
    console.log("Total Posts by User 1:", userOnePosts.length);

    // First post with title length greater than 50 characters
    let longTitlePost = posts.find(post => post.title.length > 50);
    console.log("First post with title > 50 chars:", longTitlePost);

  })
  .catch(error => {
    console.error("Error fetching posts:", error);
  })
  .finally(() => {
    console.log("Task 3 (Posts) completed.\n");
  });


// TASK 4 

function searchProducts(products) {

  let category = prompt("Enter product category:"); // example: electronics
  let maxPrice = Number(prompt("Enter maximum price:")); // example: 500

  // filter() -> match both conditions
  let result = products.filter(product => {
    return product.category === category && product.price <= maxPrice;
  });

  console.log(`Category = ${category}`);
  console.log(`Price <= ${maxPrice}`);
  console.log("Matching Products:", result);
}

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {
    searchProducts(products);
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  })
  .finally(() => {
    console.log("Task 4 (Search) completed.\n");
  });


// TASK 5 

let cart = [];

// add a product to the cart by its ID
function addToCart(products, id) {
  let product = products.find(p => p.id === id);

  if (product) {
    cart.push(product);
    console.log(`Added: ${product.title}`);
  } else {
    console.log("Product not found");
  }
}


function showCart() {

  console.log(`\n===== CART =====\n`);

  cart.forEach((product, index) => {
    console.log(`Product ${index + 1}: ${product.title}`);
    console.log(`Price: $${product.price}\n`);
  });

  // reduce() -> cart total
  let total = cart.reduce((sum, product) => sum + product.price, 0);

  let discount = 0;

  if (total > 200) {
    discount = 20;
  } else if (total > 100) {
    discount = 10;
  }

  let finalAmount = total - (total * discount / 100);

  console.log(`Total: $${total.toFixed(2)}`);
  console.log(`Discount: ${discount}%`);
  console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
}

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    // Display available products
    console.log("Available Products:");
    products.forEach(p => console.log(`${p.id} - ${p.title} - $${p.price}`));

    // Select products using their IDs
    addToCart(products, 1);
    addToCart(products, 2);

    // Show cart total, discount, and final amount
    showCart();

  })
  .catch(error => {
    console.error("Error fetching products:", error);
  })
  .finally(() => {
    console.log("Task 5 (Cart) completed.\n");
  });


// TASK 6 

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    console.log("========== PRODUCT REPORT ==========\n");

    console.log(`Total Products: ${products.length}\n`);

    // Display all products using forEach()
    products.forEach(product => {
      console.log(`${product.title} - $${product.price}`);
    });

    // Product names array using map()
    let productNames = products.map(product => product.title);
    console.log("\nProduct Names:");
    productNames.forEach(name => console.log(`- ${name}`));

    // Filter expensive products (price > 100)
    let above100 = products.filter(product => product.price > 100);
    console.log("\nProducts Above $100:");
    above100.forEach(product => console.log(`- ${product.title} - $${product.price}`));

    // Find electronics product
    let electronicsProduct = products.find(product => product.category === "electronics");
    console.log("\nElectronics Product:");
    console.log(electronicsProduct);

    // Calculate total price using reduce()
    let totalValue = products.reduce((sum, product) => sum + product.price, 0);
    console.log(`\nTotal Product Value: $${totalValue.toFixed(2)}`);

    // Check products using some() and every()
    let anyAbove500 = products.some(product => product.price > 500);
    let allAbove1 = products.every(product => product.price > 1);

    console.log(`\nAny Product Above $500: ${anyAbove500}`);
    console.log(`All Products Above $1: ${allAbove1}`);

    let sortedProducts = [...products].sort((a, b) => b.price - a.price);
    console.log("\nHighest → Lowest:");
    sortedProducts.forEach(product => console.log(`- ${product.title} - $${product.price}`));

  })
  .catch(error => {
    console.error("Error fetching products:", error);
  })
  .finally(() => {
    console.log("\nTask 6 (Product Report) completed.");
  });