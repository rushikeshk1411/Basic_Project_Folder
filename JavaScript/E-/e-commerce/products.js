const url1 = "https://fakestoreapi.com/products"
async function getData() {
	try {
		let res = await fetch(url1)// response object
		let products = await res.json()//json- products
		append(products)
	} catch (err) {
		console.log(err)
	}
}
getData()

const cont = document.getElementById("cont")
function append(data) {
	data.forEach((el) => {
		let img = document.createElement("img")
		img.src = el.image
		let category = document.createElement("h2")
		category.innerText = el.category
		let title = document.createElement("h2")
		title.innerText = el.title
		let desc = document.createElement("p")
		desc.innerText = el.description
		let price = document.createElement("p")
		price.innerText = el.price
		let rating = document.createElement("p")
        rating.innerText = el.rating.rate;
        let cartButton = document.createElement('button')
        cartButton.textContent = 'Add to Cart';
        cartButton.setAttribute('data-product',JSON.stringify(el))
         cartButton.addEventListener('click', addToCart)
		let div = document.createElement("div")
		div.append(img, category, title, desc, price, rating, cartButton)
		cont.appendChild(div)
	})
}
// let cart =JSON.parse(localStorage.getItem('cart'))||[];
let cart = [];
function addToCart (event)
{
    const prodData = JSON.parse(event.target.getAttribute('data-product'))
	cart.push(prodData);
	// localStorage.setItem('cart',JSON.stringify(cart))
    updateCart();
}
const cartValue=document.getElementById('cart-value')
function updateCart ()
{
    const cartTotal = cart.reduce((total, pro) => total + pro.price, 0)
    cartValue.textContent= `${cartTotal.toFixed(2)}`
} 
const checkoutButton = document.getElementById('checkout');

checkoutButton.addEventListener('click', checkout)
function checkout ()
{
	const cartDetails = [];
	for (let key in cart)
	{
		cartDetails.push(key)
		console.log(cartDetails)
		}
}