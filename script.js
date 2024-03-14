

// sidebar animation
const btn = document.querySelector(".btn-menu")
const sidebar = document.querySelector(".sidebar")

btn.addEventListener("click",()=>{
   btn.classList.toggle("click");
   sidebar.classList.toggle("show")
})


// $('.feat-btn').click(function(){
//     $('nav ul .feat-show').toggleClass("show");
//     $('nav ul .first').toggleClass("rotate");
//   });

const featBtn = document.querySelector(".feat-btn")
const featShow = document.querySelector(".feat-show")
const first = document.querySelector(".first")

featBtn.addEventListener("click",()=>{
    featShow.classList.toggle("show")
    first.classList.toggle("rotate")
})