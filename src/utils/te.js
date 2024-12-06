const fe = await fetch('https://fakestoreapi.com/products/1');
const product = await fe.json(); // Wait for the response to be converted to JSON
console.log(product); // Log the product data
console.log("hello"); // Log "hello"
