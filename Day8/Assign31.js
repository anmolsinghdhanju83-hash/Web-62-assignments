
"use strict";

const cart = {
    items: [],

    // Add a product to the cart
    addItem(name, price, quantity) {
        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("Product name cannot be empty.");
        }

        if (
            typeof price !== "number" ||
            !Number.isFinite(price) ||
            price < 0
        ) {
            throw new Error("Price must be a valid non-negative number.");
        }

        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error("Quantity must be a positive whole number.");
        }

        this.items.push({
            name: name.trim(),
            price: price,
            quantity: quantity
        });

        console.log(name + " added to cart.");
    },

    // Calculate total price
    calculateTotal() {
        return this.items.reduce(function (total, item) {
            return total + item.price * item.quantity;
        }, 0);
    },

    // Display cart items
    showCart() {
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
            return;
        }

        console.log("\nSHOPPING CART");

        this.items.forEach(function (item, index) {
            const itemTotal = item.price * item.quantity;

            console.log(
                (index + 1) + ". " + item.name +
                " | Price: Rs. " + item.price +
                " | Quantity: " + item.quantity +
                " | Total: Rs. " + itemTotal
            );
        });

        console.log("Grand Total: Rs. " + this.calculateTotal());
    }
};

// Add products
cart.addItem("Notebook", 50, 2);
cart.addItem("Pen", 10, 3);
cart.addItem("School Bag", 800, 1);

// Display cart
cart.showCart();

// Test invalid quantity
try {
    cart.addItem("Pencil", 5, 0);
} catch (error) {
    console.log("\nValidation Error:", error.message);
}
