//selecting elements
const productsEl = document.querySelector(".products");

//render products
function renderProducts(){
    products.forEach( (product) => {
        productsEl.innerHTML += `
        <div class="list" id="products">

<div id="pineapple">
    
    <div class="box1">
    
        <h3>${product.name}</h3>
    
        <img src="${product.imgSrc}" alt="pineapple" width="10%" height="10%" class="add-to-cart" onclick="addToCart(${product.id})">
    </div>

    <div class="box2">
        
        <h4>Price</h4>
        
    </div>

    <div class="box3">
        
        <p>${product.price}</p>
    
    </div>
        
    <div class="box4">

        <p>${product.priceRepeat}</p>
    
    </div>

</div>

        
        
        `;
    })
}
renderProducts();


//cart array
let cart = [];
//Add to cart 
function addToCart(id) {
    const item = products.find((product) => product.id === id)

    console.log(item);
}

























