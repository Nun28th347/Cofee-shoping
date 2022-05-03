/* class="navbar" */
let navbar = document.querySelector('.navbar');

/* id="menu-btn" */
/* onclick menu-btn */
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active'); /* เมื่อกดดIIIขึ้นnavbar active */
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


/* <div class="icon"></div> */
/* ==> */
/* class="search-form" */
let searchForm = document.querySelector('.search-form');

/* id="cart-btn" */
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}



/* class = cart-item-container */
let cartItem = document.querySelector('.cart-item-container');

/* id="cart-btn" */
document.querySelector('#cart-btn').onclick = () =>
{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}



/* ขึ้นแค่เมนูเดียว ถ้าขึ้นอีกอัน ลบอีกอันออก */
window.onscroll = () =>
{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}