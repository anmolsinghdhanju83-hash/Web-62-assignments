
"use strict";

// Utility 1: Merge default settings with custom settings
function mergeSettings(defaultSettings, customSettings) {
    if (
        defaultSettings === null ||
        typeof defaultSettings !== "object" ||
        Array.isArray(defaultSettings)
    ) {
        throw new Error("Default settings must be an object.");
    }

    if (
        customSettings === null ||
        typeof customSettings !== "object" ||
        Array.isArray(customSettings)
    ) {
        throw new Error("Custom settings must be an object.");
    }

    return {
        ...defaultSettings,
        ...customSettings
    };
}

// Utility 2: Calculate the total of shopping items
function calculateTotal(items, taxRate = 0) {
    if (!Array.isArray(items)) {
        throw new Error("Items must be an array.");
    }

    if (
        typeof taxRate !== "number" ||
        !Number.isFinite(taxRate) ||
        taxRate < 0
    ) {
        throw new Error("Tax rate must be a non-negative number.");
    }

    let subtotal = 0;

    for (const item of items) {
        if (
            item === null ||
            typeof item !== "object" ||
            typeof item.price !== "number" ||
            !Number.isFinite(item.price) ||
            item.price < 0 ||
            !Number.isInteger(item.quantity) ||
            item.quantity < 0
        ) {
            throw new Error("Each item needs a valid price and quantity.");
        }

        subtotal += item.price * item.quantity;
    }

    const tax = subtotal * taxRate / 100;

    return {
        subtotal: Number(subtotal.toFixed(2)),
        tax: Number(tax.toFixed(2)),
        total: Number((subtotal + tax).toFixed(2))
    };
}

// Test mergeSettings()
const defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true
};

const customSettings = {
    theme: "dark",
    language: "Hindi"
};

const finalSettings = mergeSettings(
    defaultSettings,
    customSettings
);

console.log("Merged Settings:", finalSettings);

// Test calculateTotal()
const cartItems = [
    { name: "Notebook", price: 50, quantity: 2 },
    { name: "Pen", price: 10, quantity: 3 }
];

const bill = calculateTotal(cartItems, 10);

console.log("Subtotal:", bill.subtotal);
console.log("Tax:", bill.tax);
console.log("Final Total:", bill.total);
