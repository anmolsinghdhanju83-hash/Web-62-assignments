
"use strict";

// Store student information in an array of objects
const students = [
    { name: "Anmol", marks: 85 },
    { name: "Rahul", marks: 75 },
    { name: "Priya", marks: 90 }
];

// Calculate average marks
function calculateAverage(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) {
        return null;
    }

    let total = 0;

    for (const student of studentList) {
        if (
            !student ||
            typeof student.marks !== "number" ||
            !Number.isFinite(student.marks)
        ) {
            throw new Error("Each student must have valid marks.");
        }

        total += student.marks;
    }

    return total / studentList.length;
}

// Display student details
console.log("STUDENT DETAILS");

students.forEach(function (student) {
    console.log(student.name + ": " + student.marks);
});

console.log("Average Marks:", calculateAverage(students));

// Test cases
console.log("\nTEST CASES");

console.log(
    "Test 1:",
    calculateAverage([{ marks: 80 }, { marks: 100 }]) === 90
);

console.log(
    "Test 2:",
    calculateAverage([]) === null
);

console.log(
    "Test 3:",
    calculateAverage([{ marks: 60 }, { marks: 80 }]) === 70
);
