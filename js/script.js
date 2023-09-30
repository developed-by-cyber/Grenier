let navs = document.querySelectorAll(".nav");
let lists = document.querySelectorAll("nav ul li");
let logo = document.querySelector("nav .logo");
let bt1 = document.querySelector("nav .btns button");
let bt2 = document.querySelector("nav .btns button:last-child");
window.addEventListener("scroll", () => {
  if (scrollY > 90) {
    navs.forEach((nav) => {
      nav.classList.add("sticky");
    });
    bt1.classList.add("login");
    bt2.classList.add("reg");
  } else {
    navs.forEach((nav) => {
      nav.classList.remove("sticky");
    });
    // logo.style.color= "#233A95";
    bt1.classList.remove("login");
    bt2.classList.remove("reg");
  }
});

// let show = document.querySelector(".show");
// let hide = document.querySelector(".hide");
let menu = document.querySelector(".side-menu");

function show() {
  menu.classList.add("show");
}

function hide() {
  menu.classList.remove("show");
}
function helps() {
  let help = document.querySelector(".shop1 .left");
  help.classList.toggle("helps");
}
function helps2() {
  let help2 = document.querySelector(".shop2 .left");
  help2.classList.toggle("helps");
}

// let qun = document.querySelectorAll(".qun");
// let add = document.querySelectorAll(".add");
// let sub = document.querySelectorAll(".subs");
// add.forEach((adds) => {
//   adds.addEventListener("click", () => {
//     qun.forEach(quns =>{
//         quns.value = parseInt(quns.value) + 1;
//     })
//   });
// });
// sub.forEach((subs) => {
//   subs.addEventListener("click", () => {
//     qun.forEach(quns =>{
        
//     })
//     if (qun.value <= 1) {
//       qun.value = 1;
//     } else {
//       qun.value = parseInt(qun.value) - 1;
//     }
//   });
// });
