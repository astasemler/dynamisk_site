fetch("https://kea-alt-del.dk/t7/api/products")
  .then((Response) => Response.json())
  .then(showProducts);

function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //fange template
  const template = document.querySelector("#smallProductTemplate").content;

  //   lav en kopi
  const copy = template.cloneNode(true);

  // ændret indhold
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector(".model_navn_p_txt").textContent = product.productdisplayname;
  copy.querySelector(".pris_p_txt").textContent = product.price + ",- DKK";
  copy.querySelector(".usagetype_p_txt").textContent = product.usagetype;
  copy.querySelector(".udsalg_p_txt").textContent = product.discount + ",- DKK";

  // discount / tilbud
  if (!product.discount) {
    //console.log("NOT DISCOUNT")
    // copy.querySelector(".udsalg_p_txt").classList.add("hidden");
    const p = document.createElement("p");
    p.textContent = "Tilbud";
    p.classList.add("discount");
    copy.querySelector("article").appendChild(p);
  } else {
    copy.querySelector(".udsalg_p_txt").textContent = Math.round((100 - product.discount) * 0.01 * product.price) + ",- DKK";
    // copy.querySelector("article").classList.add("discount");
  }

  // usolgt
  copy.querySelector(".pris_p_txt").textContent = product.price + ",- DKK";
  if (product.soldout) {
    const p = document.createElement("p");
    p.textContent = "Sold Out";
    p.classList.add("soldout");
    copy.querySelector("article").appendChild(p);
  }

  // appende til DOM
  document.querySelector(".produkt1").appendChild(copy);

  //   URL dims copy/paste moment
  const urlParams = new URLSearchParams(window.location.search);
}
