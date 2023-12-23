let divs = document.getElementById("divs");
let input = document.getElementById("input");

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  
  .then((data) => {
    const allProducts = data; 

    function displayProducts(products) {
  
      divs.innerHTML = '';
      products.map((item) => {
        
        let div0 = document.createElement("div");
        div0.setAttribute("id", "div_continer0");

        let div1 = document.createElement("div");
        div1.setAttribute("id", "div_continer1");

        let img1 = document.createElement("img");
        img1.setAttribute("src", item.image);
        img1.setAttribute("id", "imgs1");  

        let titles = document.createElement("div");
        titles.innerText = item.title;
        titles.setAttribute("id", "titles1");

        let price = document.createElement("p");
        price.setAttribute("id", "price1");
        price.innerText = "$" + item.price;

        let cart = document.createElement("button");
        cart.setAttribute("id", "cart");
        cart.innerText = "ADD TO CART";

        let buynow = document.createElement("button");
        buynow.setAttribute("id", "buynow");
        buynow.innerText = "BUY NOW";

        divs.appendChild(div0)
        div0.appendChild(div1);
        
        div1.appendChild(img1);
        div1.appendChild(titles);
        div1.appendChild(price);
        div1.appendChild(cart);
        div1.appendChild(buynow);
      });
    }
    displayProducts(allProducts);
    input.addEventListener("input", () => {
      const searchQuery = input.value.toLowerCase();
      const filteredProducts = allProducts.filter(item =>
        item.title.toLowerCase().includes(searchQuery)
      );
      displayProducts(filteredProducts);
      console.log(filteredProducts);
    });
  });

