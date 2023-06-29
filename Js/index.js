let Mobilemenu = document.querySelector("#menu-bars");
let nav = document.querySelector(".navbar");

Mobilemenu.onclick = () => {
  Mobilemenu.classList.toggle("fa-xmark");
  nav.classList.toggle("active");
};
window.onscroll = () => {
  Mobilemenu.classList.remove("fa-circle-xmark");
  nav.classList.toggle("active");
};
window.onscroll = () => {
  Mobilemenu.classList.remove("fa-times");
  nav.classList.remove("active");
};
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

let orderBtn = document.querySelectorAll(".order-btn");
let dish = document.querySelectorAll(".dish-name");

orderBtn.forEach(selected=>{
    selected.addEventListener('click', ()=>{
    alert("Thanks for ordering with In a flash")
        
        selected.style.backgroundColor = "#666";
        
      });
    })



// for home slider
var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

 
