
"use strict";

// Student profile object
const student = {
    name: "Anmol Singh",
    course: "BCA AI",
    year: 1,
    city: "Lakhimpur Kheri",
    skills: ["HTML", "CSS", "JavaScript"],
    cgpa: 7.7
};

// Generate a profile summary
function generateProfileSummary(profile) {
    if (
        profile === null ||
        typeof profile !== "object" ||
        Array.isArray(profile)
    ) {
        throw new Error("Profile must be an object.");
    }

    // Get all property names
    const keys = Object.keys(profile);

    // Get all property values
    const values = Object.values(profile);

    // Get key-value pairs
    const entries = Object.entries(profile);

    console.log("===== STUDENT PROFILE =====");

    // Display each property and its value
    entries.forEach(function ([key, value]) {
        const label = key.charAt(0).toUpperCase() + key.slice(1);

        if (Array.isArray(value)) {
            console.log(label + ": " + value.join(", "));
        } else {
            console.log(label + ": " + value);
        }
    });

    console.log("\nTotal Properties:", keys.length);
    console.log("Property Names:", keys.join(", "));
    console.log("Number of Values:", values.length);

    return {
        propertyCount: keys.length,
        propertyNames: keys
    };
}

// Generate and display summary
const summary = generateProfileSummary(student);

console.log("\nSUMMARY OBJECT:");
console.log(summary);
