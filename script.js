const loginForm = document.querySelector(".login-form");
const cartItem = document.querySelector(".cart-items-container");
const navbarMenu = document.querySelector(".navbar-menu");

// buttons
const loginBtn = document.querySelector("#login-btn");
const shopBtn = document.querySelector("#shop-btn");
const menuBtn = document.querySelector("#menu-btn");

loginBtn.addEventListener("click", function () {
    loginForm.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath() .includes(loginBtn) && 
            !e.composedPath() .includes(loginForm)
        ) {
            loginForm.classList.remove("active");
        }
    });
});

shopBtn.addEventListener("click", function () {
    cartItem.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if(
            !e.composedPath() .includes(shopBtn) && 
            !e.composedPath() .includes(cartItem)
        ) {
            cartItem.classList.remove("active");
        }
    });
});

menuBtn.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if(
            !e.composedPath() .includes(menuBtn) && 
            !e.composedPath() .includes(navbarMenu)
        ) {
            navbarMenu.classList.remove("active");
        }
    });
});