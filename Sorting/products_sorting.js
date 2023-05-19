let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Albanese Gummy Bears", price: 2.99},
    {product: "Nerds Rope", price: 1.49},
    {product: "Sour Punch Straws", price: 1.99},
    {product: "Sour Skittles", price: 1.99},
    {product: "Cadbury Milk Chocolate Bar", price: 3.49},
    {product: "Reeses Peanut Butter Cups", price: 1.79}
    ];


products.sort(function(a, b) {
    if (a.product < b.product) {
        return -1;
    } else if (a.product == b.product) {
        return 0;
    } else {
        return 1;
    }
});

let inOrder = products.length;

for (let i = 0; i < inOrder; i++) {
    console.log(products[i].product);
}