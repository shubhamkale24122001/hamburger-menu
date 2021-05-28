const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', open);
closeMenu.addEventListener('click', close);

function open(){
    mainMenu.style.display= 'flex';
    mainMenu.style.top='0';
} 

function close(){
    mainMenu.style.top= '-100%';
}
