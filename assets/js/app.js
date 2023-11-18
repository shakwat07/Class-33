// Variables Starts

let openSearch = document.querySelector("#open_search");
let closeSearch = document.querySelector("#close_search");
let search = document.querySelector("#search");
let language = document.querySelector("#language_btn");
let currency = document.querySelector("#currency_btn");
let language_item = document.querySelector(".language");
let currency_item = document.querySelector(".currency");
let cartShow = document.querySelector("#cart_show_btn");
let sideMenu = document.querySelector("#side_menu");
let sideMenuClose = document.querySelector(".side_menu_close");


// Variables Ends

// Search Pop Up JS Starts
openSearch.addEventListener("click", () => {
  search.classList.add("show");
  if (language_item.classList.contains("visible")){
    language_item.classList.remove("visible");
  }
  else if (currency_item.classList.contains("visible")){
    currency_item.classList.remove("visible");
  }
});
closeSearch.addEventListener("click", () => {
  search.classList.remove("show");
});

// Search Pop Up JS Ends

// Top Header Drop Down JS Starts

language.addEventListener("click", () => {
  language_item.classList.toggle("visible");
  if (currency_item.classList.contains("visible")) {
    currency_item.classList.remove("visible");
  }
});
currency.addEventListener("click", () => {
  currency_item.classList.toggle("visible");
  if (language_item.classList.contains("visible")) {
    language_item.classList.remove("visible");
  }
});
// Top Header Drop Down JS Ends


//Shopping Cart Side Menu JS Starts
cartShow.addEventListener("click",()=>{
  sideMenu.classList.add("side_menu_show");
  if (language_item.classList.contains("visible")){
    language_item.classList.remove("visible");
  }
  else if (currency_item.classList.contains("visible")){
    currency_item.classList.remove("visible");
  }
})
sideMenuClose.addEventListener("click",()=>{
  sideMenu.classList.remove("side_menu_show");
})
//Shopping Cart Side Menu JS Ends

// Hero Slider JS Starts
$(".hero_slider").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  fade: true,
  speed: 600,
  dots: true,
  dotsClass: "hero_slider_dots",
  pauseOnHover: false,
  pauseOnFocus: false,
});
// Hero Slider JS Ends