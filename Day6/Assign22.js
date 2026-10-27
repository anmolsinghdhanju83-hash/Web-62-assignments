
"use strict";

// Validate a person's name
function validateName(name) {
    if (typeof name !== "string") {
        return "Name must be a string.";
    }

    if (name.trim() === "") {
        return "Name cannot be empty.";
    }

    return "Name is valid.";
}

// Validate age
function validateAge(age) {
    if (typeof age !== "number" || !Number.isFinite(age)) {
        return "Age must be a valid number.";
    }

    if (!Number.isInteger(age)) {
        return "Age must be a whole number.";
    }

    if (age < 1 || age > 120) {
        return "Age must be between 1 and 120.";
    }

    return "Age is valid.";
}

// Validate email (basic format check)
function validateEmail(email) {
    if (typeof email !== "string") {
        return "Email must be a string.";
    }

    const trimmedEmail = email.trim();

    if (trimmedEmail === "") {
        return "Email cannot be empty.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
        return "Email format is invalid.";
    }

    return "Email is valid.";
}

// Test the validation functions
console.log(validateName("Rahul"));
console.log(validateName("   "));

console.log(validateAge(20));
console.log(validateAge(-5));

console.log(validateEmail("rahul@example.com"));
console.log(validateEmail("rahul-example"));
