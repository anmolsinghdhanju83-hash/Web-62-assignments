
"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let shoppingList = [];

function showMenu() {
    console.log("\n===== SHOPPING LIST MANAGER =====");
    console.log("1. Add an item");
    console.log("2. View shopping list");
    console.log("3. Remove an item");
    console.log("4. Exit");

    rl.question("Choose an option (1-4): ", handleChoice);
}

function handleChoice(choice) {
    if (choice === "1") {
        rl.question("Enter item name: ", function (item) {
            item = item.trim();

            if (item === "") {
                console.log("Item name cannot be empty.");
            } else {
                shoppingList.push(item);
                console.log(item + " added successfully.");
            }

            showMenu();
        });
    } else if (choice === "2") {
        if (shoppingList.length === 0) {
            console.log("Your shopping list is empty.");
        } else {
            console.log("\nYour Shopping List:");

            shoppingList.forEach(function (item, index) {
                console.log((index + 1) + ". " + item);
            });
        }

        showMenu();
    } else if (choice === "3") {
        if (shoppingList.length === 0) {
            console.log("There are no items to remove.");
            showMenu();
            return;
        }

        shoppingList.forEach(function (item, index) {
            console.log((index + 1) + ". " + item);
        });

        rl.question("Enter item number to remove: ", function (answer) {
            const index = Number(answer) - 1;

            if (
                answer.trim() === "" ||
                !Number.isInteger(Number(answer)) ||
                index < 0 ||
                index >= shoppingList.length
            ) {
                console.log("Invalid item number.");
            } else {
                const removed = shoppingList.splice(index, 1);
                console.log(removed[0] + " removed successfully.");
            }

            showMenu();
        });
    } else if (choice === "4") {
        console.log("Thank you for using the Shopping List Manager!");
        rl.close();
    } else {
        console.log("Invalid choice. Please select 1, 2, 3, or 4.");
        showMenu();
    }
}

showMenu();
