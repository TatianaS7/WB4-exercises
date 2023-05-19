let subtotal = 0;

let lunch = [
    {item: "California Roll", price: 6.75},
    {item: "Arizona", price: 0.99},
    {item: "Vegetable Fried Rice", price: 8.99}
];

function lunchSubtotal (array) {
    for (let i = 0; i < array.length; i++) { //loops through array
            subtotal += array[i].price; //adds the price indice to subtotal
        }
        
    console.log(`Subtotal: $ ${subtotal} \nTax: $ ${subtotal * .08} \nTip: $ ${subtotal * .18}`)
    }

lunchSubtotal(lunch);