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

inventory.forEach(inventory =>
    console.log(`sku:${inventory.sku} | name:${inventory.name} | price:${inventory.price} | stock:${inventory.stock}`)
)
// Step 3: Manage Inventory Changes

// Push in New Product

let newInventory = {
    name: "jersey"
};
inventory.push(newInventory);
console.log(newInventory);

// Pop Original Product

inventory.pop(3);
console.log(inventory);

// Update Price of One Product and Stock of Another

inventory[1].price = 30;
inventory[2].stock = 70;

// Step 4: Create and Process Orders

let orders = [
{
    orderId: "005",
    items: [sku = "002", quanity = 25]
},
{
    orderId: "006",
    items: [ sku = "001", quanity = 15]
}];











