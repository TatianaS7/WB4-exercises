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
    
    // Which candies costs less than $4.00?
    function under4(array) {
        let candies = [];
    
        for (let i = 0; i < array.length; i++) {
            let contents = array[i].product;
            if (array[i].price <= 4.00) {
                    candies.push(contents);
                }
            }
            console.log(`The candies that cost less than $4.00 are ${candies.join(", ")}.`);
    }
    under4(products);

    // Which candies has "M&M" its name?
    function mAndM(array) {
        let mm = [];
    
        for (let i = 0; i < array.length; i++) {
            let contents = array[i].product;
            if (array[i].product.includes("M&Ms")) {
                    mm.push(contents);
                }
            }
        console.log(`The candies that have M&M in its name are ${mm.join(", ")}.`);
    }
    mAndM(products);

    // Do we carry "Swedish Fish"?
    function swedishFish(array) {
    
        for (let i = 0; i < array.length; i++) {
            if (array[i].product.includes("Swedish Fish")) {
            }
        }
        console.log("Yes, we do carry Swedish Fish.");
    }
    swedishFish(products);