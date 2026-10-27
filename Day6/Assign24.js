
"use strict";

// ---------- Utility functions ----------

function validateName(name) {
    if (typeof name !== "string") {
        return false;
    }

    return name.trim().length > 0;
}

function validateAge(age) {
    return (
        typeof age === "number" &&
        Number.isInteger(age) &&
        age >= 1 &&
        age <= 120
    );
}

function mergeSettings(defaultSettings, customSettings) {
    return {
        ...defaultSettings,
        ...customSettings
    };
}

function calculateTotal(items, taxRate = 0) {
    if (!Array.isArray(items)) {
        throw new Error("Items must be an array.");
    }

    if (
        typeof taxRate !== "number" ||
        !Number.isFinite(taxRate) ||
        taxRate < 0
    ) {
        throw new Error("Invalid tax rate.");
    }

    let subtotal = 0;

    for (const item of items) {
        if (
            !item ||
            typeof item.price !== "number" ||
            !Number.isFinite(item.price) ||
            item.price < 0 ||
            !Number.isInteger(item.quantity) ||
            item.quantity < 0
        ) {
            throw new Error("Invalid item.");
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

// ---------- Simple test runner ----------

let passed = 0;
let failed = 0;

function test(testName, actual, expected) {
    const success = Object.is(actual, expected);

    if (success) {
        console.log("PASS:", testName);
        passed++;
    } else {
        console.log(
            "FAIL:", testName,
            "| Expected:", expected,
            "| Received:", actual
        );
        failed++;
    }
}

// ---------- Test cases ----------

// Name validation
test("Valid name", validateName("Anmol"), true);
test("Empty name", validateName("   "), false);
test("Non-string name", validateName(123), false);

// Age validation
test("Valid age", validateAge(20), true);
test("Negative age", validateAge(-5), false);
test("Decimal age", validateAge(20.5), false);

// Settings merging
const settings = mergeSettings(
    { theme: "light", notifications: true },
    { theme: "dark" }
);

test("Custom theme overrides default", settings.theme, "dark");
test("Default notification is retained",
    settings.notifications, true);

// Total calculation
const cart = [
    { price: 50, quantity: 2 },
    { price: 10, quantity: 3 }
];

const bill = calculateTotal(cart, 10);

test("Subtotal calculation", bill.subtotal, 130);
test("Tax calculation", bill.tax, 13);
test("Final total calculation", bill.total, 143);

// Invalid item test
let invalidItemRejected = false;

try {
    calculateTotal([{ price: -10, quantity: 1 }]);
} catch (error) {
    invalidItemRejected = true;
}

test("Reject negative price", invalidItemRejected, true);

// Final report
console.log("\n----- TEST SUMMARY -----");
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Total:", passed + failed);
