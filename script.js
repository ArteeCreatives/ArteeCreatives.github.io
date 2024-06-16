const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);

});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

};


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');

};
// Disable click events
document.getElementById('click-blocker').addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
});
// Disable right-click context menu on specific elements
document.querySelectorAll('.disable-download').forEach(function(element) {
    element.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
});
