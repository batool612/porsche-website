

// sidebar animation
const btn = document.querySelector(".btn-menu")
const sidebar = document.querySelector(".sidebar")

btn.addEventListener("click",()=>{
   btn.classList.toggle("click");
   sidebar.classList.toggle("show")
})


const featBtn = document.querySelector(".feat-btn")
const featShow = document.querySelector(".feat-show")
const first = document.querySelector(".first")

featBtn.addEventListener("click",()=>{
    featShow.classList.toggle("show")
    first.classList.toggle("rotate")
})


// Function to show the register form and hide the login form
function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Function to show the login form and hide the register form
function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}
