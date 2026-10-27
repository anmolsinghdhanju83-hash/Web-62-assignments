
"use strict";

// Sample product dataset
const products = [
    { name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
    { name: "Phone", category: "Electronics", price: 25000, stock: 10 },
    { name: "Headphones", category: "Accessories", price: 1500, stock: 20 },
    { name: "Keyboard", category: "Accessories", price: 2000, stock: 0 },
    { name: "Tablet", category: "Electronics", price: 18000, stock: 7 }
];

// 1. Display all products
console.log("ALL PRODUCTS:");
console.log(products);

// 2. Find products costing less than ₹20,000
const affordableProducts = products.filter(function (product) {
    return product.price < 20000;
});

console.log("\nPRODUCTS UNDER ₹20,000:");
affordableProducts.forEach(function (product) {
    console.log(product.name + " - ₹" + product.price);
});

// 3. Get product names only
const productNames = products.map(function (product) {
    return product.name;
});

console.log("\nPRODUCT NAMES:");
console.log(productNames);

// 4. Find products that are in stock
const availableProducts = products.filter(function (product) {
    return product.stock > 0;
});

console.log("\nAVAILABLE PRODUCTS:");
availableProducts.forEach(function (product) {
    console.log(product.name);
});

// 5. Calculate total inventory value
const inventoryValue = products.reduce(function (total, product) {
    return total + product.price * product.stock;
}, 0);

console.log("\nTOTAL INVENTORY VALUE: ₹" + inventoryValue);

// 6. Count products by category
const categoryCounts = products.reduce(function (counts, product) {
    counts[product.category] = (counts[product.category] || 0) + 1;
    return counts;
}, {});

console.log("\nPRODUCT COUNT BY CATEGORY:");
console.log(categoryCounts);
