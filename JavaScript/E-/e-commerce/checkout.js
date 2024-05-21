
import { checkout } from "./products.js"

const cart = JSON.parse(checkout)
console.log(cart)
document.getElementById("cart-details").textContent = JSON.stringify(cart, null, 2)

var val1 = 10;
let val2 = 15;
function Clear(){
    var val = 34;
    console.log(val)
    console.log(val1)
    console.log(val2)
}
Clear();
console.log(val);
