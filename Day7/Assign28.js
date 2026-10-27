
"use strict";

// 1. Find the largest number in an array
function findLargest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return Math.max(...numbers);
}

// 2. Find the smallest number in an array
function findSmallest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return Math.min(...numbers);
}

// 3. Calculate the sum of array elements
function calculateSum(numbers) {
    return numbers.reduce(function (sum, number) {
        return sum + number;
    }, 0);
}

// 4. Remove duplicate values from an array
function removeDuplicates(items) {
    return [...new Set(items)];
}

// 5. Reverse a string
function reverseString(text) {
    return text.split("").reverse().join("");
}

// 6. Check whether a string is a palindrome
function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleaned === cleaned.split("").reverse().join("");
}

// 7. Count vowels in a string
function countVowels(text) {
    const matches = text.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

// 8. Count words in a string
function countWords(text) {
    const cleaned = text.trim();

    if (cleaned === "") {
        return 0;
    }

    return cleaned.split(/\s+/).length;
}

// ---------- Test the functions ----------

const numbers = [10, 25, 5, 40, 25, 10];

console.log("Original array:", numbers);
console.log("Largest number:", findLargest(numbers));
console.log("Smallest number:", findSmallest(numbers));
console.log("Sum of numbers:", calculateSum(numbers));
console.log("Without duplicates:", removeDuplicates(numbers));

const text = "Hello JavaScript";

console.log("Original string:", text);
console.log("Reversed string:", reverseString(text));
console.log("Vowel count:", countVowels(text));
console.log("Word count:", countWords(text));

console.log("Is 'madam' a palindrome:", isPalindrome("madam"));
console.log(
    "Is 'Hello' a palindrome:",
    isPalindrome("Hello")
);
