let header = document.querySelector(".header");



window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    header.style.background = `#121212`;
    header.style.transition = `.3s`
  } else {
    header.style.background = `transparent`;
    header.style.transition = `.3s`
  }
});

let closeIcon = document.querySelector(".icon .close");
let menu = document.querySelector(".icon .menu");
let ul = document.querySelector(".mobile ul");


menu.addEventListener("click", () => {
  menu.classList.add("active");
  closeIcon.classList.add("active");
  ul.classList.add("active");
});
closeIcon.addEventListener("click", () => {
  menu.classList.remove("active");
  closeIcon.classList.remove("active");
  ul.classList.remove("active");
});



// slider

let slider = document.querySelector(".skills-slider .boxes-cont");
let leftIcone = document.querySelector(".container .left");
let rightIcone = document.querySelector(".container .right");
let box1 = document.querySelectorAll(".boxes-cont .skill-box");
let numBox = 1;
let time;

rightIcone.addEventListener("click", () => {
  numBox++
  clearTimeout(time);
  updatebox();
});

leftIcone.addEventListener("click", () => {
  numBox--
  clearTimeout(time);
  updatebox();
});

updatebox();

function updatebox() {
  if (numBox > box1.length - 2 ) {
    numBox = 1;
  } else if (numBox < 1) {
    numBox = box1.length - 2;
  }
  slider.style.transform = `translateX(-${(numBox - 1) * 240}px)`;
  time = setTimeout(() => {
    numBox++
    updatebox()
  },3000);
};


//bottun
let btn = document.querySelectorAll(".login .container .col form input");

btn.forEach(a => {
  a.addEventListener("click", () => {
    a.classList.add("active")
  })
});

//cart


let cartIcon = document.querySelector(".Social .cart-icon");
let cart = document.querySelector(".header .shopping-cart");
let closeIcone = document.querySelector(".content .title .xmark");
let addBtn = document.querySelectorAll(".text .add-btns");
let quantityInputs =document.querySelectorAll(".cart-box .quantity");
let totalPrice1 = document.querySelector(".check-out .total-price");
let moicon = document.querySelector(".mo-cart");


moicon.addEventListener("click", show)

quantityInputs.forEach(d => {
  d.addEventListener("change", updateTotal);
});

function updateTotal() {
  let total = 0;
  let newBox = document.querySelectorAll(".cart-box");
  for(let i = 0; i < newBox.length; i++) {
    let box = newBox[i];
    let quantity = box.querySelector(".quantity");
    let price = box.querySelector("span");
    console.log(price)
    let quantityValue = quantity.value;
    let priceValue = parseFloat(price.innerHTML.replace("$", ""));
    total = total + (quantityValue * priceValue);
  }
  totalPrice1.innerText = "$" + total;
};

function show() {
  cart.classList.add("active");
}

cartIcon.addEventListener("click", show);

closeIcone.addEventListener("click", () => {
  cart.classList.remove("active")
});

addBtn.forEach(a => {
  a.addEventListener("click", addToCart)
});

function addToCart(event) {
  let sel = event.target;
  let box = sel.parentElement.parentElement;
  let imgSrc = box.querySelector("img").src;
  let title = box.querySelector("h3").innerText;
  let price = box.querySelector("span").innerText;
  show();
  addCart(imgSrc, title, price);
  updateTotal()
};


function addCart(imgSrc, title, price) {
  let proName = document.querySelectorAll(".cart-name");
  for (let i = 0; i < proName.length; i++) {
    if (proName[i].innerText === title) {
      let inputValu = document.querySelectorAll(".quantity");
      inputValu[i].value++;
      return
    };
  };

  let newBox = document.createElement("div");
  newBox.classList.add("cart-box");
  let dadBox = document.querySelector(".shopping-cart .cart-boxes");
  dadBox.appendChild(newBox);
  let cartBox = `
  <img src="${imgSrc}" alt="">
  <div class="details">
    <div class="cart-name">${title}</div>
    <span class="cart-price">${price}</span>
  </div>
  <input type="number" min="1" class="quantity" value="1">
  <i class="fa-solid fa-trash-can trash-icon"></i>
  `
  newBox.innerHTML = cartBox;
  newBox.querySelector(".trash-icon").addEventListener("click", (e) => {
    e.target.parentElement.remove();
    updateTotal();
  });
  newBox.querySelector(".quantity").addEventListener("change", updateTotal)
};




//top scroll

let topIcon = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (scrollY > 300) {
    topIcon.classList.add("active");
  } else {
    topIcon.classList.remove("active");
  }
});

topIcon.addEventListener("click", () => {
  window.scrollTo( 0, 0)
});
