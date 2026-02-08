// Step 2: Model the Inventory

let inventory = [
{ 
    sku: "001",
    name: "baseball",
    price: 15.00,
    stock: 20
},
{
    sku: "002",
    name: "football",
    price: 25.00,
    stock: 25,
},
{
    sku: "003",
    name: "basketball",
    price: 40,
    stock: 45,
},
{
    sku: "004",
    name: "hockey puck",
    price: 50,
    stock: 10,
}
];

// Step 3: Manage Inventory Changes

// Push in New Product
let newInventory = {
    name: "jersey"
};
inventory.push(newInventory);
console.log(newInventory);

// Pop Original Product
inventory.pop(3);

// Update Price of One Product and Stock of Another
inventory[1].price = 30;
inventory[2].stock = 70;

// Step 4: Create and Process Orders









