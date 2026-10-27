
"use strict";

const fs = require("fs");

// Load catalogue data
const rawData = fs.readFileSync("catalogue.json", "utf8");
const data = JSON.parse(rawData);
const products = data.catalogue;

// 1. Find a product by ID
function findProductById(id) {
    return products.find(function (product) {
        return product.id === id;
    }) || null;
}

// 2. Filter products by category
function filterByCategory(category) {
    return products.filter(function (product) {
        return product.category.toLowerCase() ===
            category.toLowerCase();
    });
}

// 3. Find products within a maximum price
function filterByPrice(maxPrice) {
    return products.filter(function (product) {
        return product.price <= maxPrice;
    });
}

// 4. Calculate total value of all stock
function calculateStockValue() {
    return products.reduce(function (total, product) {
        if (product.inStock) {
            return total + product.price;
        }

        return total;
    }, 0);
}

// Display catalogue utilities
console.log("PRODUCT WITH ID 1:");
console.log(findProductById(1));

console.log("\nACCESSORIES:");
console.log(filterByCategory("Accessories"));

console.log("\nPRODUCTS UNDER RS. 3000:");
console.log(filterByPrice(3000));

console.log("\nVALUE OF IN-STOCK PRODUCTS: Rs.", calculateStockValue());

// Test scenarios
console.log("\nTEST SCENARIOS");

console.log("Test 1:", findProductById(1)?.name === "Laptop");
console.log("Test 2:", findProductById(99) === null);
console.log("Test 3:", filterByCategory("Accessories").length === 2);
console.log("Test 4:", filterByPrice(3000).length === 2);
console.log("Test 5:", calculateStockValue() === 56500);
