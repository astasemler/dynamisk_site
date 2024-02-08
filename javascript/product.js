//https://kea-alt-del.dk/t7/api/products/1525
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/1165" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".product_name").textContent = product.productdisplayname;
  document.querySelector(".purchaseMe_model_name").textContent = product.productdisplayname;
  document.querySelector(".gender").textContent = product.gender + " - ";
  document.querySelector(".category").textContent = product.category + " by";
  document.querySelector(".purchaseMe_brand").textContent = product.brandname + " - ";
  document.querySelector(".purchaseMe_subcategory").textContent = product.subcategory + " - ";
  document.querySelector(".purchaseMe_articletype").textContent = product.articletype;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
