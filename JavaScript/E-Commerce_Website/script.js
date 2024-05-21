const productList = document.getElementById("productList");

fetch("https://fakestoreapi.com/products")
  .then((res)=>{ return res.json()})
  .then((products) => {
    console.log("Hellow")
    DisplayProducts(products);
  });

function DisplayProducts(products) {
  products.forEach((product) => {
    const litag = document.createElement("li");
    litag.classList.add("proda");
    const img = document.createElement("img");
    img.classList.add("productimage")
    img.src = product.image;
    img.alt = product.title;
    const idtag = document.createElement("p");
    idtag.textContent = product.id;
    const titletag = document.createElement("h3");
    titletag.textContent = product.title.slice(0, 4);
    const descriptiontag = document.createElement("p");
    descriptiontag.textContent = product.description.slice(0, 70);
    console.log(product.description.slice(0, 70))
    const category = document.createElement("p");
    category.textContent = product.category;
    const rating = document.createElement("p");
    rating.textContent = product.rating.rate;
    litag.appendChild(img);
    // litag.appendChild(idtag);
    litag.appendChild(titletag);
    // litag.appendChild(descriptiontag);
    litag.appendChild(category);
    litag.appendChild(rating);
    productList.appendChild(litag);
    console.log("End")
  });
}
