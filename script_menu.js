const btn = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const ul = document.querySelector('.menu > ul');

btn.addEventListener('click', function () {
    btn.classList.toggle('active')
    menu.classList.toggle('active')
    ul.classList.toggle('active')
 });