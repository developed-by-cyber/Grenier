let nav = document.querySelector("nav");
let lists = document.querySelectorAll("nav ul li");
let logo = document.querySelector("nav .logo");
let bt1 =  document.querySelector("nav .btns button");
let bt2 =  document.querySelector("nav .btns button:last-child");
window.addEventListener("scroll", () =>{
    if(scrollY > 90){
        nav.classList.add("sticky");
        lists.forEach(lis =>{
            lis.style.color= "white";
        })
        logo.style.color= "white";
        bt1.classList.add("login");
        bt2.classList.add("reg");
    }else{
        nav.classList.remove("sticky");
        lists.forEach(lis =>{
            lis.style.color= "#233A95";
        })
        logo.style.color= "#233A95";
        bt1.classList.remove("login");
        bt2.classList.remove("reg");
    }
})
