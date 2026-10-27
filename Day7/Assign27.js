
"use strict";

// 1. Remove extra spaces from text
function cleanText(text) {
    if (typeof text !== "string") {
        throw new TypeError("Input must be a string.");
    }

    return text.trim().replace(/\s+/g, " ");
}

// 2. Convert text to lowercase
function normalizeText(text) {
    return cleanText(text).toLowerCase();
}

// 3. Capitalize the first letter of each word
function capitalizeWords(text) {
    return normalizeText(text).replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
}

// 4. Clean an email address
function cleanEmail(email) {
    if (typeof email !== "string") {
        throw new TypeError("Email must be a string.");
    }

    return email.trim().toLowerCase();
}

// 5. Validate an email address (basic check)
function isValidEmail(email) {
    const cleanedEmail = cleanEmail(email);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(cleanedEmail);
}

// Test the utility functions
const rawName = "   anmol     singh   ";
const rawEmail = "  ANMOL@EXAMPLE.COM  ";

console.log("Original name:", JSON.stringify(rawName));
console.log("Cleaned name:", cleanText(rawName));
console.log("Capitalized name:", capitalizeWords(rawName));
console.log("Cleaned email:", cleanEmail(rawEmail));
console.log("Email valid:", isValidEmail(rawEmail));
console.log("Empty text:", JSON.stringify(cleanText("   ")));
