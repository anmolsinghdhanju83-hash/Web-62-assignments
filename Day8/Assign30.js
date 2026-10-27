
"use strict";

// Product object with nested specifications
const product = {
    id: 101,
    name: "Laptop",
    brand: "TechPro",
    price: 55000,
    category: "Electronics",

    specifications: {
        processor: "Intel Core i5",
        ram: "16 GB",
        storage: "512 GB SSD",
        operatingSystem: "Windows 11"
    },

    dimensions: {
        weight: "1.8 kg",
        screenSize: "15.6 inches"
    },

    warranty: {
        duration: "1 year",
        type: "Manufacturer Warranty"
    }
};

// Display product information
console.log("PRODUCT DETAILS");
console.log("ID:", product.id);
console.log("Name:", product.name);
console.log("Brand:", product.brand);
console.log("Price: Rs.", product.price);
console.log("Category:", product.category);

console.log("\nSPECIFICATIONS");
console.log("Processor:", product.specifications.processor);
console.log("RAM:", product.specifications.ram);
console.log("Storage:", product.specifications.storage);
console.log("Operating System:", product.specifications.operatingSystem);

console.log("\nDIMENSIONS");
console.log("Weight:", product.dimensions.weight);
console.log("Screen Size:", product.dimensions.screenSize);

console.log("\nWARRANTY");
console.log("Duration:", product.warranty.duration);
console.log("Type:", product.warranty.type);
